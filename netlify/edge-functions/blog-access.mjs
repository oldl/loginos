import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { Buffer } from 'node:buffer';

const digest = (value) => createHash('sha256').update(value).digest();
const equal = (a, b) => timingSafeEqual(digest(a), digest(b));
const cookieName = '__Host-loginos-access';
const maxAge = 30 * 24 * 60 * 60;
const sign = (expiry, password) =>
  createHmac('sha256', password).update(`loginos-access:${expiry}`).digest('base64url');

export const config = {
  path: '/*',
  excludedPath: ['/admin', '/admin/*', '/.netlify/identity/*', '/.netlify/git/*'],
};

export default async function blogAccess(request, context) {
  const password = Netlify.env.get('BLOG_ACCESS_PASSWORD');
  const headers = { 'Cache-Control': 'private, no-store' };

  if (!password) {
    return new Response('Blog access is not configured.', { status: 503, headers });
  }

  const authorization = request.headers.get('Authorization') ?? '';
  const match = /^Basic ([A-Za-z0-9+/=]+)$/i.exec(authorization);
  const expected = Buffer.from(`blog:${password}`, 'utf8').toString('base64');
  const now = Math.floor(Date.now() / 1000);
  const cookie = (request.headers.get('Cookie') ?? '').split(';')
    .map((part) => part.trim()).find((part) => part.startsWith(`${cookieName}=`));
  const session = /^(\d{1,12})\.([\w-]{43})$/.exec(cookie?.slice(cookieName.length + 1) ?? '');
  const remembered = session && Number(session[1]) > now
    && equal(session[2], sign(session[1], password));

  if (!remembered && (!match || !equal(match[1], expected))) {
    return new Response('Authentication required.', {
      status: 401,
      headers: { ...headers, 'WWW-Authenticate': 'Basic realm="LoginOS", charset="UTF-8"' },
    });
  }

  const response = await context.next();
  const protectedResponse = new Response(response.body, response);
  protectedResponse.headers.set('Cache-Control', headers['Cache-Control']);
  if (!remembered) {
    const expiry = now + maxAge;
    protectedResponse.headers.append('Set-Cookie',
      `${cookieName}=${expiry}.${sign(expiry, password)}; Max-Age=${maxAge}; Path=/; HttpOnly; Secure; SameSite=Lax`);
  }
  return protectedResponse;
}

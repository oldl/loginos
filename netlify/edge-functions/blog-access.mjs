import { createHash, timingSafeEqual } from 'node:crypto';
import { Buffer } from 'node:buffer';

const digest = (value) => createHash('sha256').update(value).digest();

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

  if (!match || !timingSafeEqual(digest(match[1]), digest(expected))) {
    return new Response('Authentication required.', {
      status: 401,
      headers: { ...headers, 'WWW-Authenticate': 'Basic realm="LoginOS", charset="UTF-8"' },
    });
  }

  const response = await context.next();
  const protectedResponse = new Response(response.body, response);
  protectedResponse.headers.set('Cache-Control', headers['Cache-Control']);
  return protectedResponse;
}

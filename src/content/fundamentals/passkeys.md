---
title: "Passkeys"
order: 3
summary: "Phishing-resistant and passwordless by design — but adoption depends entirely on how they're introduced."
---

Passkeys replace shared secrets with device-bound cryptographic key pairs backed by biometrics or a device PIN. They remove the two biggest weaknesses of passwords — reuse and phishability — without asking users to remember anything.

## Where products get this wrong

Teams treat passkeys as a switch to flip rather than a habit to build. Forcing enrollment during signup, before a user has any reason to trust the product, produces high drop-off. Others bury passkeys three menus deep in account settings, where almost nobody finds them.

## What good looks like

- Introduce passkeys progressively: after a successful login, after account recovery, and as a visible option in account settings — never as a signup requirement.
- Explain the benefit in product terms ("sign in with your face or fingerprint, no password to remember"), not cryptographic terms.
- Keep a fallback method available; passkeys without hype means treating them as the best option, not the only option.
- Support cross-device passkeys (via QR/hybrid transport) so a new device isn't a dead end.

See [Progressive passkey enrollment](/patterns/progressive-passkey-enrollment) for the full interaction pattern.

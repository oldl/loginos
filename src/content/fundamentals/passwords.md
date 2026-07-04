---
title: Passwords
order: 1
summary: AAAAAStill the default authenticator for most products — and the one
  most likely to be misconfigured.
---

Passwords remain the baseline authenticator across the web, and for many products they will stay that way for years. The job is not to eliminate them overnight — it's to stop them from being the weakest, most inconsistent part of the login experience.

## Where products get this wrong

Password rules are usually written once, by whoever built the signup form, and never revisited. The result is a patchwork: one flow requires a symbol, another doesn't; one blocks paste, another allows twelve-character passwords with no other checks. Users experience this as arbitrary friction, not security.

## What good looks like

- A single, harmonized password policy applied everywhere a password is set or changed.
- Real-time, plain-language validation — not a bullet list revealed only after a failed submit.
- No blocking of password managers: allow paste, allow long passwords, allow spaces.
- Checking new passwords against breach corpora (e.g. Have I Been Pwned's range API) instead of forcing arbitrary complexity rules.

Passwords are the foundation every other fundamental — MFA, recovery, passkeys — sits on top of. Harmonizing them first is why it's the top priority in the [decision log](/decision-log).

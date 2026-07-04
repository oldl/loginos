---
title: "Multi-factor authentication"
order: 2
summary: "A second factor is only as good as its fallback — design the whole chain, not just the happy path."
---

MFA reduces account takeover risk dramatically, but most of its real-world failures happen in the parts teams design last: enrollment, recovery, and device loss.

## Where products get this wrong

Teams ship a single MFA method (usually SMS or TOTP) and treat it as complete. When a user loses their phone, there's no documented path back in — support ends up doing manual identity verification over email, which is slower and less secure than the MFA it was meant to protect.

## What good looks like

- Offer at least one possession factor (authenticator app or passkey) and one recovery-safe fallback.
- Make enrollment take under a minute, with a clear explanation of *why*, not just *how*.
- Store multiple recovery codes at enrollment time — not as an afterthought after the first lockout.
- Treat MFA as a stepping stone to passkeys, not a permanent end state.

MFA and [passkeys](/fundamentals/passkeys) solve overlapping problems; the difference is where the cryptographic proof lives.

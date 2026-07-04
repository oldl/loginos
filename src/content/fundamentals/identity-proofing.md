---
title: "Identity proofing"
order: 6
summary: "Knowing a device belongs to a returning user is different from knowing who that user legally is."
---

Identity proofing answers a stronger question than authentication does: not "is this the same account as before" but "is this a real, specific, verifiable person." It matters most where legal, medical, or financial obligations require it.

## Where products get this wrong

Teams conflate proofing with authentication and either over-verify low-risk actions (asking for ID scans to reset a newsletter preference) or under-verify high-risk ones (allowing a password reset alone to unlock access to medical or financial records).

## What good looks like

- Match the proofing method to the risk of the action, not to a single blanket policy.
- Reuse strong national eID or identity-verification schemes (in Belgium, itsme and CSAM/GOK) rather than building proofing from scratch.
- Make the proofing step explain *why* it's needed, in plain language, at the moment it's required.
- Keep a proofed identity portable across sessions and devices so users aren't re-proofing unnecessarily.

The [Partenamut case study](/case-studies/partenamut) walks through how CSAM, itsme and GOK combine to handle this today.

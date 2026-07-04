---
title: "Account recovery"
order: 5
summary: "The path back into an account is the path most likely to be attacked — and most often designed last."
---

Recovery is the flow every product needs and almost none design deliberately. It's usually a byproduct of whatever the support team improvised for the first locked-out user, then never revisited.

## Where products get this wrong

Recovery is treated as a support-desk problem rather than a product surface. Email-only recovery becomes a single point of failure; security questions ("mother's maiden name") are both insecure and unpleasant to answer; and a successful recovery ends the flow with no attempt to strengthen the account afterward.

## What good looks like

- Offer at least two independent recovery paths (e.g. verified email + backup device or trusted contact).
- Never rely on knowledge-based security questions as a primary factor.
- Make error and guidance copy specific: tell the user exactly what to check, not "something went wrong."
- Treat a completed recovery as the best moment to prompt passkey enrollment — the user is already motivated to avoid this happening again.

This is the basis for [Recovery as passkey trigger](/patterns/recovery-as-passkey-trigger), one of the highest-leverage patterns in this playbook.

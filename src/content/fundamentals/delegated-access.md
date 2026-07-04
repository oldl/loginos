---
title: "Delegated access"
order: 7
summary: "Someone acting on another person's behalf is a normal case, not an edge case — design it as one."
---

Delegated access covers every situation where one person legitimately acts on another's account: a family member managing a parent's healthcare portal, an assistant handling a manager's calendar, a company accountant filing on a client's behalf.

## Where products get this wrong

Delegation gets bolted on as a workaround — sharing a password, or support manually granting access over the phone with no audit trail. Both erode the account owner's actual security and leave no record of who did what.

## What good looks like

- Model delegation as its own first-class relationship, with its own scoped permissions — not shared credentials.
- Let the account owner grant, see, and revoke delegate access from a single, visible screen.
- Log delegate actions distinctly from the owner's own actions.
- Time-box or scope sensitive delegated actions (e.g. view-only vs. transact) rather than all-or-nothing access.

Done well, delegated access removes the password-sharing habit that otherwise undermines every other fundamental in this list.

---
title: "Sessions"
order: 4
summary: "The login screen gets all the attention; the session that follows is where trust is actually lived."
---

A session is the ongoing promise that "you are still who you say you are." How long that promise lasts, how it's renewed, and how visibly it expires shapes user trust as much as the login screen itself.

## Where products get this wrong

Sessions either expire silently — a user comes back to find they've been logged out with no explanation and loses whatever they were doing — or never expire at all, which quietly becomes a security liability on shared or lost devices.

## What good looks like

- Communicate session length in product terms at login ("you'll stay signed in for 30 days on this device").
- Warn before expiry when there's unsaved work, rather than failing silently mid-task.
- Offer a visible "active sessions" list in account settings, with one-tap revoke per device.
- Use shorter sessions for sensitive actions (payments, data export) layered on top of a longer general session — step-up, not one blanket timeout.

Session design connects directly to [session expiry transparency](/patterns/session-expiry-transparency), one of the core patterns in this playbook.

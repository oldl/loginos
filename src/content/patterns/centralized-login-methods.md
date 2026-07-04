---
title: "Centralized login methods"
order: 6
tags: ["Account settings", "Trust"]
problem: "Users often can't tell what they signed up with — a password, itsme, Google — and end up creating duplicate accounts or getting stuck at login."
recommendation: "Give every account a single 'Login methods' screen listing every active method (password, passkeys, itsme, MFA devices) with add/remove controls in one place."
uxImpact: "Removes the guesswork of 'how did I sign up' and gives users a sense of control over their own account security."
securityImpact: "Makes it obvious when an unfamiliar method has been added, which helps users notice account takeover attempts early."
implementationNotes: "Require step-up authentication before removing a method, and always keep at least one recovery-safe method active at all times."
---

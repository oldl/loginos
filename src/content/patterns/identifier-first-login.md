---
title: "Identifier-first login"
order: 1
tags: ["Login", "Onboarding"]
problem: "Asking for username and password on the same screen forces one rigid flow for every user, even though the right next step (password, passkey, SSO, magic link) depends entirely on who they are."
recommendation: "Ask for the identifier (email or phone) first, then branch to the correct authentication method for that account on the next screen."
uxImpact: "Removes irrelevant fields, shortens the perceived flow, and lets returning users see personalized options like 'Continue with passkey' immediately."
securityImpact: "Enables risk-based checks (device recognition, rate limiting) before a credential is even entered, and avoids leaking password-field behavior to bots probing for valid accounts."
implementationNotes: "Debounce identifier lookups server-side, return generic responses for unknown accounts to avoid enumeration, and cache the last-used method per device for returning users."
---

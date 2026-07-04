---
title: "Session expiry transparency"
order: 9
tags: ["Sessions", "Trust"]
problem: "Silent session expiry — a user returns to find themselves logged out with no explanation — feels like a bug and often loses unsaved work."
recommendation: "Always communicate session duration up front, and warn before expiry when there's active or unsaved work at stake."
uxImpact: "Removes the confusing, unexplained logout moment that erodes trust in the product's reliability."
securityImpact: "Encourages shorter, safer session lifetimes because the tradeoff is now visible and explained, rather than hidden to avoid user friction."
implementationNotes: "Trigger a warning toast a fixed interval before expiry, and offer one-tap re-authentication (biometric or passkey) instead of a full login form."
---

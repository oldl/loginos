---
title: "Safe fallback design"
order: 7
tags: ["Recovery", "Resilience"]
problem: "When a primary method fails (lost device, expired passkey sync, blocked SMS), many products have no graceful next step — the user is simply stuck."
recommendation: "Design every authentication method with a documented, tested fallback path, and surface that fallback clearly at the point of failure, not buried in a help article."
uxImpact: "Turns a dead end into a short detour, preserving trust even when the primary method breaks."
securityImpact: "A well-designed fallback (verified secondary channel, trusted contact) is safer than the ad-hoc workarounds support teams invent under pressure."
implementationNotes: "Test fallback paths as part of every new auth-method launch, not as an afterthought once users start reporting being locked out."
---

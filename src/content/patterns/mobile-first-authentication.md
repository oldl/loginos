---
title: "Mobile-first authentication"
order: 8
tags: ["Mobile", "Continuity"]
problem: "Login flows designed for desktop translate poorly to mobile: small tap targets, app-switching for email codes, and passkeys that don't sync across a user's devices."
recommendation: "Design the login flow for mobile constraints first — biometric unlock, autofill-friendly fields, and cross-device passkey continuity — then adapt up to desktop."
uxImpact: "Removes app-switching (e.g. copying an OTP from an SMS app) and reduces the taps needed to authenticate on the device users actually use most."
securityImpact: "Native biometric unlock on mobile is both faster and more phishing-resistant than typed credentials, raising security and usability together."
implementationNotes: "Use platform autofill APIs for OTP and passwords, and test hybrid/QR passkey flows for cross-device continuity between phone and desktop."
---

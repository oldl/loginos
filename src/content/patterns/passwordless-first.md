---
title: "Passwordless-first, not passwordless-only"
order: 2
tags: ["Passkeys", "Strategy"]
problem: "Removing passwords entirely locks out users on unsupported devices, shared browsers, or platforms without biometric hardware — and removes the fallback recovery still depends on."
recommendation: "Present passkeys or magic links as the default, fastest path, while keeping password sign-in available as an equal, unhidden fallback."
uxImpact: "Fast users get a one-tap experience; everyone else isn't stranded with no visible way to sign in."
securityImpact: "Keeps a harmonized password policy as a safety net while the passkey base grows, avoiding a hard cutover that support teams can't yet handle at scale."
implementationNotes: "Surface the fallback as a text link, not a buried menu; track method usage to decide when passwordless can graduate from 'first' to closer to 'only'."
---

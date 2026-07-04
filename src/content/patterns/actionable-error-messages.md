---
title: "Actionable error messages"
order: 5
tags: ["Errors", "Trust"]
problem: "Generic errors like 'Something went wrong' or 'Invalid credentials' leave users guessing whether it's their password, their account, or the system — and erode trust in the product."
recommendation: "Write every authentication error to name what happened and what to do next, without revealing information that helps an attacker enumerate accounts."
uxImpact: "Users self-resolve more issues without contacting support, and perceive the product as competent even when something fails."
securityImpact: "Careful wording (e.g. 'If an account exists for this email, we've sent a reset link') keeps errors actionable without confirming account existence."
implementationNotes: "Maintain a single source-of-truth error copy library shared across web and mobile so messages stay consistent as flows evolve."
---

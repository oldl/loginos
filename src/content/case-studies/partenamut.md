---
title: "Partenamut: rethinking member login across a fragmented identity landscape"
org: "Partenamut"
summary: "How a Belgian health insurance mutuality can harmonize password rules, reduce recovery friction, and introduce passkeys without disrupting CSAM and itsme."
order: 1
---

## Context

Partenamut is a Belgian health insurance mutuality serving members who need reliable, low-friction access to reimbursements, documents and healthcare services online. Members range from digitally fluent adults to elderly or less tech-confident users, often accessing their account only a few times a year — just often enough to forget how they last logged in.

## Current login ecosystem

Members can currently reach their account through several parallel paths: a Partenamut-specific username and password, itsme, and CSAM (Belgium's federal citizen authentication service, sometimes surfaced to members as GOK). Each path was integrated at a different time, by a different team, and none were designed with the others in mind.

## Main friction points

The core problem isn't any single method — it's that members can't tell which one applies to them, and the product doesn't tell them either. A member who registered years ago with a portal password has no visible path to itsme; a member who's used itsme elsewhere doesn't know it works here too.

### Password rule inconsistencies

Password requirements differ subtly across the portal's own history — some accounts were created under older, laxer rules, others under newer, stricter ones — with no consistent real-time validation. Members get rejected at login with no clear reason tied to which rule set applies to their account.

### Recovery pain points

Recovery today leans heavily on a support-desk process: members who forget their portal password or lose access to their registered channel often have no self-service path and must call in, which is slow and doesn't scale during peak periods (e.g. annual reimbursement deadlines).

### CSAM / itsme / GOK complexity

CSAM, itsme and GOK solve overlapping but distinct problems — federal identity, mobile-based strong authentication, and portal-specific access — and members are never shown how they relate. The result is that many members default to the method that happened to work last time, rather than the one best suited to their situation.

## Passkey opportunity

Because CSAM and itsme already provide strong, verified identity for most members, Partenamut doesn't need to solve identity proofing from scratch. Passkeys can be layered on top purely as a faster, phishing-resistant *return* path — introduced after a successful itsme or CSAM login, not as a replacement for either.

## Recommended target experience

1. Harmonize password rules immediately across every account, regardless of when it was created (see [ADR-004](/decision-log/adr-004)).
2. Build a single, visible "login methods" screen showing whichever of password, itsme, CSAM and passkeys are active on the account.
3. Offer self-service recovery paths that don't require a support call for the majority of cases.
4. Introduce passkey enrollment progressively — after login and after recovery — with CSAM and itsme kept fully available as strong fallback identity mechanisms (see [ADR-003](/decision-log/adr-003)).

This target experience keeps every existing trust mechanism intact while removing the guesswork that currently falls on the member.

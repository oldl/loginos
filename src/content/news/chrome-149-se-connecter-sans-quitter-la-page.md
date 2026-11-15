---
title: "Chrome 149 : se connecter sans quitter la page"
date: 2026-05-17
summary: Chrome introduit Immediate UI, une expérience permettant de proposer
  une passkey ou un mot de passe enregistré directement au moment où
  l'utilisateur souhaite se connecter.
---
Au clic sur « Se connecter », le navigateur peut afficher les identifiants disponibles localement sans rediriger l'utilisateur vers un écran dédié. Si aucun identifiant n'est disponible, le site conserve son parcours classique.

Impact UX : réduire les interruptions, conserver le contexte utilisateur et supprimer certaines étapes de navigation.

Limite : cette approche ne remplace pas la page de connexion complète, notamment pour les passkeys utilisées depuis un autre appareil.

https://developer.chrome.com/blog/webauthn-immediate-ui

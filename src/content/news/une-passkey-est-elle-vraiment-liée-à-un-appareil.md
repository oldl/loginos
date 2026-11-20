---
title: Une passkey est-elle vraiment liée à un appareil ?
date: 2026-11-20
summary: "Les passkeys sont souvent présentées comme des clés numériques
  associées à un smartphone ou à un ordinateur. En réalité, elles ne sont pas
  nécessairement liées à un appareil : certaines peuvent être synchronisées
  entre plusieurs équipements, tandis que d'autres restent exclusivement
  stockées sur un authentificateur physique. Une distinction essentielle pour
  comprendre leur fonctionnement et concevoir de bons parcours de connexion."
---
## Deux types de passkeys

Une passkey repose sur la cryptographie asymétrique : une clé publique est enregistrée par le service en ligne, tandis qu'une clé privée est conservée par un authentificateur. Lors de la connexion, ce dernier utilise la clé privée pour prouver l'identité de l'utilisateur, sans transmettre de mot de passe.

Mais toutes les passkeys ne sont pas stockées de la même manière.

**Les passkeys synchronisées (multi-device)** sont conservées dans un gestionnaire d'identifiants, comme iCloud Keychain, Google Password Manager ou 1Password. Elles peuvent être synchronisées entre plusieurs appareils compatibles. Un utilisateur peut ainsi retrouver ses passkeys sur un nouveau smartphone ou ordinateur, selon le gestionnaire utilisé.

**Les passkeys liées à un appareil (device-bound)** restent associées à un authentificateur spécifique, comme une clé de sécurité matérielle FIDO2. Leur clé privée n'est pas exportée ni synchronisée vers d'autres appareils. Elles sont notamment utilisées dans des environnements exigeant un contrôle plus strict des authentificateurs.

## Se connecter depuis un autre appareil ne signifie pas synchroniser sa passkey

Prenons un exemple : un utilisateur possède une passkey sur son iPhone et souhaite se connecter à un site depuis un ordinateur Windows.

Il peut, dans certaines configurations, sélectionner la connexion par passkey, scanner un QR code avec son iPhone et confirmer l'opération avec Face ID ou son code de déverrouillage.

L'ordinateur utilise alors l'authentification réalisée par le téléphone, généralement via un mécanisme de proximité sécurisé. **La passkey n'est pas pour autant transférée ou enregistrée sur Windows.**

Il faut donc distinguer trois notions :

* **Stockage :** où se trouve la clé privée ?
* **Synchronisation :** la passkey est-elle disponible sur plusieurs appareils ?
* **Authentification cross-device :** un appareil peut-il utiliser une passkey présente sur un autre appareil ?

Ces mécanismes répondent à des besoins différents.

## La biométrie n'est pas la passkey

Autre confusion fréquente : une passkey n'est pas une empreinte digitale ni une reconnaissance faciale.

Face ID, Touch ID ou Windows Hello permettent généralement de vérifier localement que l'utilisateur est autorisé à utiliser la passkey. Selon la configuration, un code PIN ou le code de déverrouillage de l'appareil peut remplir le même rôle.

Les données biométriques ne sont pas transmises au site lors de l'authentification WebAuthn.

## Le véritable enjeu : la récupération de compte

La synchronisation simplifie considérablement l'expérience utilisateur, mais elle ne supprime pas tous les scénarios de perte d'accès.

Que se passe-t-il si l'utilisateur perd son téléphone ? S'il change d'écosystème ? S'il n'a plus accès à son gestionnaire de passkeys ? Ou si sa seule passkey était stockée sur une clé physique perdue ?

Ces situations imposent de concevoir des mécanismes de récupération adaptés, sans réintroduire des faiblesses de sécurité.

Pour les équipes produit, l'enjeu ne se limite donc pas à ajouter un bouton « Se connecter avec une passkey ». Il faut penser l'ensemble du cycle de vie : création, utilisation, ajout d'un appareil, gestion des identifiants, révocation et récupération de compte.

## Vers une authentification indépendante de l'appareil ?

Les passkeys synchronisées constituent une évolution importante : l'utilisateur n'est plus nécessairement dépendant d'un appareil unique pour accéder à ses services.

Mais elles ne rendent pas l'authentification totalement indépendante de son environnement technique. Leur disponibilité dépend encore du gestionnaire d'identifiants, de la compatibilité des plateformes et des mécanismes de récupération.

**La bonne question n'est donc plus « Sur quel appareil se trouve ma passkey ? », mais « Comment puis-je accéder à mes passkeys, quel que soit l'appareil que j'utilise ? »**

### Sources

* [FIDO Alliance — Passkeys](https://fidoalliance.org/passkeys/)
* [Google Developers — Passkeys](https://developers.google.com/identity/passkeys)
* [Apple Developer — Passkeys](https://developer.apple.com/passkeys/)

![](/images/uploads/download.svg)

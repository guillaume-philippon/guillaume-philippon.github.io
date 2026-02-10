# Guide pour créer un personnage, un contact et une faction

Ce guide explique comment créer un personnage, un contact et une faction dans ce projet Jekyll.

## Structure du projet

Le projet est organisé comme suit :

- `_characters/` : Contient les fichiers Markdown pour les personnages.
- `_contacts/` : Contient les fichiers Markdown pour les contacts.
- `_factions/` : Contient les fichiers Markdown pour les factions.
- `_data/` : Contient les fichiers YAML pour les données de jeu (armures, compétences, etc.).

## Créer un personnage

### Étapes pour créer un personnage

1. **Créer un fichier Markdown** :
   - Créez un nouveau fichier dans le dossier `_characters/` avec le nom du personnage en minuscules et séparé par des tirets (ex: `mon-personnage.md`).

2. **Ajouter le front matter** :
   - Le front matter est la section YAML en haut du fichier Markdown qui définit les métadonnées du personnage.
   - Voici un exemple de front matter pour un personnage avec les options disponibles :
     ```yaml
     ---
     # Identifiants du personnage
     key: mon-personnage

     # Informations générales sur le personnage
     infos:
       height: "1,80"
       weight: 80
       picture: /assets/images/mon-personnage.png
       money: 100
       karma: 5/5
       street_cred: 0
       notoriety: 0
       firstname: Mon
       nickname: MonSurnom
       race: Humain
       lifestyle: street
       role:
         operational: Street Samouraï
         narrative: Stabilité, Résilience

     # Attributs de base
     attributes:
       body:
         base: 5
         max: 6
       agility:
         base: 5
         max: 6
       reaction:
         base: 5
         bonus: 1
         max: 6
       strength:
         base: 5
         max: 6
       intuition:
         base: 5
         max: 6
       logic:
         base: 5
         max: 6
       willpower:
         base: 5
         max: 6
       charisma:
         base: 5
         max: 6

     # Blessures
     condition:
       physical:
         wound: 3
       mental:
         wound: 3

     # Bonus Init.
     initiative:
       physic:
         turns: 2

     # Bonus atk
     # attack:
     #   range:
     #   melee:
     #   matrix:
     #   astral:

     # Bonus def
     # defense:

     # Bonus damage
     # damage:
     #   astral: 2
     #   range: 2

     # Armure
     armor:
       natural:
         impact: 6
         balistic: 6
         astral: 6
       gear:
         impact: 6
         balistic: 8

     # Magie
     magic:
       base: 6
       bonus: 0
       weapon_focus: 2
       adept:
         powers:
           - id: improved_reflexes
             level: 1
           - id: astral_perception
           - id: mystic_armor
             level: 6
           - id: power_throw
             level: 2

     # Edge
     edge:
       base: 1
       bonus: 0

     # Essence
     essence:
       base: 6
       bonus: 0

     # Qualités
     qualities:
       - name: low_light_vision
       - name: adept
       - name: exceptional_attribute
       - name: dependents
         level: 3
       - name: in_debt

     # Compétences
     skills:
       active:
         physical:
           athletics:
             climbing: 2
             gymnastics: 2
             running: 2
             swimming: 2
           stealth:
             infiltration: 4
         combat:
           close_combat:
             blades: 4
             clubs: 4
             unarmed_combat: 4
           ungrouped:
             dodge: 5
             throwing_weapons: 5
         magical:
           ungrouped:
             astral_combat: 4
       knowledge:
         maya_culture:
           value: 4
           attribute: street
         security_procedures:
           value: 4
           attribute: professional
         politique_tribale:
           value: 4
           attribute: academic

     # Contacts
     contacts:
       - contact: dr-lina-krayven
         loyalty: 3
       - contact: calderone
         loyalty: 2
       - contact: chaman-ixchel
         loyalty: 5

     # Factions
     factions:
       allies:
         - dracotech
         - zotzyax

     # Matrice
     matrix:
       commlink:
         name: Disposable Commlink
         response: 1
         signal: 3
         firewall: 2
         system: 1
         price: 300

     # Équipement
     gear:
       weapons:
         - id: tomahawk
           quantity: 3
         - id: macuahuitl
           quantity: 1
           focus: 2
         - id: knife
           quantity: 1
       armor:
         - id: armor_jacket
     ---
     ```

3. **Ajouter le contenu** :
   - Après le front matter, ajoutez le contenu du personnage en Markdown.
   - Vous pouvez utiliser les includes pour afficher des informations spécifiques comme les compétences, les contacts, etc.

### Exemple de fichier de personnage

```markdown
---
key: mon-personnage
infos:
  height: "1,80"
  weight: 80
  picture: /assets/images/mon-personnage.png
  money: 100
  karma: 5/5
  street_cred: 0
  notoriety: 0
  firstname: Mon
  nickname: MonSurnom
  race: Humain
  lifestyle: street
  role:
    operational: Street Samouraï
    narrative: Stabilité, Résilience

attributes:
  body:
    base: 5
    max: 6
  agility:
    base: 5
    max: 6
  reaction:
    base: 5
    bonus: 1
    max: 6
  strength:
    base: 5
    max: 6
  intuition:
    base: 5
    max: 6
  logic:
    base: 5
    max: 6
  willpower:
    base: 5
    max: 6
  charisma:
    base: 5
    max: 6

condition:
  physical:
    wound: 3
  mental:
    wound: 3

initiative:
  physic:
    turns: 2

armor:
  natural:
    impact: 6
    balistic: 6
    astral: 6
  gear:
    impact: 6
    balistic: 8

magic:
  base: 6
  bonus: 0
  weapon_focus: 2
  adept:
    powers:
      - id: improved_reflexes
        level: 1
      - id: astral_perception
      - id: mystic_armor
        level: 6
      - id: power_throw
        level: 2

edge:
  base: 1
  bonus: 0

essence:
  base: 6
  bonus: 0

qualities:
  - name: low_light_vision
  - name: adept
  - name: exceptional_attribute
  - name: dependents
    level: 3
  - name: in_debt

skills:
  active:
    physical:
      athletics:
        climbing: 2
        gymnastics: 2
        running: 2
        swimming: 2
      stealth:
        infiltration: 4
    combat:
      close_combat:
        blades: 4
        clubs: 4
        unarmed_combat: 4
      ungrouped:
        dodge: 5
        throwing_weapons: 5
    magical:
      ungrouped:
        astral_combat: 4
  knowledge:
    maya_culture:
      value: 4
      attribute: street
    security_procedures:
      value: 4
      attribute: professional
    politique_tribale:
      value: 4
      attribute: academic

contacts:
  - contact: dr-lina-krayven
    loyalty: 3
  - contact: calderone
    loyalty: 2
  - contact: chaman-ixchel
    loyalty: 5

factions:
  allies:
    - dracotech
    - zotzyax

matrix:
  commlink:
    name: Disposable Commlink
    response: 1
    signal: 3
    firewall: 2
    system: 1
    price: 300

gear:
  weapons:
    - id: tomahawk
      quantity: 3
    - id: macuahuitl
      quantity: 1
      focus: 2
    - id: knife
      quantity: 1
  armor:
    - id: armor_jacket
---
Mon histoire
```

## Créer un contact

### Étapes pour créer un contact

1. **Créer un fichier Markdown** :
   - Créez un nouveau fichier dans le dossier `_contacts/` avec le nom du contact en minuscules et séparé par des tirets (ex: `mon-contact.md`).

2. **Ajouter le front matter** :
   - Voici un exemple de front matter pour un contact avec les options disponibles :
     ```yaml
     ---
     # Informations Principales
     full_name: Mon Contact
     type: Fixeur
     description: Description du contact
     connection: 3
     image: /assets/images/contacts/mon-contact.jpg
     key: mon-contact

     # Attributs (1-10)
     attributes:
       body: 5
       agility: 3
       reaction: 4
       strength: 5
       intuition: 4
       logic: 3
       willpower: 4
       charisma: 5

     # Compétences
     skills:
       influence:
         negotiation: 5
         leadership: 4
         etiquette: 3
       ungrouped:
         perception: 4
       knowledge:
         underground_arms_dealing: 6
         street_gangs: 5
         black_market: 4

     # Relations avec les Factions
     factions:
       allies:
         - yakuza
         - ancients
       enemies:
         - lone-star

     # Notes et Détails
     role: Fournisseur d'armes et d'équipements underground
     specialization: Marché noir et réseaux criminels
     reputation: Bien connecté dans le milieu underground
     ---
     ```

3. **Ajouter le contenu** :
   - Après le front matter, ajoutez le contenu du contact en Markdown.

### Exemple de fichier de contact

```markdown
---
full_name: Mon Contact
type: Fixeur
description: Description du contact
connection: 3
image: /assets/images/contacts/mon-contact.jpg
key: mon-contact

attributes:
  body: 5
  agility: 3
  reaction: 4
  strength: 5
  intuition: 4
  logic: 3
  willpower: 4
  charisma: 5

skills:
  influence:
    negotiation: 5
    leadership: 4
    etiquette: 3
  ungrouped:
    perception: 4
  knowledge:
    underground_arms_dealing: 6
    street_gangs: 5
    black_market: 4

factions:
  allies:
    - yakuza
    - ancients
  enemies:
    - lone-star

role: Fournisseur d'armes et d'équipements underground
specialization: Marché noir et réseaux criminels
reputation: Bien connecté dans le milieu underground
---
*Mon Contact* est un fixeur bien connecté dans le milieu underground. Il peut fournir des armes, des équipements et des informations sur les activités criminelles locales. Il a une bonne relation avec plusieurs runners et leur fournit régulièrement du travail.
```

## Créer une faction

### Étapes pour créer une faction

1. **Créer un fichier Markdown** :
   - Créez un nouveau fichier dans le dossier `_factions/` avec le nom de la faction en minuscules et séparé par des tirets (ex: `ma-faction.md`).

2. **Ajouter le front matter** :
   - Voici un exemple de front matter pour une faction avec les options disponibles :
     ```yaml
     ---
     key: ma-faction
     type: corpo
     name: Ma Faction
     description: Description de la faction
     reputation: 9
     influence: Amérique Centrale
     color: "#4ecdc4"
     logo: "/assets/images/factions/ma-faction.png"
     ---
     ```

3. **Ajouter le contenu** :
   - Après le front matter, ajoutez le contenu de la faction en Markdown.

### Exemple de fichier de faction

```markdown
---
key: ma-faction
type: corpo
name: Ma Faction
description: Description de la faction
reputation: 9
influence: Amérique Centrale
color: "#4ecdc4"
logo: "/assets/images/factions/ma-faction.png"
---

## Ma Faction

**Type:** Megacorporation (AA)

**Siège Social:** Ville, Pays

**Secteurs d'Activité:**
- Biotechnologie
- Armement
- Magie sanguinaire
- Agriculture génétiquement modifiée

**Histoire:**
Ma Faction est une megacorporation basée dans un pays, connue pour son utilisation controversée de la magie sanguinaire et ses pratiques commerciales agressives. L'entreprise a des liens étroits avec le gouvernement local et est un acteur majeur dans le domaine de la biotechnologie.

**Produits et Services:**
- Armes biotechnologiques
- Plantes génétiquement modifiées
- Services de sécurité
- Recherche en magie sanguinaire

**Culture d'Entreprise:**
Ma Faction est connue pour sa culture d'entreprise agressive et son utilisation de pratiques magiques controversées. L'entreprise est souvent critiquée pour ses méthodes, mais reste un acteur majeur dans le domaine de la biotechnologie.

**Relations:**
- **Alliés:** Gouvernement local
- **Rivaux:** Autres megacorps
- **Ennemis:** Groupes de droits humains
```

## Utilisation des données de jeu

Les données de jeu sont stockées dans le dossier `_data/` sous forme de fichiers YAML. Vous pouvez les utiliser pour enrichir vos personnages, contacts et factions.

### Exemple d'utilisation des données de jeu

Pour utiliser les données de jeu dans un fichier Markdown, vous pouvez utiliser les includes fournis dans le dossier `_includes/`.

Par exemple, pour afficher les compétences d'un personnage :

```markdown
{% include characters/rolls/skills.html %}
```

## Conclusion

En suivant ces étapes, vous pouvez facilement créer des personnages, des contacts et des factions pour votre projet Jekyll. N'hésitez pas à explorer les fichiers existants pour voir des exemples concrets et à adapter les structures à vos besoins.

---
# Informations générales sur le personnage
infos:
  height: "2,2"
  weight: 150
  picture: /assets/images/Ahau-Tec.png
  money: 60
  karma: 5/5
  street_cred: 0
  notoriety: 0
  full_name: Ahau-Tec
  race: Ork
  lifestyle: street
  # Rôle du personnage
  role:
    operational: Street Samouraï, Sécurité Rapproché
    narrative: Stabilité, Résilience, Dette

# Identifiants du personnage
key: ahau-tec

# Attributs de base
attributes:
  body:
    base: 9
    bonus: 0
    max: 10
  agility:
    base: 5
    bonus: 0
    max: 6
  reaction: 
    base: 5
    bonus: 1
    max: 6
  strength: 
    base: 7
    bonus: 0
    max: 8
  intuition:
    base: 1
    max: 6
    bonus: 0
  logic:
    base: 1
    bonus: 0
    max: 5
  willpower:
    base: 5
    max: 6
    bonus: 0
  charisma:
    base: 1
    max: 5
    bonus: 0

# Initiative
initiative:
  physic:
    turns: 2
  astral:
    turns: 3
    bonus: 2

# Armure
armor:
  impact: 6
  balistic: 6
  astral: 6

# Blessures
wound: 
  physic: 3
  mental: 3

# Magie
magic:
  base: 6
  bonus: 0
  weapon_focus: 2
  adept:
    powers:
      - id: improved_reflexes
        rating: 1
      - id: astral_perception
        rating: 1
      - id: mystic_armor
        rating: 6
      - id: power_throw
        rating: 2

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
  - name: Low-Light Vision
  - name: Adept
    rating: 1
    bp: 5
    type: positive
    sourcebook: 20th Anniversary Core Rulebook
    page: 90
  - name: Exceptional Attribute (Body)
    rating: 1
    bp: 20
    type: positive
    sourcebook: 20th Anniversary Core Rulebook
    page: 90
  - name: Dependances
    rating: 3
    bp: -15
    type: negative
    sourcebook: Runners Companion
    page: 104
    description: |
      Descendant direct des *Zotz-Yax*, une tribu orque maya qui a survécu à l’effondrement de la Sixième Monde en préservant ses traditions chamaniques et ses techniques de combat ancestrales.
  - name: In debt
    bp: -5
    rating: 1
    sourcebook: Runners Companion
    page: 103


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
    security_ procedures:
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
    - name: Tomahawk
      quantity: 3
      price: 150
      reach: 1
      damage:
        description: (Str./2 + 2)P
        base:
          range: 2
          melee: 2
        bonus:
          range: 2
        type: P
      type: 
        - melee
        - range
      availability: 4
      sourcebook: Runner Companion
      page:
    - name: Macuahuitl (Weapon Focus 2)
      quantity: 1
      reach: 1
      price: 23000
      availability: 14R
      sourcebook:  Runner Companion
      type: 
        - melee
      damage:
        description: (Str./2 + 2)P
        base:
          melee: 2
        type: P
    - name: Knife
      quantity: 1
      price: 20
      type: 
        - melee
      damage:
        description: (Str./2 + 2)P
        base:
          range: 2
          melee: 2
        bonus:
          range: 2
        type: P
      sourcebook:  20th Anniversary Core Rulebook
      page:
  armor:
    - name: Armor Jacket
      balistic: 8
      impact: 6
      price: 900
---
# Description du personnage
  *Ahau-Tec*, descendant des **Zotz-Yax**, a été recruté par **DracoTech** après avoir prouvé sa valeur lors d’un run contre un groupe de *blood mages* qui menaçaient les intérêts de la megacorp dans la jungle du **Chiapas**. Son statut est celui d’un agent de sécurité spécialisé, officiellement chargé de la protection des actifs dans les zones à haut risque magique et des opérations discrètes nécessitant une expertise de la culture maya.

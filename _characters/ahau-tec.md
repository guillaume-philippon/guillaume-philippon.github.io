---
# Identifiants du personnage
key: ahau-tec

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

# Attributs de base
attributes:
  body:
    base: 9
    max: 10
  agility:
    base: 5
    max: 6
  reaction: 
    base: 5
    bonus: 1
    max: 6
  strength: 
    base: 7
    max: 8
  intuition:
    base: 1
    max: 6
  logic:
    base: 1
    max: 5
  willpower:
    base: 5
    max: 6
  charisma:
    base: 1
    max: 5

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
#attack:
#  range:
#  melee:
#  matrix:
#  astral:

# Bonus def
defense:

# Bonus damage
damage:
  astral: 2
  range: 2

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
    - id: tomahawk
      quantity: 3
    - id: macuahuitl
      quantity: 1
      note: "Weapon Focus 2"
    - id: knife
      quantity: 1
  armor:
    - id: armor_jacket
---
# Description du personnage
  *Ahau-Tec*, descendant des **Zotz-Yax**, a été recruté par **DracoTech** après avoir prouvé sa valeur lors d’un run contre un groupe de *blood mages* qui menaçaient les intérêts de la megacorp dans la jungle du **Chiapas**. Son statut est celui d’un agent de sécurité spécialisé, officiellement chargé de la protection des actifs dans les zones à haut risque magique et des opérations discrètes nécessitant une expertise de la culture maya.

---
# Informations générales sur le personnage
infos:
  height: "1,6"
  weight: 120
  picture: /assets/images/Eleonor.jpg
  money: 0
  karma: 0/0
  full_name: Eleonor O'Neil
  race: Elfe
  lifestyle: street
  # Rôle du personnage
  role:
    operational:  Street Samouraï
    narrative: 

# Identifiants du personnage
key: eleonor

# Attributs de base
attributes:
  body:
    base: 5
    max: 6
  agility:
    base: 6
    max: 7
  reaction: 
    base: 5
    bonus: 2
    max: 6
  strength: 
    base: 3
    max: 6
  intuition:
    base: 5
    max: 6
  logic:
    base: 1
    max: 6
  willpower:
    base: 3
    max: 6
  charisma:
    base: 3
    max: 8

# Initiative
initiative:
  physic:
    turns: 3

# Armure
armor:
  balistic: 0
  impact: 0

# Blessures
wound: 
  physic: 3
  mental: 3

# Edge
edge:
  base: 1
  bonus: 0

# Essence
essence:
  base: 6
  bonus: 0

# Conditions
condition:
  physical:
    bonus: 4

# Compétences
skills:
  active:
    combat:
      firearms:
        pistols: 4
        automatics: 4
        longarms: 4
      close_combat:
        blades: 4
        clubs: 4
        unarmed_combat: 4
      ungrouped:
        dodge: 5
    social:
      ungrouped:
        intimidation: 5
      influence:
        con: 4
        etiquette: 4
        leadership: 4
        negociation: 4

# Contacts
contacts:
  - contact: big-jim
    loyalty: 3
  - contact: doc-harper
    loyalty: 3

# Factions
factions:
  allies:
    - ares
  enemies:
    - renraku

# Matrice
matrix:
  commlink:
    name: Disposable Commlink
    response: 1
    signal: 3
    firewall: 2
    system: 1
    price: 300

# Cyberware
cyberware:
  - id: wired_reflex
    grade: alpha
    level: 2
  - id: cyber_leg
    grade: alpha
  - id: cyber_leg
    grade: alpha
    capacity:
    - id: cyber_holster
  - id: cyber_arm
    grade: alpha
    capacity:
    - id: cyberarm_gyromount
  - id: cyber_arm
    grade: alpha
  - id: cybereyes
    capacity:
      - id: smartlink

# Équipement
gear:
  weapons:
    - name: Hand Razors (Retractable)
      type:
        - melee
      damage:
        description: (Str./2 +2)P
        base:
          melee: 2
      price: 900
    - name: Ares Crusader
      type:
        - range
      damage:
        description: 4P
        type: P
      ap: -1
      rc: 2
      mode: SA/BF
      ammo: 40(c)
      availability: 7R
      price: 700
    - name: Ares Alpha
      type:
        - range
      damage:
        description: 6P
        type: P
      ap: -1
      rc: 2
      mode: SA/BF/FA
      ammo: 42 (c)
      availability: 12F
      price: 1700
  armor:
    - name: Armor Jacket
      balistic: 8
      impact: 6
      price: 900
      availability: 2
  vehicule:
    - name: Thundercloud Contrail
      image: /assets/images/vehicles/thundercloud-contrail.jpg
      handling: 1
      accel: 20/40
      speed: 180
      pilot: 1
      body: 6
      armor: 4
      sensor: 1
      price: 5000
---
# Description du personnage
*Eleonor O'Neil* a commencé sa carrière dans les arènes clandestines d’*Urban Brawl* à **Seattle** avant de basculer dans le shadowrunning. Ce passé lui a forgé une réputation de combattante acharnée, capable de tenir tête à des adversaires plus lourds et mieux équipés grâce à sa rapidité, son instinct et sa connaissance des combats de rue. Ses cyberimplants, initialement conçus pour optimiser ses performances dans l’arène, sont devenus des outils de survie dans les ombres de la ville.

Bien qu’elle ait quitté les combats organisés après le désastre sur le bateau de plaisance, elle reste profondément liée à ses anciens compagnons de run. Ces liens ne sont pas seulement professionnels : ce sont des survivants comme elle, des gens qui comprennent ce que signifie vivre avec des cicatrices invisibles. Elle les retrouve parfois dans des repaires discrets, des bars enfumés ou des ateliers de mécaniciens illégaux, où ils échangent des informations, des services ou simplement un silence complice.

Ces relations sont sa seule forme de réseau social. Elle ne leur parle pas de ses traumatismes, mais ils savent. Ils ont vu ce qu’elle est devenue après cette nuit, et ils respectent ses distances comme ses silences. Quand une mission exige des renforts, ce sont eux qu’elle contacte—parce qu’elle leur fait confiance, malgré tout. Ils sont les seuls à connaître ses limites réelles, et les seuls à ne pas les exploiter.

Son style de combat reflète encore cette dualité : une combinaison de techniques d’*Urban Brawl* (coups bas, utilisation de l’environnement, feintes) et de précision chirurgicale acquise en tant que street samouraï. Elle évite les grands discours et les stratégies complexes. Pour Eleonor, une mission se résume à trois principes : entrer, frapper, sortir. Et survivre.

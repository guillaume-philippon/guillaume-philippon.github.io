---
infos:
  height: "1,6"
  weight: 120
  picture: /assets/images/Eleonor.jpg
  money: 0
  karma: 0/0
key: eleonor
history: |
  Eleonor O'Neil a commencé sa carrière dans les arènes clandestines d’Urban Brawl à Seattle avant de basculer dans le shadowrunning. Ce passé lui a forgé une réputation de combattante acharnée, capable de tenir tête à des adversaires plus lourds et mieux équipés grâce à sa rapidité, son instinct et sa connaissance des combats de rue. Ses cyberimplants, initialement conçus pour optimiser ses performances dans l’arène, sont devenus des outils de survie dans les ombres de la ville.

  Bien qu’elle ait quitté les combats organisés après le désastre sur le bateau de plaisance, elle reste profondément liée à ses anciens compagnons de run. Ces liens ne sont pas seulement professionnels : ce sont des survivants comme elle, des gens qui comprennent ce que signifie vivre avec des cicatrices invisibles. Elle les retrouve parfois dans des repaires discrets, des bars enfumés ou des ateliers de mécaniciens illégaux, où ils échangent des informations, des services ou simplement un silence complice.

  Ces relations sont sa seule forme de réseau social. Elle ne leur parle pas de ses traumatismes, mais ils savent. Ils ont vu ce qu’elle est devenue après cette nuit, et ils respectent ses distances comme ses silences. Quand une mission exige des renforts, ce sont eux qu’elle contacte—parce qu’elle leur fait confiance, malgré tout. Ils sont les seuls à connaître ses limites réelles, et les seuls à ne pas les exploiter.

  Son style de combat reflète encore cette dualité : une combinaison de techniques d’Urban Brawl (coups bas, utilisation de l’environnement, feintes) et de précision chirurgicale acquise en tant que street samouraï. Elle évite les grands discours et les stratégies complexes. Pour Eleonor, une mission se résume à trois principes : entrer, frapper, sortir. Et survivre.
full_name: Eleonor O'Neil
race: Elfe
lifestyle: street
role:
  operational:  Street Samouraï
  narrative: 
attributes:
  body:
    base: 5
    modifier: 0
    max: 6
  agility:
    base: 6
    modifier: 0
    max: 7
  reaction: 
    base: 5
    modifier: 2
    max: 6
  strength: 
    base: 3
    modifier: 0
    max: 6
  intuition:
    base: 5
    modifier: 0
    max: 6
  logic:
    base: 1
    modifier: 0
    max: 6
  willpower:
    base: 3
    modifier: 0
    max: 6
  charisma:
    base: 3
    modifier: 0
    max: 8
initiative:
  physic:
    turns: 3
condition:
  physical:
    modifier: 4
wound: 
  physic: 3
  mental: 3
edge:
  base: 1
  modifier: 0
essence:
  base: 6
  modifier: 0
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
contacts:
  - contact: big-jim
    loyalty: 3
  - contact: doc-harper
    loyalty: 3
matrix:
  commlink:
    name: Disposable Commlink
    response: 1
    signal: 3
    firewall: 2
    system: 1
    price: 300
cyberware:
  - name: Wired Reflex (Alpha)
    type: bodyware
    essence: 2.4
    availability: 12R
    price: 64000
  - name: Obvious Cyber Leg (Alpha/Customized)
    type: cyberlimb
    essence: 0.8
    capacity: 20
    price: 37500
  - name: Obvious Cyber Leg (Alpha/Customized)
    type: cyberlimb
    essence: 0.8
    capacity: 20
    price: 37500
  - name: Obvious Cyber Arm (Alpha/Customized)
    type: cyberlimb
    essence: 0.8
    capacity: 15
    price: 37500
  - name: Obvious Cyber Arm (Alpha/Customized)
    type: cyberlimb
    essence: 0.8
    capacity: 15
    price: 37500
  - name: Cybereyes (2)
    type: eyeware
    essence: 0.3
    capacity: 8
    availability: 4
    price: 750
  - name: Smartlink
    type: eyeware
    essence: 0
    capacity: 3
    availability: 8R
    price: 1000
    modifier:
      attack:
        range: 2
  - name: Cyberarm Gyromount
    type: accessories
    capacity: 4
    availability: 12F
    price: 6000
  - name: Cyber Holster
    type: accessories
    capacity: 7
    availability: 8R
    price: 2000
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
      handling: 1
      accel: 20/40
      speed: 180
      pilot: 1
      body: 6
      armor: 4
      sensor: 1
      price: 5000
---
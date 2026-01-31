---
theme:
  color: success
infos:
  height: "1,6"
  weight: 60
  picture: /assets/images/Ghost.jpg
  money: 10
  karma: 5/5
full_name: Jessica *Ghost* Rojas
race: Humaine
lifestyle: street
role:
  operational:  Analyse Matrix, Sécurité Numérique
  narrative: Données, Vérification, soupçon
history: |
  Elle a infiltré un serveur sécurisé pour voler des données sur un prototype d’**IA militaire autonome**, conçu pour contrôler des drones de combat et des systèmes de surveillance de masse. Au lieu de simplement exfiltrer les données, elle a modifié les algorithmes de ciblage de l’IA, provoquant une série d’attaques accidentelles contre des infrastructures civiles lors d’un test en conditions réelles. Résultat : des coupures de courant massives, des drones devenant incontrôlables, et des dégâts matériels estimés à plusieurs millions de nuyens.
profil: Méfiant, force capacité d'analyse, risque de sur-interprétation
attributes:
  body:
    base: 3
    modifier: 0
    max: 6
  agility:
    base: 5
    modifier: 0
    max: 6
  reaction: 
    base: 5
    modifier: 2
    max: 6
  strength: 
    base: 1
    modifier: 0
    max: 6
  intuition:
    base: 2
    modifier: 0
    max: 6
  logic:
    base: 5
    modifier: 2
    max: 6
  willpower:
    base: 5
    modifier: 0
    max: 6
  charisma:
    base: 1
    modifier: 0
    max: 6
initiative:
  matrix:
    modifier: 1
    turns: 3
  physic:
    turns: 3
wound: 
  physic: 3
  mental: 3
edge:
  base: 2
  modifier: 0
essence:
  base: 6
  modifier: 0
qualities:
  - name: Analytical Mind
    rating: 1
    bp: 5
    type: positive
    sourcebook: Runner Companion
    page: 96
    description: |
      +2 dés aux tests de logique qui implique la reconnaissance de forme, une analyse de preuves,
      la recherche d'indice ou la résolution d'énigmes. +2 dés aux jet de *Data Search* et *Software*.
  - name: Records on File
    rating: 1
    bp: -10
    type: negative
    sourcebook: Runner Companion
    page: 109
    description: |
      DracoTech possède des données relativement à jour de mes données personnelles. Les agents de la
      corpo on +6 dés pour identifié le personnage et +2 dés pour pouvoir traquer via *Legwork*.
  - name: Wanted
    rating: 1
    bp: -10
    sourcebook: Runner Companion
    page: 110
    description: |
      Recherché pour participation à un groupe *techno-terroriste* militant contre l'utilisation
      militaire de la matrice. [20 000 nuyens]
skills:
  active:
    athelitics:
      gymnatistic:
        attribute: agility
        value: 3
    stealth:
      infiltration:
        attribute: agility
        value: 4
    firearms:
      pistols:
        value: 4
        attribute: agility
      automatics:
        value: 4
        attribute: agility
      longarms:
        value: 4
        attribute: agility
    cracking:
      cybercombat:
        attribute: logic
        value: 4
      electronic_warfare:
        attribute: logic
        value: 4
      hacking:
        value: 4
        attribute: logic
    electronics:
      computer:
        attribute: logic
        value: 4
      data_search:
        attribute: logic
        value: 4
      hardware:
        attribute: logic
        value: 4
      software:
        attribute: logic
        value: 4
    biotech:
      cybertechnology:
        attribute: logic
        value: 2
      first_aid:
        attribute: logic
        value: 2
      medicine:
        attribute: logic
        value: 2
    ungrouped:
      dodge:
        value: 4
        attribute: reaction
        type: defense
      perception:
        attribute: intuition
        value: 4
  knowledge:
    securite_matriciel:
      value: 6
      attribute: professional
    programmation_malware:
      value: 6
      attribute: academic
    legislation_cybersecurite:
      value: 6
      attribute: professional
    techno_gang:
      value: 3
      attribute: street
    projets_secret_militaire:
      value: 6
      attribute: interest
contacts:
  - neon.md
  - madame-x.md
cyberware:
  - name: Commlink
    essence: 0.2
    capacity: 2
    availability: "-"
    price: 2000
    type: headware
  - name: Datajack
    essence: 0.1
    capacity: 1
    availability: "-"
    price: 500
    type: headware
  - name: Hot Sim-module
    essence: 0.2
    capacity: 2
    availability: 12F
    price: 5000
    type: headware
  - name: Cybereyes (2)
    essence: 0.3
    capacity: 8
    availability: 4
    price: 750
  - name: Smartlink
    essence: 0
    capacity: 3
    availability: 8R
    price: 1000
    type: eyeware
  - name: Synaptic Booster (2)
    essence: 1.0
    availability: 12R
    price: 160000
    type: bioware
  - name: Cerebral Booster (2)
    essence: 0.4
    availability: 12
    price: 20000
    type: bioware
matrix:
  commlink:
    name: Fairlight Caliban
    response: 4
    signal: 5
    os: Novatech Navi
    firewall: 3
    system: 4
    price: 9500
  programs:
    common_use:
        analyze:
          loaded: yes
          skill: Computer
          rating: 6
          price: 300
        browser:
          rating: 6
          skill: Datasearch
          price: 300
        command:
          rating: 6
          skill: Varies
          price: 300
        edit:
          rating: 6
          skill: Computer
          price: 300
        encrypt:
          rating: 6
          skill: Electronic Warfare
          price: 300
        reality_filter:
          rating: 6
          skill: Electronic Warfare
          skill: Response
          price: 300
        scan:
          rating: 6
          skill: Electronic Warfare
          price: 300
    hacking:
        armor:
          loaded: yes
          rating: 6
          availability: 12R
          price: 6000
        attack:
          type: attack
          skill: Cybercombat / Hacking
          rating: 0
          availability: 12R
          price: 0
        biofeedback_filter:
          skill: None
          rating: 0
          availability: 12R
          price: 0
        black_hammer:
          type: attack
          skill: Cybercombat
          rating: 6
          availability: 12R
          price: 6000
        blackout:
          type: attack
          skill: Cybercombat
          rating: 0
          availability: 12R
          price: 0
        data_bomb:
          skill: None
          rating: 0
          availability: 12R
          price: 0
        decrypt:
          skill: Electronic Warfare
          rating: 1
          availability: 2R
          price: 1000
        defuse:
          skill: Hacking
          rating: 0
          availability: 12R
          price: 0
        eccm:
          skill: None
          rating: 0
          availability: 12R
          price: 0
        exploit:
          skill: Hacking
          rating: 6
          availability: 12R
          price: 6000
        medic:
          skill: Computer
          rating: 6
          availability: 12R
          price: 6000
        sniffer:
          skill: Electronic Warfare / Hacking
          rating: 2
          availability: 2R
          price: 1000
        spoof:
          skill: Hacking
          rating: 0
          availability: 12R
          price: 0
        stealth:
          loaded: yes
          skill: Hacking
          rating: 6
          availability: 12R
          price: 6000
        track:
          loaded: yes
          skill: Computer
          rating: 6
          availability: 12R
          price: 6000
gear:
  weapons:
    - name: Ares Desert Fox (Sniper)
      type:
        - range
      damage:
        description: 8P
        type: P
      ap: -1
      rc: 1
      ammo: 14(c)
      availability: 10F
      mode: SA
      price: 3350
    - name: Defiance T-250 (Short)
      type:
        - range
      damage:
        description: 5P
        type: P
      ap: -1
      mode: SA
      ammo: 5(m)
      availability: 3R
      price: 475
    - name: FN HAR
      type:
        - range
      damage:
        description: 6P
        type: P
      ap: -1
      rc: 2
      mode: SA/BF/FA
      ammo: 35 (c)
      availability: 8R
      price: 1000
  armor:
    - name: Urban Explorer Jumpsuit
      balistic: 6
      impact: 6
      price: 500
  biotech:
    - name: Medkit (Rat. 6)
      quantity: 5
      price: 600
    - name: Trauma Patch
      quantity: 5
      price: 500
  security_device:
    - name: Maglock Passkey (6)
      quantity: 1
      price: 600
---

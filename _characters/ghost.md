---
name: Jessica *Ghost* Rojas
race: Humaine
picture: /assets/images/Cipher.jpg
lifestyle: Middle
money: 0
karma: 0
role:
  operational:  Analyse Matrix, Sécurité Numérique
  narrative: Données, Vérification, soupçon
history: |
  Acienne opératrice matricielle indépendante intrégrée après incident légale.
  Nouvelle identité et environnement contrôlé fournis.

  Compétence élevées en détection d'anomalies et cohérences système.
profil: Méfiant, force capacité d'analyse, risque de sur-interprétation
attributes:
  body:
    base: 3
    modifier: 0
    max: 6
    bp: 20
  agility:
    base: 5
    modifier: 0
    max: 6
    bp: 50
  reaction: 
    base: 5
    modifier: 0
    max: 6
    bp: 40
  strength: 
    base: 1
    modifier: 0
    max: 6
    bp: 0
  intuition:
    base: 2
    modifier: 0
    max: 6
    bp: 10
  logic:
    base: 5
    modifier: 0
    max: 6
    bp: 40
  willpower:
    base: 5
    modifier: 0
    max: 6
    bp: 40
  charisma:
    base: 1
    modifier: 0
    max: 6
    bp: 0
armor:
  impact: 6
  balistic: 6
  astral: 0
turns: 1
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
skills:
  active:
    athelitics:
      - name: Climbing
        value: 0
      - name: Gymnatistic
        value: 0
      - name: Running
        value: 0
      - name: Swimming
        value: 0
    stealth:
      - name: Disguise
        value: 0
      - name: Infiltration
        value: 4
      - name: Palming
        value: 0
      - name: Shadowing
        value: 0
    firearms:
      - name: Pistols
        value: 0
      - name: Automatics
        value: 0
      - name: Longarms 
        value: 5
    cracking:
      - name: Cybercombat
        value: 4
      - name: Electronic Warfare
        value: 4
      - name: Hacking
        value: 4
    electronics:
      - name: Computer
        value: 4
      - name: Datasearch
        value: 4
      - name: Hardware
        value: 4
      - name: Software
        value: 4
    ungrouped:
      - name: Dodge
        value: 0
        type: defense
      - name: Perception
        value: 0
  knowledge:
    - name: Maya Culture
      value: 6
    - name: Security Procedures
      value: 6
contacts:
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
  - name: Smartlink
    essence: 0.1
    capacity: 3
    availability: 8R
    price: 1000
    type: eyeware
  - name: Skillwire (3)
    essence: 0.6
    availability: 12
    price: 6000
    type: eyeware
  - name: Wired Reflex (2)
    essence: 3
    availability: 12R
    price: 32000
    type: bodyware
matrix:
  turns: 2
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
          rating: 6
          price: 300
        encrypt:
          rating: 6
          price: 300
        scan:
          loaded: yes
          rating: 6
          price: 300
    hacking:
        armor:
          loaded: yes
          rating: 3
          availability: 6R
          price: 3000
        attack:
          rating: 3
          availability: 6R
          price: 3000
        black_hammer:
          rating: 3
          availability: 6R
          price: 3000
        stealth:
          loaded: yes
          rating: 3
          availability: 6R
          price: 3000
gear:
  weapons:
    - name: Ares Desert Fox (Sniper)
      type:
        - range
      damage: 8P
      ap: -1
      rc: (1)
      ammo: 14(c)
      availability: 10F
      mode: SA
      price: 3350
    - name: Defiance T-250 (Short)
      type:
        - range
      damage: 5P
      ap: -1
      mode: SA
      ammo: 5(m)
      availability: 3R
      price: 475
    - name: Enfield AS-7
      type:
        - range
      damage: 7P
      ap: -1
      mode: SA/BF
      ammo: 10(c) or 24 (d)
      availability: 12R
      price: 1100
  armor:
    - name: Urban Explorer Jumpsuit
      balistic: 6
      impact: 6
      price: 500s
---
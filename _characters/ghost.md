---
# Informations générales sur le personnage
infos:
  height: "1,6"
  weight: 60
  picture: /assets/images/Ghost.jpg
  money: 10
  karma: 5/5
  full_name: Jessica *Ghost* Rojas
  race: Humaine
  lifestyle: street
  # Rôle du personnage
  role:
    operational:  Analyse Matrix, Sécurité Numérique
    narrative: Données, Vérification, soupçon

# Identifiants du personnage
key: ghost

# Profil
profil: Méfiant, force capacité d'analyse, risque de sur-interprétation

# Attributs de base
attributes:
  body:
    base: 3
    max: 6
  agility:
    base: 5
    max: 6
  reaction: 
    base: 5
    bonus: 2
    max: 6
  strength: 
    base: 1
    max: 6
  intuition:
    base: 2
    max: 6
  logic:
    base: 5
    bonus: 2
    max: 6
  willpower:
    base: 5
    max: 6
  charisma:
    base: 1
    max: 6

# Initiative
initiative:
  matrix:
    bonus: 1
    turns: 3
  physic:
    turns: 3

# Bonus atk
attack:
  range: 2
  matrix: 2

# Bonus def
defense:
  matrix: 2

# Bonus damage
damage:
  matrix: 2

# Armure
armor:
  gear:
    impact: 6
    balistic: 8
    matrix: 2

# Blessures
wound: 
  physic: 3
  mental: 3

# Edge
edge:
  base: 2
  bonus: 0

# Essence
essence:
  base: 6
  bonus: 0

# Qualités
qualities:
  - name: analytical_mind
  - name: records_on_file
  - name: wanted

# Compétences
skills:
  active:
    physical:
      athletics:
        gymnastics: 3
      ungrouped:
        perception: 4
      stealth:
        infiltration: 4
    combat:
      firearms:
        pistols: 4
        automatics: 4
        longarms: 4
      ungrouped:
        dodge: 4
    technical:
      electronics:
        computer: 4
        data_search: 4
        hardware: 4
        software: 4
      biotech:
        cybertechnology: 2
        first_aid: 2
        medicine: 2
      cracking:
        cybercombat: 4
        electronic_warfare: 4
        hacking: 4
  knowledge:
    securite_matriciel:
      value: 6
      attribute: professional
    programmation_malware:
      value: 4
      attribute: academic
    legislation_cybersecurite:
      value: 4
      attribute: professional
    techno_gang:
      value: 3
      attribute: street
    projets_secret_militaire:
      value: 4
      attribute: interest
    reseaux_obscurs:
      value: 3
      attribute: street
    contre_mesures_electroniques:
      value: 3
      attribute: professional

# Contacts
contacts:
  - contact: neon
    loyalty: 3
  - contact: madame-x
    loyalty: 3

# Factions
factions:
  allies:
    - cendres_numeriques
    - dracotech

# Matrice
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
      - id: analyze
        rating: 6
      - id: browser
        rating: 6
      - id: command
        rating: 6
      - id: edit
        rating: 6
      - id: encrypt
        rating: 6
      - id: reality_filter
        rating: 6
      - id: scan
        rating: 6
    hacking:
      - id: armor
        rating: 6
      - id: black_hammer
        rating: 6
      - id: decrypt
        rating: 1
      - id: exploit
        rating: 6
      - id: medic
        rating: 6
      - id: sniffer
        rating: 2
      - id: stealth
        rating: 6
      - id: track
        rating: 6

# Cyberware
cyberware:
  - id: commlink
  - id: datajack
  - id: hot_sim_module
  - id: cybereyes
    level: 2
    capacity:
      - id: smartlink
  - id: synaptic_booster
    level: 2
  - id: cerebral_booster
    level: 2

# Équipement
gear:
  weapons:
    - id: ares_desert_fox
    - id: ares_predator_iv
    - id: fn_har
  armor:
    - id: urban_explorer_jumpsuit
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
*Jessica Ghost Rojas* a été recrutée par les **Cendres Numériques** pour ses compétences en infiltration et sabotage matriciel. Lors d’une opération d’exfiltration de données sur un prototype d’IA militaire autonome d’**Aztechnology**, elle a modifié les algorithmes de ciblage, déclenchant des attaques accidentelles contre des infrastructures civiles. L’incident a causé des coupures de courant massives et des dommages estimés à plusieurs millions de nuyens, forçant *Ghost* à disparaître.

**DracoTech** l’a récupérée, lui offrant une nouvelle identité et une protection en échange de ses services. Bien qu’elle travaille désormais pour la corporation, de ses liens avec les **Cendres Numériques**, *Ghost* ne restent en contact qu'avec avec *Neon* et *Madame X*. *Neon*, decker spécialiste des intrusions, et *Madame X*, fixeuse et stratège. Ces relations ne sont pas transactionnelles mais ancrées dans une loyauté partagée et une histoire commune.

*Ghost* est une asset précieuse pour **DracoTech**, et sa loyauté envers la corporation est absolue. Ses compétences en font une opératrice redoutable, et elle n’utilise ses contacts résiduels avec *Neon* et *Madame X* que pour renforcer son efficacité au service de **DracoTech**. Aucune ambiguïté ne subsiste quant à ses priorités.
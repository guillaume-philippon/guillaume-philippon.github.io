---
name: Ahau-Tech
race: Ork
picture: /assets/images/Ahau-Tec.jpg
lifestyle: Middle
money: 0
karma: 0
role:
  operational: Street Samouraï, Sécurité Rapproché
  narrative: Stabilité, Résilience, Dette
history: |
  Ancien agent de terrain issu de structures privées opérant en zones instables.
  Profil constant: fiabilité, endurance, absence de rupture sous stress.

  Lors d'un incident sur site secondaire, l'opérateur à maintenu seul un point
  d'accès durant une période prolingé après perte de communication. Aucune anomalie
  comportementale détectée post-incident.
attributes:
  body:
    base: 9
    modifier: 0
    max: 10
    bp: 40
  agility:
    base: 5
    modifier: 0
    max: 6
    bp: 40
  reaction: 
    base: 5
    modifier: 2
    max: 6
    bp: 40
  strength: 
    base: 7
    modifier: 0
    max: 12
    bp: 40
  intuition:
    base: 3
    max: 6
    modifier: 0
    bp: 20
  logic:
    base: 1
    modifier: 0
    max: 5
  willpower:
    base: 3
    max: 6
    modifier: 0
    bp: 20
  charisma:
    base: 1
    max: 5
    modifier: 0
armor:
  impact: 6 (+8)
  balistic: 6 (+6)
  astral: 6
turns: 3
magic:
  base: 6
  modifier: 0
edge:
  base: 1
  modifier: 0
essence:
  base: 6
  modifier: 0
qualities:
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
powers:
  - name: Improved Reflex
    rating: 2
    magic: 2.5
    description: |
      Le pouvoir *Improved Reflexes* augmente la Réaction de +1 par niveau et +1 Passe d'Initiative supplémentaire.
  - name: Mystic Armor
    rating: 6
    magic: 3
    description: |
      Le pouvoir *Mystic Armor* (Armure Mystique) confère une armure magique supplémentaire de 1 point par niveau, qui s'ajoute à l'armure physique et protège à la fois contre les dégâts balistiques et d'impact, ainsi que dans les combats astraux.
  - name: Power throw
    rating: 2
    magic: 0.5
    description: |
      *Power Throw* ajoute un bonus aux jets de lancer (comme Throwing Weapons), augmente la portée des projectiles et peut infliger des dégâts supplémentaires, aujouter
      +2 à la force pour déterminer la distance et les dégats.
skills:
  active:
    athelitics:
      - name: Climbing
        value: 3
      - name: Gymnatistic
        value: 3
      - name: Running
        value: 3
      - name: Swimming
        value: 3
    close_combat:
      - name: Blades
        value: 4
      - name: Clubs
        value: 4
      - name: Unarmed Combat
        value: 4
    stealth:
      - name: Disguise
        value: 0
      - name: Infiltration
        value: 4
      - name: Palming
        value: 0
      - name: Shadowing
        value: 0
    outdoor:
      - name: Survival
        value: 0
      - name: Navigation
        value: 0
      - name: Tracking
        value: 0
    ungrouped:
      - name: Dodge
        value: 5
        type: defense
      - name: Thowing Weapons
        value: 5
        type: range
      - name: Perception
        value: 3
  knowledge:
    - name: Maya Culture
      value: 6
    - name: Security Procedures
      value: 6
contacts:
  - name: Dr. Lina Krayven
    type: Doc. affiliated to DracoTech
    connection: 3
    loyalty: 3
  - name: Officier Kael Riven
    type: Security Officer
    connection: 3
    loyalty: 2
gear:
  weapons:
    - name: Tomahawk
      quantity: 3
      price: 150
      reach: 1
      damage: (STR/2 + 2)P
      type: 
        - mele
        - throwing
      availability: 4
      sourcebook: Runner Companion
      page:
    - name: Macauitil
      quantity: 1
      reach: 1
      price: 3000
      availability: 14R
      sourcebook:  Runner Companion
      type: 
        - mele
      damage: (STR/2 +2)P
    - name: Knife
      quantity: 1
      price: 20
      type: 
        - mele
      damage: (STR/2 + 1)P
      sourcebook:  20th Anniversary Core Rulebook
      page:
  armor:
    - name: Armor Jacket
      balistic: 8
      impact: 6
      price: 900
---
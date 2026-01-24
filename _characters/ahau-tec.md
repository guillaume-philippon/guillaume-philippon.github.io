---
name: Ahau-Tech
race: Ork
picture: /assets/images/Ahau-Tec.jpg
lifestyle: Middle
role:
  operational: Street Samouraï / Sécurité Rapproché
  narrative: Stabilité, Résilience, Dette
history: |
  Ancien agent de terrain issu de structures privées opérant en zones instables.
  Profil constant: fiabilité, endurance, absence de rupture sous stress.

  Lors d'un incident sur site secondaire, l'opérateur à maintenu seul un point
  d'accès durant une période prolingé après perte de communication. Aucune anomalie
  comportementale détectée post-incident.
attributes:
  body:
    base: 8
    modifier: 1
  agility:
    base: 5
    modifier: 0
  reaction: 
    base: 5
    modifier: 2
  strength: 
    base: 7
    modifier: 0
  intuition:
    base: 3
    modifier: 0
  logic:
    base: 1
    modifier: 0
  willpower:
    base: 1
    modifier: 0
  charisma:
    base: 1
    modifier: 0
armor:
  impact: 6
  balistic: 6
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
    sourcebook: 20th Anniversary Core Rulebook
    page: 90
  - name: Exceptional Attribute (Body)
    rating: 1
    sourcebook: 20th Anniversary Core Rulebook
    page: 90
  - name: Dependances
    rating: 3
    sourcebook: Runners Companion
    page: 104
powers:
  - name: Improved Reflex
    rating: 2
    magic: 2.5
  - name: Mystic Armor
    rating: 6
    magic: 3
  - name: Power throw
    rating: 2
    magic: 0.5
skills:
  active:
    athelitics:
      - name: Climbing
        value: 4
      - name: Gymnatistic
        value: 4
      - name: Running
        value: 4
      - name: Swimming
        value: 4
    close_combat:
      - name: Blades
        value: 4
      - name: Clubs
        value: 4
      - name: Unarmed Combat
        value: 4
    ungrouped:
      - name: Dodge
        value: 5
      - name: Archery
        value: 1
      - name: Thowing Weapons
        value: 5
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
    loyalty: 1
gear:
  - name: tomahawk
    quantity: 3
    price_unit: 150
    damage: (STR/2 + 2)P
    sourcebook:
    page:
---
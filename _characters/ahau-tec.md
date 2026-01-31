---
infos:
  height: "2,2"
  weight: 150
  picture: /assets/images/Ahau-Tec.png
  money: 60
  karma: 5/5
  street_cred: 0
  notoriety: 0
key: ahau-tec
full_name: Ahau-Tec
race: Ork
lifestyle: street
role:
  operational: Street Samouraï, Sécurité Rapproché
  narrative: Stabilité, Résilience, Dette
history: |
  Ahau-Tec, descendant des **Zotz-Yax**, a été recruté par DracoTech après avoir prouvé sa valeur lors d’un run contre un groupe de *blood mages* qui menaçaient les intérêts de la megacorp dans la jungle du Chiapas. Son statut est celui d’un agent de sécurité spécialisé, officiellement chargé de la protection des actifs dans les zones à haut risque magique et des opérations discrètes nécessitant une expertise de la culture maya.
attributes:
  body:
    base: 9
    modifier: 0
    max: 10
  agility:
    base: 5
    modifier: 0
    max: 6
  reaction: 
    base: 5
    modifier: 1
    max: 6
  strength: 
    base: 7
    modifier: 0
    max: 8
  intuition:
    base: 1
    max: 6
    modifier: 0
  logic:
    base: 1
    modifier: 0
    max: 5
  willpower:
    base: 5
    max: 6
    modifier: 0
  charisma:
    base: 1
    max: 5
    modifier: 0
initiative:
  physic:
    turns: 2
  astral:
    turns: 3
    modifier: 2
armor:
  impact: 6
  balistic: 6
  astral: 6
wound: 
  physic: 3
  mental: 3
magic:
  base: 6
  modifier: 0
  weapon_focus: 2
edge:
  base: 1
  modifier: 0
essence:
  base: 6
  modifier: 0
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
powers:
  - name: Improved Reflex
    rating: 1
    magic: 1.5
    description: |
      Le pouvoir *Improved Reflexes* augmente la Réaction de +1 par niveau et +1 Passe d'Initiative supplémentaire.
  - name: Astral Perception
    rating: 1
    magic: 1
    description: |
      Ce pouvoir permet aux adeptes de *voir* le plan astral.
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
      climbing:
        attribute: strength
        value: 2
      gymnatistic:
        attribute: agility
        value: 2
      running:
        attribute: strength
        value: 2
      swimming:
        attribute: strength
        value: 2
    close_combat:
      blades:
        attribute: agility
        value: 4
      clubs:
        attribute: agility
        value: 4
      unarmed_combat:
        attribute: agility
        value: 4
    stealth:
      infiltration:
        attribute: agility
        value: 4
    ungrouped:
      dodge:
        attribute: reaction
        value: 5
        type: defense
      thowing_weapons:
        attribute: agility
        value: 5
        type: range
      astral_combat:
        attribute: willpower
        value: 4
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
contacts:
  - contact: dr-lina-krayven
    loyalty: 3
  - contact: calderone
    loyalty: 2
  - contact: chaman-ixchel
    loyalty: 5
gear:
  weapons:
    - name: Tomahawk
      quantity: 3
      price: 150
      reach: 1
      damage:
        description: (STR/2 + 2)P
        modifier:
          range: 2
          melee: 2
        type: P
      type: 
        - mele
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
        - mele
      damage:
        description: (STR/2 + 2)P
        modifier:
          range: 4
          melee: 2
        type: P
    - name: Knife
      quantity: 1
      price: 20
      type: 
        - mele
      damage:
        description: (STR/2 + 2)P
        modifier:
          range: 4
          melee: 2
        type: P
      sourcebook:  20th Anniversary Core Rulebook
      page:
  armor:
    - name: Armor Jacket
      balistic: 8
      impact: 6
      price: 900
---

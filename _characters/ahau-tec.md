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
      focus: 2
    - id: knife
      quantity: 1
  armor:
    - id: armor_jacket
---
*Ahau-Tec* est un membre actif de la tribu **Zotz-Yax**, basée près de **Mérida** dans la péninsule du **Yucatán**. Contrairement aux tribus isolées, les **Zotz-Yax** ont établi des accords pragmatiques avec certaines mégacorporations, dont DracoTech, pour protéger leurs artefacts sacrés et leurs territoires.

Initié par le rituel du **Xibalba-Kex**, *Ahau-Tec* est un guerrier marqué par les esprits des grottes sacrées, portant des tatouages magiques et une connexion profonde avec les forces du **Xibalba**. Il a été remarqué par **DracoTech** après un combat contre des *blood mages* menaçant les intérêts de la corporation. Son habileté au combat et sa connaissance des rituels mayas ont attiré l’attention de **DracoTech**, qui l’a recruté comme agent de sécurité spécialisé. Il sert désormais de pont entre la tribu **Zotz-Yax** et la corporation, tout en restant un membre actif de sa communauté. Son rôle est de protéger les actifs de **DracoTech** dans les zones à risque magique et de négocier des accords respectueux des traditions **Zotz-Yax**.

*Ahau-Tec* reste ancré dans sa communauté. Il participe aux rituels tribaux et partage les ressources obtenues via **DracoTech** avec les siens, tout en veillant à ce que les intérêts de la tribu ne soient pas compromis. Il porte toujours les symboles de son héritage : tatouages rituels, bijoux en jade, et un Macuahuitl en obsidienne renforcée.

Son objectif principal est de récupérer le *Codex de Zotz*, volé par des *blood mages* liés à **Aztechnology**. Pour cela, il utilise ses connexions chez **DracoTech** tout en restant loyal aux **Zotz-Yax**. Il navigue entre les deux mondes avec pragmatisme, sabordant les opérations corporations qui menacent les sites sacrés et utilisant les ressources modernes pour renforcer la sécurité de sa tribu. Sa position est délicate, mais son statut de membre respecté des **Zotz-Yax** lui permet de concilier ces deux aspects de sa vie.
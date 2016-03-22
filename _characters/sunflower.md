---
layout: default
permalink: /:collection/:name.json
location: /characters/slashroot.json
data:
    name: Sun Flower
    class: Mage
    image: /shadowrun-boardgame/images/characters/sunflower.png
    background_color: LightSkyBlue
    attributes:
        health: 9
        endurance: 7
        speed: 4
        defense:
            physical:
                - white
            magical:
                - white
    skills:
        stealth:
            - blue
        social:
            - gold
            - blue
        athletism:
            - blue
            - gold
        tech:
            - blue
    flavor:
        - title: Spellcaster
          action: false
          stress: 1
          text: You can re-roll one of your <span class=\"icon-die-dice\"></span> when you cast a spell.
        - title: Mage
          action: false
          stress: 0
          text: You gain one more <span class=\"icon-fire\"></span> slot in your inventory.
    proficiencies:
        range: 1
        melee: 0
        medicine: 2
        matrice: 0
        magic: 3
---
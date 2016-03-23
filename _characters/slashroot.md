---
layout: default
permalink: /:collection/:name.json
location: /characters/slashroot.json
data:
    name: Slashroot
    class: Decker
    image: /shadowrun-boardgame/images/characters/slashroot.png
    background_color: DarkSeaGreen
    attributes:
        health: 12
        endurance: 5
        speed: 5
        defense:
            physical:
                - black
            magical:
                - black
    skills:
        social: 1
        stealth: 2
        athletism: 3
        tech: 4
        demolition: 5
    flavor:
        - title: Hacker
          action: true
          stress: 0
          text: Once, anytime after you crack a terminal, you can draw one <span class='fa fa-code'></span> from <span class='fa fa-code'></span> deck.
        - title: Decker
          action: false
          stress: 0
          text: You gain one more <span class='fa fa-code'></span> slot in your inventory.
    proficiencies:
        range: 1
        melee: 0
        medicine: 1
        matrice: 3
        magic: 0
---
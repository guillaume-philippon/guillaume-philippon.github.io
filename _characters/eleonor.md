---
layout: default
permalink: /:collection/:name.json
location: /characters/eleonor.json
data:
    name: Eleonor O'Neil
    class: Street Samourai
    image: /shadowrun-boardgame/images/characters/eleonor.png
    background_color: DimGray
    attributes:
        health: 12
        endurance: 5
        speed: 4
        defense:
            physical:
                - black
            magical:
                - black
    skills:
        social: 1
        stealth: 1
        athletism: 3
        tech: 4
        demolition: 5
    flavor:
        - title: Sexy Limb
          action: true
          stress: 1
          text: After a successfull <span class='icon-gun'></span> attack you can move up to half your speed (round down) to make a <span class=\"icon-axe\"></span> attack with <span class=\"icon-die-dice\" style=\"color:green\"></span> or one of your cyberlimb.
        - title: You talkin 'me
          action: false
          stress: 1
          text: After a <span class=\"fa fa-comment\"></span> intimidation test, you can re-roll one of your dice.
        - title: Street Samourai
          action: false
          stress: 0
          text: You are not restricted to two weapon.
    proficiencies:
        range: 3
        melee: 1
        medicine: 1
        matrice: 0
        magic: 0
---
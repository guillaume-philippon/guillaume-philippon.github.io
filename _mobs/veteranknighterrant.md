---
layout: default
permalink: /:collection/:name.json
location: /mobs/veteranknighterrant.json
data:
    name: Veteran Knight Errant
    unit: 3
    health: 5
    image: /shadowrun-boardgame/images/mobs/knighterrant.png
    background_color: DimGray
    effects:
        - +2 <span class='fa fa-sun-o'></span>
        - +2 Accuracy
    descriptions:
        - name: Squad Training
          text: While attacking, while adjancent to another friendly Knight Errant, you may reroll 1 attack dice.
    skill:
        social: 3
        stealth: 2
    attack:
        type: range
        dices:
            - blue
            - green
    defense:
        magical:
            - black
        physical:
            - black
---
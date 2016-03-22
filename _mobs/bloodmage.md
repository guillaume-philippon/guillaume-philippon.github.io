---
layout: default
permalink: /:collection/:name.json
location: /mobs/bloodmage.json
data:
    name: Blood Mage
    unit: 1
    health: 8
    image: /shadowrun-boardgame/images/mobs/bloodmage.jpg
    background_color: LightSkyBlue
    effects:
        - +3 <span class='fa fa-sun-o'></span>
        - +2 Accuracy
    descriptions:
        - name: Sacrifice
          text: While attacking, while adjacent to another friendly figurine, you can give +1 <span class='fa fa-sun-o'></span> to this figurine to gain +1 <span class='glyphicon glyphicon-flash'></span>
        - name: Unauthorize Magic
          text: You can take each <span class='glyphicon glyphicon-flash'></span> twice.
    skill:
        social: 3
        stealth: 1
    attack:
        type: magic
        dices:
            - gold
    defense:
        magical:
            - white
        physical:
            - white
---
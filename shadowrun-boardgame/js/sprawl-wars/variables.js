/*
    Define a global dict to transform token word to icons
*/

var icons = {
    // Misc.
    "action": '<i class="sprawlwars-action"></i>',
    "stress": '<i class="sprawlwars-stress"></i>',
    "surge":  '<i class="sprawlwars-surge"></i>',
    // Skills
    "range":     '<i class="sprawlwars-range-weapon"></i>',
    "melee":     '<i class="sprawlwars-melee-weapon"></i>',
    "magic":     '<i class="sprawlwars-magic"></i>',
    "cyberware": '<i class="sprawlwars-cyberware"></i>',
    "social":    '<i class="fa fa-comments"></i>',
    "medicine":  '<i class="sprawlwars-medicine"></i>',
    "matrice":   '<i class="sprawlwars-matrice"></i>',
    // Attributes
    "health":   '<i class="sprawlwars-matrice"></i>',
    "endurance":'<i class="sprawlwars-matrice"></i>',
    "speed":    '<i class="sprawlwars-matrice"></i>',
    "defense":  '<i class="sprawlwars-matrice"></i>'
};

/*
    Define a list to transform skill level to dice
*/
var skill_dice = [
    [],
    [ "red" ],
    [ "green" ],
    [ "blue", "green" ],
    [ "blue", "yellow" ],
    [ "red", "green", "yellow" ],
    [ "green", "green", "yellow" ],
    [ "green", "yellow", "yellow" ],
    [ "yellow", "yellow", "yellow" ]
];

/*
    By default view_images is turned off
*/
var view_images = false;
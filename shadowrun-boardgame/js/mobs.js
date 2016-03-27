var current_sheet = {}

function load_image(){
    $('#image').attr('src', current_sheet.image)
    $('#image').css('opacity', 0.9)
}

function load_dices(dices, nb_of_dices, destination) {
    i = 0;
    $.each(dices, function(idx, dice){
        $(destination + idx).attr('style','color: '+ dice + ' !important;')
        $(destination + idx).removeClass('hidden-dice')
        i++
    })
    for (i; i < nb_of_dices; i++) {
        $(destination + i).addClass('hidden-dice')
    }

}

function load_mobs(location) {
    $.getJSON(location, function(data){
        $('#sheet').attr('style','background-color: '+ data.background_color+ ' !important;')
        current_sheet = data
        $('#unit').html(data.unit)
        $('#name').html(data.name)
        $('#health').html(data.health)
        if (view_images) {
            $('#image').attr("src", data.image)
        }

        effects = ''
        $.each(data.effects, function(idx, effect){
//            effects += '<div class="col-xs-6 effect">' + surge + ': ' + effect + '</div>'
            effects += '<span class="effect">' + icons['surge'] + ': ' + effect + '</span><br/>'
        })
        $('#effects').html(effects)

        descriptions = ''
        $.each(data.descriptions, function(idx, description){
            if (descriptions != '') {
                descriptions += '<br/>'
            }
            descriptions += '<b>' + description.name + '</b>: ' + description.text
        })
        $('#descriptions').html(descriptions)

        $('#social').html(data.skill.social)
        $('#intuition').html(data.skill.intuition)
        $('#stealth').html(data.skill.stealth)
        $('#medicine').html(data.skill.medicine)
        $('#strength').html(data.skill.strength)
        $('#tech').html(data.skill.tech)

        $('#atk-type').html(icons[data.attack.type])
        load_dices(data.attack.dices, 3, '#atk-dice-')
        load_dices(data.defense.magical, 2, '#def-magic-dice-')
        load_dices(data.defense.physical, 2, '#def-physic-dice-')
//        $.each(data.attack.dices, function(idx, dice){
//            $('#atk-dice-'+idx).css('color', dice)
//        })
//
//        $.each(data.defense, function(idx, dice){
//            $('#def-dice-'+idx).css('color', dice)
//        })
    })
}

$(document).ready(function (){
    load_mobs('/mobs/knighterrant.json')
})
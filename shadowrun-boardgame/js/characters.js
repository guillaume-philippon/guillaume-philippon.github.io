var current_sheet = {}

/*
    Used to reload image if asked by CSS
*/
function load_image(){
    $('#image').attr('src', current_sheet.image)
    $('#image').css('opacity', 0.95)
}

function load_defense_dices(type, dices) {
    i = 0
    $.each(dices, function(idx, dice){
        $('#' + type + '-defense-' + idx).attr('style','color: ' + dice + ' !important;')
        $('#' + type + '-defense-' + idx).removeClass('hidden-dice')
        i++
    })
    for (i; i < 2; i++) {
        $('#' + type + '-defense-' + i).addClass('hidden-dice')
    }
}

function load_proficiency(proficiency, level){
    for (i = 0; i < 5; i++) {
        if (i < level) {
            $('#' + proficiency + '-bullet-' + i).removeClass('fa-circle-thin')
            $('#' + proficiency + '-bullet-' + i).addClass('fa-circle')
        } else {
            $('#' + proficiency + '-bullet-' + i).addClass('fa-circle-thin')
            $('#' + proficiency + '-bullet-' + i).removeClass('fa-circle')
        }
    }
}

function load_character(location) {
    return $.getJSON(location, function(data){
        current_sheet = data
        /* Generic value */
        $('#name').html(data.name)
        $('#class').html(data.class)
        if (view_images) {
            $('#image').attr("src", data.image)
        }
        console.log(data.background_color)
        $('#contents').attr('style','background-color: ' +  data.background_color + ' !important;')


        /* Attributes */
        $.each(data.attributes, function(attribute, value){
            if (attribute == "defense" ) {
                load_defense_dices('physical', data.attributes[attribute].physical)
                load_defense_dices('magical', data.attributes[attribute].magical)
            } else {
                $('#'+attribute).html(value)
            }
        })

        /* Bonus */
        bonus_text = ''
        $.each(data.flavor, function(flavor, value){
            bonus_text += '<center><b>' + value.title + '</b></center>'
            if (value.action) {
                bonus_text += icons['action']
            }
            if (value.stress > 0) {
                bonus_text += value.stress + ' ' + icons['stress']
            }
            bonus_text += '<p>' + value.text + '</p>'
        })
        $('#flavor-box').html(bonus_text)

        /* Skills */
        $.each(data.skills, function(skill, value){
            i = 0
            $.each(skill_dice[value], function(k, dice){
                $('#'+skill+'-dice-'+k).attr('style', 'color: ' + dice + ' !important;')
                $('#'+skill+'-dice-'+k).removeClass('hidden-dice')
                i++
            })
            for (i; i < 3; i++) {
                $('#'+skill+'-dice-'+i).addClass('hidden-dice')
            }
        })

        /* Equipment */
        $.each(data.proficiencies, function(proficiency, level){
            load_proficiency(proficiency, level)
        })
    })
}

$(document).ready(function (){
    load_character('/characters/eleonor.json')
})
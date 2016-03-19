var action = '<span class="fa fa-share"></span>'
var stress = '<span class="fa fa-heartbeat"></span>'
var dice_disable = 'white'
var current_sheet = {}

/*
    Used to reload image if asked by CSS
*/
function load_image(){
    $('#image').attr('src', current_sheet.image)
    $('#image').css('opacity', 0.95)
}

/*
  Transform a defense attribute to a dice span
*/
function defense_attribute_to_dice(defense_dices) {
  html_display = ''
  $.each(defense_dices, function(idx, dice){
    html_display += '<i class="icon-die-dice" style="color:' + dice + '"></i> '
  })
  return html_display
}

/*
    Hide all dices
*/
function clean_skill_color(skill) {
    for (i=0; i < 3; i++) {
        $('#'+skill+'-dice-'+i).css('color', dice_disable)
        $('#'+skill+'-dice-'+i).addClass('hidden-dice')
    }
}

function equipment_level_populate(equipment, level){
    for (i = 0; i < 5; i++) {
        if (i < level) {
            $('#' + equipment + '-bullet-' + i).removeClass('fa-circle-thin')
            $('#' + equipment + '-bullet-' + i).addClass('fa-circle')
        } else {
            $('#' + equipment + '-bullet-' + i).addClass('fa-circle-thin')
            $('#' + equipment + '-bullet-' + i).removeClass('fa-circle')
        }
    }
}

function load_character(name) {
    return $.getJSON('/characters/' + name + '.json', function(data){
        current_sheet = data
        /* Generic value */
        $('#name').html(data.name)
        $('#class').html(data.class)
        if (image_display) {
            $('#image').attr("src", data.image)
        }
        console.log(data.background_color)
        $('#contents').css('background-color', data.background_color)


        /* Attributes */
        $.each(data.attributes, function(attribute, value){
            if (attribute == "defense" ) {
                $('#physical-defense').html(defense_attribute_to_dice(data.attributes[attribute].physical))
                $('#magical-defense').html(defense_attribute_to_dice(data.attributes[attribute].magical))
            } else {
                $('#'+attribute).html(value)
            }
        })

        /* Bonus */
        bonus_text = ''
        $.each(data.flavor, function(flavor, value){
            bonus_text += '<center><b>' + value.title + '</b></center>'
            if (value.action) {
                bonus_text += action
            }
            if (value.stress > 0) {
                bonus_text += value.stress + ' ' + stress
            }
            bonus_text += '<p>' + value.text + '</p>'
        })
        $('#flavor-box').html(bonus_text)

        /* Skills */
        $.each(data.skills, function(skill, value){
            clean_skill_color(skill)
            $.each(value, function(k, dice){
                $('#'+skill+'-dice-'+k).css('color', dice)
                $('#'+skill+'-dice-'+k).removeClass('hidden-dice')
            })
        })

        /* Equipment */
        $.each(data.proficiencies, function(proficiency, level){
            equipment_level_populate(proficiency, level)
        })
    })
}

$(document).ready(function (){
    load_character('eleonor')
})
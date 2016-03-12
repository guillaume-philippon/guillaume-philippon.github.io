var action = '<span class="fa fa-share"></span>'
var stress = '<span class="fa fa-heartbeat"></span>'

/*
  Transform a defense attribute to a dice span
*/
function defense_attribute_to_dice(defense_dices) {
  html_display = ''
  $.each(defense_dices, function(idx, dice){
    html_display += '<span class="glyphicon glyphicon-stop defense-dice" style="color:' + dice + '"></span> '
  })
  return html_display
}

function load_character(name) {
    return $.getJSON('/characters/' + name + '.json', function(data){
        /* Generic value */
        $('#name').html(data.name)
        $('#class').html(data.class)
        $('#image').attr("src", data.image)

        /* Attributes */
        $.each(data.attributes, function(attribute, value){
            if (attribute == "defense" ) {
                $('#defense').html(defense_attribute_to_dice(data.attributes[attribute].physical) + '/'+ defense_attribute_to_dice(data.attributes[attribute].magical))
            } else {
                $('#'+attribute).html(value)
            }
        })

        /* Bonus */
        bonus_text = ''
        $.each(data.bonus, function(bonus_name, value){
            bonus_text += '<center><b>' + value.title + '</b></center>'
            if (value.action) {
                bonus_text += action
            }
            if (value.stress > 0) {
                bonus_text += value.stress + ' ' + stress
            }
            bonus_text += '<p>' + value.text + '</p>'
        })
        $('#bonus-box').html(bonus_text)

        /* Skills */
        $.each(data.skills, function(skill, value){
            $.each(value, function(k, dice){
                $('#'+skill+'-dice-'+k).css('color', dice)
            })
        })
    })
}

$(document).ready(function (){
})
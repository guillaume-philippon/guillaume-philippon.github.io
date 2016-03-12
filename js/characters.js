var action = '<span class="fa fa-share"></span>'
var stress = '<span class="fa fa-heartbeat"></span>'

function load_character(name) {
    return $.getJSON('/characters/' + name + '.json', function(data){
        /* Generic value */
        $('#name').html(data.name)
        $('#class').html(data.class)
        $('#image').attr("src", data.image)

        /* Attributes */
        $.each(data.attributes, function(attribute, value){
            $('#'+attribute).html(value)
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
function load_character(name) {
    return $.getJSON('/characters/' + name + '.json', function(data){
        /* Generic value */
        $('#name').html(data.name)
        $('#class').html(data.class)

        /* Attributes */
        $.each(data.attributes, function(attribute, value){
            $('#'+attribute).html(value)
        })

        /* Bonus */
        bonus_text = ''
        $.each(data.bonus, function(bonus_name, value){
            $bonus_text += '<center><b>' + value.title + '</b></center>'
            $bonus_text += '<p>' + value.text + '</p>'
        })

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
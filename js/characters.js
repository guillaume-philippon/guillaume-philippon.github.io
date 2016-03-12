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
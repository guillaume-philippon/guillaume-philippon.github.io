var surge='<span class="glyphicon glyphicon-flash"></span>: '
var type_to_span = {
    "range": '<span class="icon-gun"></span>',
    "close": '<span class="icon-axe"></span>',
    "magic": '<span class="icon-fire"></span>'
}

function load_mobs(name) {
    $.getJSON('mobs/' + name + '.json', function(data){
        $('#unit').html(data.unit)
        $('#name').html(data.name)
        $('#health').html(data.health)

        effects = ''
        $.each(data.effects, function(idx, effect){
            effects += '<div class="col-xs-6 effect">' + surge + effect + '</div>'
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

        $('#atk-type').html(type_to_span[data.attack.type])
        $.each(data.attack.dices, function(idx, dice){
            $('#atk-dice-'+idx).css('color', dice)
        })
    })
}

$(document).ready(function (){
    load_mobs('knighterrant')
})
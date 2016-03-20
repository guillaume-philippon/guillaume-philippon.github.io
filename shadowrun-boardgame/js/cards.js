var cards = {}
var idx_cards = 0 // Index of the first card you want display

function load_cards() {
    return $.getJSON("/cards/all.json", function(data){
        cards = data
    })
}

function load_image(){
    // $('#image').attr('src', current_sheet.image)
}

function load_card(location, idx){
    return $.getJSON(location, function(card){
        $('#card-'+idx+' .title').html(card.name)
        if (image_display) {
            $('#image-'+idx).attr('src', card.image)
        }
        $('#card-'+idx).css('background-color', card.background_color)
        load_proficiency(idx, card.proficiency)
        load_effects(idx, card.effects)
        $('#description-' + idx).html(card.description)
        load_dices(idx, card.dices)
        $('#card-'+idx).show()
    })
}

function load_dices(idx, dices) {
    i=0
    $.each(dices,function(idx_dice, dice){
        $('#dice-' + idx + '-' + idx_dice).css('color', dice)
        $('#dice-' + idx + '-' + idx_dice).removeClass('hidden-dice')
        i++
    })
}

function load_proficiency(idx_card, level){
    for (i=0; i < 4; i++){
        if (i < level ) {
            console.log('yeah')
            $('#proficiency-' + idx_card + '-' + i).removeClass('fa-circle-thin')
            $('#proficiency-' + idx_card + '-' + i).addClass('fa-circle')
        } else {
            $('#proficiency-' + idx_card + '-' + i).addClass('fa-circle-thin')
            $('#proficiency-' + idx_card + '-' + i).removeClass('fa-circle')
        }
    }
}

function load_effects(idx_card, effects) {
    handler = ''
    $.each(effects,function (idx, effect){
        handler += '<li class="list-group-item effect">'
        if (effect.surge > 0 ) {
            handler += effect.surge + ' ' + surge + ': '
        }
        handler += effect.description
        handler += '</li>'
    })
    $('#effects-'+idx_card).html(handler)
}

$(document).ready(function (){
    load_cards().then(
        function(){
            console.log(cards)
            $(cards).slice(idx_cards).each(function(idx, card){
                load_card(card.location, idx)
            })
        })
})
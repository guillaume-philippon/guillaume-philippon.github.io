var cards = {}
var cards_show = cards
var idx_cards = 0 // Index of the first card you want display
var nb_of_sheet = 16

function load_cards() {
    return $.getJSON("/cards/all.json", function(data){
        cards = data
        cards_show = cards
    })
}

function display_cards(idx_cards)  {
    i = 0
    $(cards_show).slice(idx_cards).each(function(idx, card){
        i++
        load_card(card.location, idx)
    })
    for (i; i < nb_of_sheet; i++) {
        $('#card-' + i).hide()
    }
}

function filter_cards(category) {
    if (category === 'all') {
        cards_show = cards
    } else {
        cards_show = $.grep(cards, function(card){
            return card.category === category;
        })
    }
    display_cards(0)
}

function load_image(){
}

function next() {
    if (idx_cards < cards.length - nb_of_sheet) {
        idx_cards = idx_cards + nb_of_sheet
        display_cards(idx_cards)
    }
}

function previous() {
    if (idx_cards >= nb_of_sheet) {
        idx_cards = idx_cards - nb_of_sheet
        display_cards(idx_cards)
    }
}


function load_card(location, idx){
    return $.getJSON(location, function(card){
        $('#card-'+idx+' .title').html(card.name)
        if (image_display) {
            $('#image-'+idx).attr('src', card.image)
        }
//        $('#card-'+idx).css('background-color', card.background_color)
        $('#card-'+idx).attr('style','background-color: ' + card.background_color + ' !important;')
        load_proficiency(idx, card.proficiency)
        load_effects(idx, card.effects)
        $('#description-' + idx).html(card.description)
        $('#type-' + idx).html(type_to_span[card.category])
        load_dices(idx, card.dices)
        $('#cost-' + idx).html('<i class="fa fa-jpy"></i> ' + card.cost)
        $('#card-'+idx).show()
    })
}

function load_dices(idx, dices) {
    i=0
    $.each(dices,function(idx_dice, dice){
//        $('#dice-' + idx + '-' + idx_dice).css('color', dice)
        $('#dice-' + idx + '-' + idx_dice).attr('style', 'color: ' +  dice + ' !important;')
        $('#dice-' + idx + '-' + idx_dice).removeClass('hidden-dice')
        i++
    })
    for (i; i < 3; i++) {
        $('#dice-' + idx + '-' + i).addClass('hidden-dice')
    }
}

function load_proficiency(idx_card, level){
    for (i=0; i < 4; i++){
        if (i < level ) {
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
        handler += '<div class="effect">'
        if (effect.surge > 0 ) {
            handler += effect.surge + ' ' + surge + ': '
        }
        handler += effect.description
        handler += '</div>'
    })
    $('#effects-'+idx_card).html(handler)
}

$(document).ready(function (){
    load_cards().then(function () {
        display_cards(0)
    })
})
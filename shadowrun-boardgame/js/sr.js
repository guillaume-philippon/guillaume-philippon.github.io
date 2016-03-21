var action = '<span class="fa fa-share"></span>'
var stress = '<span class="fa fa-heartbeat"></span>'
var surge = '<span class="glyphicon glyphicon-flash"></span>'

var type_to_span = {
    "range": '<span class="icon-gun"></span>',
    "close": '<span class="icon-axe"></span>',
    "magic": '<span class="icon-fire"></span>',
    "cyberware": '<i class="icon-science-atom"></i>',
    "social": '<i class="fa fa-comments"></i>',
    "medicine": "<i class='fa fa-medkit'></i>",
    "melee": "<i class='icon-axe'></i>",
    "matrice": "<i class='fa fa-code'></i>"
}

function swap_image_display() {
    image_display = !image_display
    load_image_display()
}

function load_image_display() {
    if (image_display) {
        $('#toggle-image').css('color','blue')
        load_image()
    } else {
        $('#toggle-image').css('color','black')
        $('#image').attr('src','/shadowrun-boardgame/images/default.jpg')
        $('#image').css('opacity', 0.2)
    }
}

function load_sheets(url) {
    $(location).attr('href', url + '?image_display=' + image_display)
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? false : sParameterName[1];
        }
    }

    return false
};

$(document).ready(function () {
    image_display = ( getUrlParameter('image_display') === 'true' )
    /* By default tooltip is disabled */
    $('[data-toggle="tooltip"]').tooltip()
    load_image_display()
})
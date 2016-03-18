function swap_image_display() {
    image_display = !image_display
    load_image_display()
}

function load_image_display() {
    if (image_display == "true" ) {
        $('#toggle-image').css('color','blue')
        load_image()
    } else {
        $('#toggle-image').css('color','black')
        $('#image').attr('src','/shadowrun-boardgame/images/default.jpg')
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
    image_display = getUrlParameter('image_display')
    /* By default tooltip is disabled */
    $('[data-toggle="tooltip"]').tooltip()
    load_image_display()
})
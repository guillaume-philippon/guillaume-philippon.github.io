/*
    getUrlParameter return the value of sParam key from GET parameter
*/
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

/*
    swap_image_display hide or show images
    load_image_display
*/
function swap_image_display() {
    view_images = !view_images
    load_image_display()
}

function load_image_display() {
    if (view_images) {
        $('#toggle-image').css('color','blue')
        load_image()
    } else {
        $('#toggle-image').css('color','black')
        $('#image').attr('src','/shadowrun-boardgame/images/default.jpg')
        $('#image').css('opacity', 0.2)
    }
}
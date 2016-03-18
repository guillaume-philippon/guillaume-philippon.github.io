var image_display = true

function swap_image_display() {
    image_display = !image_display

    if (image_display) {
        $('#toggle-image').css('color','blue')
    } else {
        $('#toggle-image').css('color','black')
        $('#image').attr('src','/shadowrun-boardgame/images/default.jpg')
    }
}

$(document).ready(function (){
    /* By default tooltip is disabled */
    $('[data-toggle="tooltip"]').tooltip()
    swap_image_display()
})
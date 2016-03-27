
function load_sheets(url) {
    $(location).attr('href', url + '?image_display=' + view_images)
}

$(document).ready(function () {
    view_images = ( getUrlParameter('image_display') === 'true' )
    /* By default tooltip is disabled */
    $('[data-toggle="tooltip"]').tooltip()
    load_image_display()
})
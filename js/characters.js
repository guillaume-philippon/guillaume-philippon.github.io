function load_character(name) {
    return $.getJSON('/characters/' + name + '.json', function(data){
        $('#name').html(data.name)
        $('#class').html(data.class)
    })
}

$(document).ready(function (){
    sidebar_characters()
})
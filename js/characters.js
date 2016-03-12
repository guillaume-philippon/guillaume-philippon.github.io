
function sidebar_characters() {
    return $.getJSON('/characters/?format=json', function(data) {
        characters = ''
        $.each(data.characters, function (idx, item){
            characters += '<li><a href="#" onClick="load_character(\''+ item +'\')">' + item + '</a></li>'
        })
        $('#characters_sidebar').html(characters)
    })
};

function load_character(name) {
    return $.getJSON('/characters/' + name + '/?format=json', function(data){
        $('#name').html(data.name)
        $('#class').html(data.class)
    })
}

$(document).ready(function (){
    sidebar_characters()
})
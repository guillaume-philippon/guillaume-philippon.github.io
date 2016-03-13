function load_category(category) {
    $.getJSON("/cards/magic/fireball.json", function(data){
        response = ''
        response += '<div class="col-xs-2">'
        response += '<div class="panel panel-default">'
        response += '<div class="panel-heading">' + data.name + '</div>'
        response += '<div class="panel-body">'  + data.description + '</div>'
        response += '</div>'
        response += '</div>'
        $('#cards').html(response)
    })
}
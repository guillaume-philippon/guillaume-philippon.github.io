function load_category(category) {
    $.getJSON("/cards/magic/fireball.json", function(data){
        response = ''
        response += '<div class="col-xs-2">'
        response += '<div class="panel panel-default">'
        response += '<div class="panel-heading">' + data.name + '</div>'
        response += '<div class="panel-body">'
        response += '<div class="col-xs-12">' + data.description + '</div>'
        response += '<div class="col-xs-12"><hr/></div>'
        response += '<div class="col-xs-12"><div class="col-xs-4"></div><div class="col-xs-8">'
        response += '<span class="icon-die-dice"></span>'
        response += ' <span class="icon-die-dice"></span>'
        response += ' <span class="icon-die-dice"></span>'
        response += '</div></div>'
        response += '</div>'
        response += '</div>'
        response += '</div>'
        $('#cards').html(response)
    })
}
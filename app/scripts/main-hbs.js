$(document).ready(function() {
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var html = template({
        foo: 'bar'
    })
    $('#js-body').html(html)
})

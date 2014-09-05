$(document).ready(function() {
    var $entryTemplate = $("#entry-template")

    if ($entryTemplate.length > 0) {
        var source   = $entryTemplate.html();
        var template = Handlebars.compile(source);

        var html = template({
            modelName: 'Riley Richardson',
            height: '5’7’’',
            weight: '120',
            shoe: '8',
            dress: '2/4',
            bust: '34C',
            waist: '25',
            hips: '34',
            hair: 'Brown',
            eyes: 'Blue',
            instagram: 'thelifeof_ry'
        })

        $('#js-body').html(html)

    }

})


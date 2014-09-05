$(document).ready(function() {
    var $entryTemplate = $("#entry-template")

    if ($entryTemplate.length > 0) {
        var source   = $entryTemplate.html();
        var template = Handlebars.compile(source);

        var models = [
            {
                pageName: 'riley-richardson',
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
            }
        ]

        var findModelFromPage = function (models, pageName) {
            return models.filter(function (item){
                return item.pageName == pageName
            })[0]
        }
        var getPageName = function () {
            var hash = window.location.hash
            return hash.slice(1, hash.length)
        }


        var data = findModelFromPage(models, getPageName())

        var html = template(data)

        $('#js-body').html(html)

    }

})


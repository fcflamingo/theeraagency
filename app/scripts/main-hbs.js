$(document).ready(function() {
    var $profilesTemplate = $("#profiles-template")
    var $profileTemplate = $("#profile-template")

    var onProfilePage = $profileTemplate.length > 0

    if (onProfilePage) {

        var renderProfilesPage = function () {
            var source   = $profilesTemplate.html();
            var template = Handlebars.compile(source);

            renderPage(TheEraAgency, template)
        }

        var renderProfilePage = function (pageName) {
            var source   = $profileTemplate.html();
            var template = Handlebars.compile(source);

            var findModelFromPage = function (models, pageName) {
                return models.filter(function (item){
                    return item.pageName == pageName
                })[0]
            }
            var model = findModelFromPage(TheEraAgency.models, pageName)

            renderPage(model, template)
        }

        var renderPage = function (data, template) {
            var html = template(data)
            $('#js-body').html(html)
        }


        //handle hash changes
        function handleChanges(newHash, oldHash){
            if (newHash) {
                renderProfilePage(newHash)
            } else {
                renderProfilesPage()
            }

            TheEraAgency.sizeProfiles()
            TheEraAgency.initProfiles()

        }

        hasher.changed.add(handleChanges); //add hash change listener
        hasher.initialized.add(handleChanges); //add initialized listener (to grab initial value in case it is already set)
        hasher.init(); //initialize hasher (start listening for history changes)


    }

})


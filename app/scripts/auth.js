$(document).ready(function () {

    var password = 'models2015'
    var confirmCodeInput = $('#js-password')
    confirmCodeInput.on('keyup', function () {
        if(confirmCodeInput.val() == password) {
            $('#js-login').removeAttr('disabled')
        } else {
            $('#js-login').attr('disabled', 'disabled')
        }
    return false
    })
})

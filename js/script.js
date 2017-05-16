var screen = $(window).width();
var inviteList = $('#invite-list button');
var saveButton = $('#save');

if (screen > 420) {
    $('.blackout').css('display', 'block')
}

saveButton.click(function () {
    $('.confirm').css('display', 'none');
    $('.question').text('¿Querés saber quienes vienen?');
    inviteList.css('display', 'block');
})
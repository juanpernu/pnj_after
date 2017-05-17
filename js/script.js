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




// LISTA DE CONFIRMADOS!
var invitedPep = {
	"invitados": [
		{ "name":"Ponja", "subsecretary":"Ciudad Inteligente", "direction":"DGGEDI"  },
		{ "name":"Lucho", "subsecretary":"Ciudad Inteligente", "direction":"DGGEDI"  },
		{ "name":"Sol", "subsecretary":"Ciudad Inteligente", "direction":"DGGEDI"  },
		{ "name":"Puchu", "subsecretary":"Ciudad Inteligente", "direction":"DGGEDI"  }
	]
}





var listInvited = ( function () {

	var name;
	var subse;
	var direction;
	var listElement = $('.invited-list');

	for (var i = 0; i < invitedPep.invitados.length; i++) {
		name = invitedPep.invitados[i].name;
		subse = invitedPep.invitados[i].subsecretary;
		direction = invitedPep.invitados[i].direction;

		listElement.append('<li> <strong>' + name + '</strong> ' + '<span>' + subse + ', ' + direction + '</span> </li>');
	}
})()





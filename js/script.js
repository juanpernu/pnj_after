var screen = $(window).width();
var inviteList = $('#invite-list button');
var saveButton = $('#save');

if (screen > 420) {
	$('.blackout').css('display', 'block');
	$('.text-left .padding-box').css('display', 'none');
}

saveButton.click(function () {
    $('.confirm').css('display', 'none');
    $('.question').text('¿Querés saber quienes vienen?');
    inviteList.css('display', 'block');
})




// LISTA DE CONFIRMADOS!
var invitedPep = {
	"invitados": [
		{ "name":"Mariana", "subsecretary":"-", "direction":"-"  },
		{ "name":"Mike", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Mariana", "subsecretary":"SECPECG", "direction":"-"  },
		{ "name":"Alejo", "subsecretary":"DE", "direction":"Inversiones"  },	
		{ "name":"Manu", "subsecretary":"SSCI", "direction":"DGCYT"  },	
		{ "name":"Tomas", "subsecretary":"DE", "direction":"Inversiones"  },	
		{ "name":"Guido S.", "subsecretary":"SSCI", "direction":"GEDI"  },	
		{ "name":"Francisco", "subsecretary":"DE", "direction":"Inversiones"  },
		{ "name":"Julieta", "subsecretary":"Comunicacion", "direction":"Comunicacion"  },
		{ "name":"Dolores", "subsecretary":"SSCI", "direction":"SSICI"  },
		{ "name":"Romina", "subsecretary":"SSCI", "direction":"SSICI"  },
		{ "name":"Lucrecia", "subsecretary":"SSCI", "direction":"SSICI"  },
		{ "name":"Mili Tachella", "subsecretary":"SSCI", "direction":"Comunicación"  },
		{ "name":"Guillermina", "subsecretary":"SSCI", "direction":"Comunicación"  },
		{ "name":"Clara", "subsecretary":"SSCI", "direction":"DGCyT"  },
		{ "name":"Angie Giavarini", "subsecretary":"DE", "direction":"Inversiones"  },
		{ "name":"Juan Puig", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Nico", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Ifi", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Guido", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Melina", "subsecretary":"SSCI", "direction":"Comunicacion"  },
		{ "name":"Diego Guillen", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Nacho Pueta", "subsecretary":"SSCI", "direction":"DGCyT"  },
		{ "name":"Lore", "subsecretary":"SSCI", "direction":"DGCyT"  },
		{ "name":"Pablo Icardi", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Tomi Casagrande", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Pitu", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Yorland", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Sol", "subsecretary":"Economica", "direction":"PAPP"  },
		{ "name":"Puchu", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Florchi", "subsecretary":"SSCI", "direction":"GEDI"  },
		{ "name":"Ernesto", "subsecretary":"Ciudad Inteligente", "direction":"GEDI"  },
		{ "name":"Ponja", "subsecretary":"Ciudad Inteligente", "direction":"GEDI"  }
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





var app = app || {};

// Funciones para generar GUIDs aleatorias

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
};

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
}

var aleatorio;

// Fin de las funciones que generan GUIDs aleatorias

app.Picture = Backbone.Model.extend({
	initialize: function(){
		this.id  = guid();
		console.log("Modelo creado: ", this.id);
	},
	defaults: {
		title: "Titulo de la foto",
		author: "Desconocido",
		image: "img/bilbao",
		votes: "100"
	},
});


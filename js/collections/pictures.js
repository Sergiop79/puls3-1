var app = app || {};

app.Pictures = Backbone.Collection.extend({
	models: app.Picture
});

var pictures = new app.Pictures({
	model: app.Picture,
});

pictures.fetch({
	url:'/base-data.json',
	success: function(){
		console.log("JSON cargado satisfactoriamente", pictures);
	},
	error: function(){
		console.log("Hay un error en la carga del JSON");
	}
});

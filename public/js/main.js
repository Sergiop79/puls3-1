var app = app || {};

function onDocumentReady(){
	var menu = $("#menu_buttom");
	menu.on("click", function() {
		$(".menu_items").slideToggle(300);
	});
	
	$('#limpiar').on("click", function(){
		$('#entrada').val('');
		$('#author').val('');
		$('#url').val('');
	});
	
	
	$('#enviar').on('click', function(){
		var m = new app.Picture();
		m.set('title', $('#entrada').val());
		m.set('author', $('#author').val());
		m.set('image', $('#url').val());
		m.save();
		app.pictures.fetch();
	});

	app.pictures = new app.Pictures();
	app.pictures.on('add', function(model){
		var view = new app.ItemView(model);
		view.render();
		view.$el.insertAfter('.form');
	});

	var xhr = $.get('/picture');
	xhr.done(function(data){
		data.forEach(function(item){
			app.pictures.add(item);
		});
	});
};


$(document).on("ready", onDocumentReady);

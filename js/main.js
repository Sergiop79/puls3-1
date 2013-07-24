var app = app || {};

function onDocumentReady(){
	var menu = $("#menu_buttom");
	menu.on("click", function() {
		$(".menu_items").slideToggle(300);
	});

	app.listview = new app.ListView();
};
$(document).on("ready", onDocumentReady);

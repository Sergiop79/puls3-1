function onDocumentReady(){
	var menu = $("#menu_buttom");
	menu.on("click", function() {
		$(".menu_items").slideToggle(300);
	});
};


$(document).on("ready", onDocumentReady);

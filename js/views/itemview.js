var app = app || {};

app.ItemView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	el: '#maincontent',
	template: _.template($('#itemTemplate').html()),
	render: function(){
		this.$el.append(this.template(this.attributes));
		return this;
	}
});

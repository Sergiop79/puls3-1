var app = app || {};

app.ItemView = Backbone.View.extend({
	initialize: function(model) {
		this.render();
	},
	events: {
		"click .icon-thumbs-up": "upVote",
		"click .icon-thumbs-up-2": "downVote"
	},

	el: '#maincontent',
	template: _.template($('#itemTemplate').html()),
	render: function(){
		this.$el.append(this.template(this.attributes));
		return this;
	},
	upVote: function(e){
		e.stopPropagation();
		console.log("UPvote");
	},
	downVote: function(e){
		e.stopPropagation();
		console.log("DownVote");
	}

});

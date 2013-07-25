var app = app || {};

app.ItemView = Backbone.View.extend({
	initialize: function(model) {
		this.model = model;
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
		e.stopImmediatePropagation();
		console.log("UPvote");
		var votes = this.model.get("votes");
		this.model.set("votes", parseInt(votes, 10) + 1);
		this.model.save();
		console.log(votes);
	},
	downVote: function(e){
		e.stopImmediatePropagation();
		console.log("DownVote");
	}

});

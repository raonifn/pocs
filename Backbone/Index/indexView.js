var IndexView = Backbone.View.extend({
	el: $('#corpo'),
	tagName: 'div',
	id: 'index',
	initialize: function(){
	},
	render: function(){
		this.$el.append("<h1>Index</h1>");
		return this;
	}
})
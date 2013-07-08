var CadastroView = Backbone.View.extend({
	el: '',
	tagName: 'div',
	id: 'cadstro',
	events: {
        "click button": "open",
    },
	render: function(){
		this.$el.append("<h1> cadastro <button style='width:20px; height: 20px;'></h1>");
		return this;
	},
	open: function(){
        alert("oi");
    }
})
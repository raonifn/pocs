var LoginView = Backbone.View.extend({
	el: $('#corpo'),
	model: '',
    initialize: function() {
    	this.$el.empty();
    },
    render: function() {
        this.$el.append("<span>login</span><input type='text'><br><span>senha</span><input type='text'><br><a href='#cadastro'>cadastre-se</a><div id='cadastro'></div>");
        this.cadastroDiv = this.$el.find('#cadastro');
    },
    cadastro: function(){
        cadastroView = new CadastroView();
        this.cadastroDiv.append(cadastroView.render().el);
    }
});
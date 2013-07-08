define(["backbone", "CadastroModel"], function (Backbone, CadastroModel) {
	var CadastroView = Backbone.View.extend({
		el: '',
		tagName: 'div',
		id: 'cadstro',
		model : '',
		events: {
	        "click  #btnCadastro": "insert"
	    },
		render: function(){
			this.$el.append("<h1>Cadastro</h1><br><label>usuario</label><input type='text' id='user'><br><span>senha</span><input type='text' id='pass'><br><button id='btnCadastro'>Inserir</button>");
			return this;
		},
		insert: function(){
			var userValue = this.$el.find("#user").val();
			var passValue = this.$el.find("#pass").val();
	        this.model.inserir(userValue, passValue);	
	    }
	})

	return CadastroView;
});
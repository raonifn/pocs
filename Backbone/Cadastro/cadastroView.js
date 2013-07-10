define(["jquery","backbone", "CadastroModel", "text!../Cadastro/templates/tCadastro.html"], function ($,Backbone, CadastroModel, templateCadastro) {
	var CadastroView = Backbone.View.extend({
		el: '',
		tagName: 'div',
		templateCadastro : _.template(templateCadastro),
		id: 'cadstro',
		model : '',
		events: {
	        "click  #btnCadastro": "insert"
	    },
		render: function(){
			var obj = $.parseJSON('{"titulo":"Cadastrar-se-á"}'); // valor que viria do model
			this.$el.append(this.templateCadastro(obj));
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
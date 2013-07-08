var CadastroModel = Backbone.Model.extend({
	inserir: function(user, pass){
		setCookie("user", user);
		setCookie("pass", pass);
		alert("Inserido, pronto para Login");
	}
})
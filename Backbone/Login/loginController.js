(function(){

	window.App = {Router:{}, loginView:{}, loginModel:{}};

	App.Router = Backbone.Router.extend({
		routes:{
			'':'login',
			'cadastro':'cadstro'
		},
		login: function(){
			App.loginModel = new LoginModel();
			App.loginView = new LoginView({model : App.loginModel});
			App.loginView.render();
		},
		cadstro: function(){
			App.loginView.cadastro();
		}
	});

	new App.Router;
	Backbone.history.start();
})();
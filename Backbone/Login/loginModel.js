define(["backbone"], function (Backbone) {

	var LoginModel = Backbone.Model.extend({
		autenticar: function(user, pass) {
			if(getCookie("user") == user && getCookie("pass") == pass){
				alert("autenticou");
				 location.href="index.html";
			}else{
				alert("nao autenticou");
			}
			
		}
	})
	return LoginModel;
});
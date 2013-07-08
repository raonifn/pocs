var LoginModel = Backbone.Model.extend({
	autenticar: function(user, pass) {
		if(getCookie("user") == user && getCookie("pass") == pass){
			alert("autenticou");	
		}else{
			alert("nao autenticou");
		}
		
	}
})
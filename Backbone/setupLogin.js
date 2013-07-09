requirejs.config({
    "paths": {
        "lib": "lib",
        "jquery": ["lib/jquery-1.10.1.min"],
	      "backbone": ["lib/backbone-min"],
        "require": ["lib/require.min"],
        "underscore": ["lib/underscore-min"],
        "LoginModel": ["Login/loginModel"],
        "LoginView": ["Login/loginView"],
        "CadastroModel": ["Cadastro/cadastroModel"],
        "CadastroView": ["Cadastro/cadastroView"],
        "IndexView": ["Index/indexView"],
        "text": ["lib/text"]
    },
    "shim": {
        "jquery": {
            exports: '$'
        },
        "require": {
            exports: 'require'
        },
		    'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

function setCookie(cookieName,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=cookieName + "=" + cookieValue;
}

function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1)
      {
      c_start = c_value.indexOf(c_name + "=");
      }
    if (c_start == -1)
      {
      c_value = null;
      }
    else
      {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1)
      {
    c_end = c_value.length;
    }
    c_value = unescape(c_value.substring(c_start,c_end));
    }
return c_value;
}


// Load the main app module to start the app
requirejs(["Login/loginRouter"]);
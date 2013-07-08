define(["jquery", "backbone", "CadastroModel", "CadastroView"], function ($, Backbone, CadastroModel, CadastroView) {
    var LoginView = Backbone.View.extend({
    	el: $('#corpo'),
        events: {
            'click button#btnLogin' : 'login'
        },
        initialize: function() {
        	this.$el.empty();
        },
        render: function() {
            this.$el.append("<span>login</span><input type='text' id='user'><br><span>senha</span><input type='text' id='pass'><br><button id='btnLogin'>Login</button><a href='#cadastro'>cadastre-se</a><div id='cadastro'></div>");
            this.cadastroDiv = this.$el.find('#cadastro');
        },
        cadastro: function(){
            cadastroModel = new CadastroModel();
            cadastroView = new CadastroView({model : cadastroModel});
            this.cadastroDiv.append(cadastroView.render().el);
        },
        login : function(){
            var userValue = this.$el.find("#user").val();
            var passValue = this.$el.find("#pass").val();
            this.model.autenticar(userValue, passValue);
        }
    });

    return LoginView;
});

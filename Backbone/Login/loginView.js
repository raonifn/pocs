define(["jquery", "backbone", "CadastroModel", "CadastroView", "text!Login/templates/tLogin.html"],     
function ($, Backbone, CadastroModel, CadastroView, templateLogin) {
    var LoginView = Backbone.View.extend({
    	el: $('#corpo'), 
        templateLogin: _.template(templateLogin),
        events: {
            'click button#btnLogin' : 'login'
        },
        initialize: function() {
        	this.$el.empty();
        },
        render: function() {
            this.$el.append(templateLogin);
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

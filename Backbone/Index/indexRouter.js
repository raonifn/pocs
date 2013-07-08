(function(){

	window.App = {Router:{}, indexView:{}};

	App.Router = Backbone.Router.extend({
		routes:{
			'':'index',
			'outro':'outro'
		},
		index: function(){
			alert("Olá");
			App.indexView = new IndexView();
			App.indexView.render();
		},
		outro: function(){
			alert("deixe sua imaginação voar")
		}
	});

	new App.Router;
	Backbone.history.start();
})();
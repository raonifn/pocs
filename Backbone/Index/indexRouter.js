(function(){

	window.App = {Router:{}, indexView:{}};

	App.Router = Backbone.Router.extend({
		routes:{
			'':'index',
			'outro':'outro'
		},
		index: function(){
			alert("Ol�");
			App.indexView = new IndexView();
			App.indexView.render();
		}
	});
	new App.Router;
	Backbone.history.start();
})();
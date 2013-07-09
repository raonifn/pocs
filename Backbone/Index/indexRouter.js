define(["jquery", "backbone", "IndexView"], function ($, Backbone, IndexView) {
(function(){
	window.App = {Router:{}, indexView:{}};

	App.Router = Backbone.Router.extend({
		routes:{
			'':'index',
			'outro':'outro'
		},
		index: function(){
			App.indexView = new IndexView();
			App.indexView.render();
		}
	});
	new App.Router;
	Backbone.history.start();
})();

});
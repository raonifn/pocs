var PostView = Backbone.View.extend({
	tagName : "div",
	className : "page-posts",
    template: _.template('<a href="#" id="add-button">Add Post</a><h2><%= title %></h2><p><%= content %></p><h3>Comments</h3><label>Username: <input id="username" type="text" /></label>'),
    events : {
        "dbclick" : "fullscren",
        "click #add-button" : "newPost",
        "blur #username" : "searchUsername"
    },
	render : function(){
		this.$el.html(this.template({title : "nome do post", content : "conteudo do post"}));
	},
    fullscren : function(){
        window.alert("fullscren")
    },
    newPost : function(){
        window.alert("new Post")
    },
    searchUsername : function(e){
        window.alert("searching username "+ e.target.value)
    }
});

var PostModel = Backbone.Model.extend({

    title: '',
    text : '',
    idAttribute: '',

    defaults: {
        title: 'Titulo do Post',
        text: 'Conteúdo do Post',
        idAttribute: '201201'      
    }
})

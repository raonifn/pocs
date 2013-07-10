requirejs.config({
    "paths": {
        "lib": "../lib",
        "jquery": ["../lib/jquery-1.10.1.min"],
		"backbone": ["../lib/backbone-min"],
        "require": ["../lib/require.min"],
        "underscore": ["../lib/underscore-min"],
        "IndexView": ["../Index/indexView"],
        "text": ["../lib/text"]
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

// Load the main app module to start the app
requirejs(["indexRouter"]);
    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var app = angular.module('app', ['ngRoute','ngStorage']);
    // configure our routes
    app.config(['$routeProvider',function($routeProvider){
            $routeProvider.when('/', { // route for the home page
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })           
            .when('/about', { // route for the about page
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })
           
            .when('/requestlist', { // route for the about page
                templateUrl : 'pages/requestlist.html',
                controller  : 'requestviewController'
            })
			
			.when('/requestview', { // route for the about page
                templateUrl : 'pages/requestview.html',
                controller  : 'requestlistController'
            })

            
            .when('/contact', {// route for the contact page
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
		
			

    }]);    
    
var app = angular.module("madlib", ["ngRoute"]);

	app.config(function($routeProvider){
		
		$routeProvider
		.when('/', 
		{	
			controller: 'entrycontroller',
			templateUrl: 'madlibentry.html'
    		
		})

		.when('/madlibdisplay', 
		{
			controller: 'displaycontroller',
			templateUrl: 'madlibdisplay.html'
    		
		})

		.otherwise({redirectTo:'/'});

	});
var app = angular.module("madlib");

	app.controller("entrycontroller", function($scope, madlibservice, $location){

		$scope.getWords = function(words) {
			
			madlibservice.saveData(words);
			$location.path('/madlibdisplay');
		};

		});
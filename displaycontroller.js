var app = angular.module("madlib");

	app.controller("displaycontroller", function($scope, madlibservice){

		
		$scope.wordObject = madlibservice.wordkey();
		//console.log(madlibservice.wordkey());

		// var dataOnPage = madlibservice.getData();
		// $scope.string = dataOnPage.string;
		// $scope.string2 = dataOnPage.string2;
		// $scope.string3 = dataOnPage.string3;
	});
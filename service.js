var app = angular.module("madlib");

	app.factory("madlibservice", function(){
		var words = {};
		
		return {
			
			saveData: function(wordsObject){

				words = wordsObject;
				//console.log(words);
			},
			
			wordkey: function(){
				return words
			},

			// getData: function(){
			// 	return {
			// 		string: words,
			// };
		};
		
	});
var app = angular.module('parseQ')

app.controller('mainCtrl', function($scope, mainService){

	$scope.header = "The Dev Queue";

	$scope.getParseData = function(){
		mainService.getData().then(function(questions){
			$scope.questions = questions.data.results;
			console.log($scope.questions);
		})

	}
	$scope.postData = function(){
		mainService.postData($scope.question)
			.then(function(data){
				$scope.getParseData();
			});
			$scope.question = '';
	};

});

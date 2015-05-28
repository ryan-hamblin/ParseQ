var app = angular.module('parseQ');

app.service('mainService', function($http, $q){
	this.postData = function(question){
		var deffered = $q.defer();
		var url = 'https://api.parse.com/1/classes/question';
		$http({
			method: 'POST',
			data: {text: question},
			url: url
		}).then(function(data){
			deffered.resolve(data);
		})
		return deffered.promise;
	};


	this.getData = function(){
		var deffered = $q.defer();
		var url = 'https://api.parse.com/1/classes/question';
		return $http({
			method: 'GET',
			url: url
		})
	}

});
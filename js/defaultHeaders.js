var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
	return {
		request: function (config) {
			config.headers = {'X-Parse-Application-Id': 'lp4Wrpx1dHA8JexYVrfx0Ys3YqJ1bTb3NiSGcebE', 'X-Parse-REST-API-Key': 'XqEtr3CbsHkrFiDKr0gbaKj53YiDjlZ0bUvxyrT5'};
			return config;
		}
	};
});
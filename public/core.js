// public/core.js
var awsBuckets = angular.module('awsBuckets', ['ngRoute']);
awsBuckets.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'mainController'
		})
		// route for bucket files
		.when('/bucket/:ID', {
			templateUrl: 'templates/bucket.html',
			controller: 'bucketController'
		})
});
awsBuckets.controller('mainController', ['$scope', '$http', function($scope, $http) {
	$http.get('/api/aws/buckets')
		.success(function(data) {
			$scope.buckets = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}]);
awsBuckets.controller('bucketController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.ID = $routeParams.ID;
	$http.get('/api/aws/bucket?name='+$scope.ID)
		.success(function(data) {
			$scope.files = data.Contents;
			$scope.bucket = data;
			console.log(data.Contents);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}]);
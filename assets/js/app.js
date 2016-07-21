// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('turtleFacts', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		  .when('/list',{
			templateUrl: 'partials/list.html'
		   })
		  .when('/quiz',{
		  	templateUrl: 'partials/quiz.html'
		  })
		   .when('/result',{
		  	templateUrl: 'partials/result.html'
		  })
		   .otherwise({
		   	  redirectTo: '/list'
		   });
	}]);

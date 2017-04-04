angular.module('expedia', [ 
	'expedia.service',
	'expedia.controller',
	'ngRoute'
	])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/hotels', {
    templateUrl: 'app/views/deals.html',
    controller: 'expediaController'
  })
  .otherwise({
    redirectTo: '/hotels'
  });
});

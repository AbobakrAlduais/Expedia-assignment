var controller = angular.module('expedia.controller', [])

controller.controller('expediaController', function ($scope,expediaService) {
	$scope.hotels = [];
	$scope.getDeals = function () {
		expediaService.getDeals ().then(function (deals) {
			$scope.hotels = deals.offers.Hotel;
		});
	};
});
// use filter to decode URLs
controller.filter('decodeURIComponent', function() {
	return window.decodeURIComponent;
});


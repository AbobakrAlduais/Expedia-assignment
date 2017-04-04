angular.module('expedia.service', [])

.factory('expediaService', function ($http) {
	
	var getDeals = function(){
		return $http({
			method: 'GET',
			url: '/api/deals',
		}).then(function (resp) {
			return resp.data;
		});
	};
	return {
		getDeals :getDeals
	}
});
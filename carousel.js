var carouselAng = angular.module('carouselAng', []);

carouselAng.controller('cController', function($scope){
	$scope.navigation = (function(){
		return json.NavArray;
	})();
});

var json = {
	"NavArray":[
		{
			"Navigation":"Nintendo", 
			"URL":"/nintendo/",
			"SubNavigation":[{"Name":"Gameboy", "URL":""},{"Name":"Gamecube", "URL":""},{"Name":"N64", "URL":""}]
		},
		{
			"Navigation":"Sony", 
			"URL":"/sony/",
			"SubNavigation":[{"Name":"PSP", "URL":""},{"Name":"PS2", "URL":""},{"Name":"Vita", "URL":""}]
		},
		{
			"Navigation":"Microsoft", 
			"URL":"/microsoft/",
			"SubNavigation":[{"Name":"PC", "URL":""},{"Name":"Xbox 360", "URL":""},{"Name":"Xbox One", "URL":""}]
		}
	]
};
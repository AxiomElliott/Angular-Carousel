var carouselAng = angular.module('carouselAng', []);

carouselAng.controller('cController', function($scope){
	$scope.manufacturers = (function(){
		return json;
	})();
});

var json = [
		{
			"Name":"Nintendo",
			"URL":"assets/gameboy.jpg",
			"consoles":["Gameboy", "Gamecube", "N64"]
		},
		{
			"Name":"Sony",
			"URL":"assets/psp.jpg",
			"consoles":["PSP", "PS2", "Vita"]
		},
		{
			"Name":"Microsoft",
			"URL":"assets/xbox.jpg",
			"consoles":["PC", "Xbox 360", "Xbox One"]
		}
	];
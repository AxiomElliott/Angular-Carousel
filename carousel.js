var carouselAng = angular.module('carouselAng', []);

carouselAng.controller('cController', ['$scope', '$interval', function($scope, $interval){
	$scope.carouselPercentage = 0;

	$scope.manufacturers = (function(){
		return json;
	})();

	$scope.loadingBarWidth = function () {
		return { width:($scope.carouselPercentage / 20) + '%' };
	};

	function stepPercentage() {
		$scope.carouselPercentage += 1;
		if ($scope.carouselPercentage > 2000){
			$scope.carouselPercentage = 0;
		}
	}

	var timer = $interval(stepPercentage, 10);
	
}]);

var json = [
		{
			"name":"Nintendo",
			"url":"assets/gameboy.jpg",
			"consoles":["Gameboy", "Gamecube", "N64"]
		},
		{
			"name":"Sony",
			"url":"assets/psp.jpg",
			"consoles":["PSP", "PS2", "Vita"]
		},
		{
			"name":"Microsoft",
			"url":"assets/xbox.jpg",
			"consoles":["PC", "Xbox 360", "Xbox One"]
		}
	];
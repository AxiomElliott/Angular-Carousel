var carouselAng = angular.module('carouselAng', []);

carouselAng.controller('cController', ['$scope', '$interval', function($scope, $interval){
	$scope.automatic = true;
	$scope.carouselPercentage = 0;
	var speed = 10000;
	$scope.carouselTime = new Date().getTime() + speed;
	$scope.selectedIndex = 0;
	$scope.manufacturers = (function(){
		return json;
	})();

	$scope.checkAnimation = function(index) {
		return ($scope.selectedIndex === index) ? "slideInRight" : "slideOutLeft";
	};

	$scope.loadingBarWidth = function(index) {
		if ($scope.selectedIndex === index) {
			return { width:($scope.carouselPercentage) + '%' };
		}
	};
	$scope.setSelectedIndex = function(index) {
		$scope.selectedIndex = index;
		$scope.carouselPercentage = 0;
		$scope.automatic = false;
	};

	$scope.getNavSelected = function(index) {
		return (index === $scope.selectedIndex) ? "navigationitemselected" : "navigationitem";
	};

	function stepPercentage() {
		if ($scope.automatic) {
			$scope.carouselPercentage = (speed - ($scope.carouselTime - new Date().getTime())) / (speed / 100);
		}
		if ($scope.carouselPercentage > 100){
			$scope.carouselPercentage = 0;
			$scope.carouselTime = new Date().getTime() + speed;
			moveCarousel();
		}
	}

	function moveCarousel() {
		$scope.selectedIndex  = $scope.manufacturers.length === ($scope.selectedIndex + 1)? 0 : $scope.selectedIndex + 1;
	}

	$interval(stepPercentage, 5);
	
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
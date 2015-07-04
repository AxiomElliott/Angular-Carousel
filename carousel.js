var carouselAng = angular.module('carouselAng', []);

carouselAng.controller('cController', ['$scope', '$interval', function($scope, $interval){
	$scope.carouselPercentage = 0;
	$scope.selectedIndex = 0;
	$scope.manufacturers = (function(){
		return json;
	})();

	$scope.checkShow = function(index) {
		return (index === $scope.selectedIndex);
	};

	$scope.loadingBarWidth = function () {
		return { width:($scope.carouselPercentage / 20) + '%' };
	};
	$scope.setSelectedIndex = function(index) {
		$scope.selectedIndex = index;
		$scope.carouselPercentage = 0;
	}

	$scope.getNavSelected = function(index) {
		return (index === $scope.selectedIndex) ? "navigationitemselected" : "navigationitem";
	}

	function stepPercentage() {
		$scope.carouselPercentage += 1;
		if ($scope.carouselPercentage > 2000){
			$scope.carouselPercentage = 0;
			moveCarousel();
		}
	}

	function moveCarousel() {
		$scope.selectedIndex  = $scope.manufacturers.length === ($scope.selectedIndex + 1)? 0 : $scope.selectedIndex + 1;
	}

	var timer = $interval(stepPercentage, 2.5);
	
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
import angular from "angular"

var app = angular.module('Starwars', []);

app.controller('StarCtrl', function($scope,$http) {
	$scope.planets =[];
	$scope.getPlanets = () =>{
		var i=1;
		while(i<10){
			$http.get("https://swapi.co/api/planets/")
			.success(function(data){
				data.results.forEach(function(p){
					$scope.planets.push(p);
				});
			});
			i++;
		}
	}
	$scope.showDetails = function(pname,index){
		var planetdet = $scope.planets[index];
		$scope.name = planetdet.name;
		$scope.gravity = planetdet.gravity;
		$scope.climate = planetdet.climate;
		$scope.diameter = planetdet.diameter;
		$scope.created = planetdet.created;
		$scope.population = planetdet.population;
		$scope.surface_water = planetdet.surface_water;
		$scope.rotation_period = planetdet.rotation_period;
		$scope.residents=planetdet.residents;
	}
	$scope.showResidentDetails = function(){
		$scope.residentDet = [];
		$scope.residents.forEach(function(r){
			$http.get(r)
			.success(function(data){
				$scope.Rname = data.name;
				$scope.height = data.height;
				$scope.mass = data.mass;
				$scope.hair_color = data.hair_color;
				$scope.skin_color = data.skin_color;
				$scope.eye_color = data.eye_color;
				$scope.birth_year = data.birth_year;;
				$scope.gender = data.gender;
			});
		});
	}

	
});
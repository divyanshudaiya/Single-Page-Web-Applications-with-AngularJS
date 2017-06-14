(function(){
		

	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject=['$scope'];
	function LunchCheckController($scope){
		$scope.customStyle={};
		$scope.name="";
		$scope.curl="Please enter your food choices in text box :)";
		$scope.checkeri=function(){
			var t=fui($scope.name);
			$scope.curl=t;
			if (t==="Enjoy!"){
				$scope.customStyle.style={"background-color":"green"};
			}
			else if(t==="Too much!"){
				$scope.customStyle.style={"background-color":"red"};
			}
		};
		function fui(foe){
			var res = foe.split(",");
			if (res.length>3){
				return "Too much!";
			}
			else if (foe==="") {
				return "Please enter data first";
			}
			else{
				return "Enjoy!";
			}

		}
	}
	
	
})();

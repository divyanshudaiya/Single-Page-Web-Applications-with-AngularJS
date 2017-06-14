(function(){
		

	angular.module('ShoppingList',[])
	.controller('ShoppingListController',ShoppingListController)
	.controller('ShoppingListController1',ShoppingListController1)
	.service('listman',listman);

	function listman(){
		service=this;
		toBuy=[
			{
				item:"grapes",
				value :"10"
			},{
				item:"akhrot",
				value :"9"
			},{
				item:"brown aande",
				value :"12"
			},{
				item:"muffli",
				value :"13"
			},{
				item:" bakri ka milk",
				value :"2"
			},{
				item:"milk",
				value :"4"
			},{
				item:"makki ka aata",
				value :"1"
			},{
				item:"wheat-flour",
				value :"1"
			}
		];
		bought=[];
		service.newitem=null;
		service.itsQuantity=null;
		service.itsbought=function(index){
			var newitem=toBuy[index];
			bought.push(newitem);
			toBuy.splice(index, 1);

		}	

    	service.getListToBuy=function(){
    		return toBuy;
    	}
    	service.getListBought=function(){
    		return bought;
    	}
    };
		
	ShoppingListController.$inject = ['listman','$scope'];
	

	function ShoppingListController(listman,$scope){
		var shop=this;
		$scope.customStyle={};
		shop.toBuy=listman.getListToBuy();
		shop.count=1;
		shop.itsbought=function(index){
				listman.itsbought(index);
				if (shop.toBuy.length==0){
					$scope.customStyle.style={"background-color":"green"};
				}
				else if (shop.count%2 == 0) {
					$scope.customStyle.style={"background-color":"ff0066"};
					shop.count++;
				}
				else{
					$scope.customStyle.style={"background-color":"purple"};
					shop.count++;
				}
		};
	};
	

	ShoppingListController1.$inject = ['listman'];
	
	function ShoppingListController1(listman){
		var shop=this;
		shop.bought=listman.getListBought();		
	}
	
	
})();
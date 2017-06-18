(function(){
	
'use strict';
angular.module('data')
.service('MenuSearchService',MenuSearchService);


MenuSearchService.$inject = ["$http"];
function MenuSearchService($http){
	var service=this;
	service.data=[];
	service.getAllCategories=function(){

		var response=$http({
			method:'GET',
			url:"https://davids-restaurant.herokuapp.com/categories.json"
			}).then(function(response){
				service.data=response.data;
				console.log(service.data);
				return service.data;
				}
		);

		return response;
	};
	
	service.itemdata=[];
	service.getItemforCategory=function(categoryShortname){

		var response=$http({
			method:'GET',
			url:"https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortname,
			// data:{
			// 	"category" : categoryShortname
			// }
			}).then(function(response){
				service.itemdata=response.data;
				console.log(service.itemdata);
				return service.itemdata.menu_items;
				}
		);

		return response;
	
	}
}



})();
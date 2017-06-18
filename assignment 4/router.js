(function(){

'use strict';

angular.module('MenuApp')
.config(RoutesConfig)
.controller('itemController',itemController)
.controller('categoriesController',categoriesController);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state('home',{
				url:'/',
				template:''	
			}
		)
		.state('categorie',{
				url:"/categories",
				template:'<div class="left"><categories catitems="catList.items"></categories></div><div class="right"><ui-view></ui-view><div>',
				controller: 'categoriesController as catList',
				
				resolve:{
					categories:['MenuSearchService',
						function (MenuSearchService){
							console.log("here");
							return MenuSearchService.getAllCategories();
					 }]
			}}
		 )
		.state('categorie.itemi',{
				url:"/items/{categoryShortname}",
				template:'<items items="itemslist.items"></items>',
				controller: 'itemController as itemslist',
				
				resolve:{
					items:['$stateParams','MenuSearchService',
						function ($stateParams,MenuSearchService){
							console.log("here1");
							return MenuSearchService.getItemforCategory($stateParams.categoryShortname);
					}]
			}}
		 );
}

itemController.$inject=['items'];
function itemController(items){
	var itemsInfo=this;
	console.log(items);
	itemsInfo.items=items;
}

categoriesController.$inject=['categories'];
function categoriesController(categories){
	console.log(categories);
	var categoriess=this;
	categoriess.items=categories;
}


	


})();
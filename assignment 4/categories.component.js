(function(){

'use strict';

angular.module('data')

.component('categories',{
	template:'<ul><li ng-repeat="item in $ctrl.catitems" >'+
				'<a ui-sref="categorie.itemi({categoryShortname: item.short_name})">{{ item.short_name }} of {{ item.name }}</a></li></ul>',
	bindings:{
		catitems:'<'
	}
});	

})();
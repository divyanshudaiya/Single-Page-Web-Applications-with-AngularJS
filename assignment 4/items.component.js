(function(){
	
'use strict';

angular.module('data')
.component('items',{
	template:'<ul><li ng-repeat="itemt in $ctrl.items">'+
			'{{ itemt.short_name }}  {{ itemt.name }}</br><p style="font-size:0.8em; color:yellow;">{{itemt.description}}</p></li></ul>',
	bindings:{
		items:'<'
	}
});

})();


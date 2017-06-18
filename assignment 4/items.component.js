(function(){
	
'use strict';

angular.module('data')
.component('items',{
	template:'<ul><li ng-repeat="itemt in $ctrl.items">'+
			'{{ itemt.short_name }} of {{ itemt.name }}</li></ul>',
	bindings:{
		items:'<'
	}
});

})();


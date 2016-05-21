'use strict';
/**
 * controller for tasks
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('taskCtrl', ["$rootScope", "$scope", "$filter", "$auth", "ngTableParams", "task", function ($rootScope, $scope, $filter, $auth, ngTableParams, task) {	
	$rootScope.user = $auth.getPayload();
	var user = $rootScope.user;
	if(user.type === 'admin'){
		var tasks = task.getAllTasks().then(function(data) {
			tasks = data;
			for(var i in tasks){
				tasks[i].items = tasks[i].items.split(',');
				if(tasks[i].service === 'property'){
					tasks[i].service = 'Property Management';
				}else if(tasks[i].service === 'medical'){
					tasks[i].service = 'Medical Services';
				}else if(tasks[i].service === 'legal'){
					tasks[i].service = 'Auditing & Legal Services';
				}else if(tasks[i].service === 'document'){
					tasks[i].service = 'Document Procurement';
				}else if(tasks[i].service === 'travel'){
					tasks[i].service = 'Travel & Tourism';
				}else if(tasks[i].service === 'education'){
					tasks[i].service = 'Education & Tracking';
				}else{
					tasks[i].service = 'Misc';
				}
			}
			$scope.tableParams = new ngTableParams({
				page: 1,
				count: 10
			}, {
				total: tasks.length,
				getData: function ($defer, params) {
							var orderedData = params.sorting() ? $filter('orderBy')(tasks, params.orderBy()) : tasks;
							$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				}
			});

			$scope.editId = -1;

			$scope.setEditId = function (uuid) {
				$scope.editId = uuid;
			};
		});
	}else{
		var tasks = task.getTasks(user.email).then(function(data) {
			tasks = data;
			for(var i in tasks){
				tasks[i].items = tasks[i].items.split(',');
				if(tasks[i].service === 'property'){
					tasks[i].service = 'Property Management';
				}else if(tasks[i].service === 'medical'){
					tasks[i].service = 'Medical Services';
				}else if(tasks[i].service === 'legal'){
					tasks[i].service = 'Auditing & Legal Services';
				}else if(tasks[i].service === 'document'){
					tasks[i].service = 'Document Procurement';
				}else if(tasks[i].service === 'travel'){
					tasks[i].service = 'Travel & Tourism';
				}else if(tasks[i].service === 'education'){
					tasks[i].service = 'Education & Tracking';
				}else{
					tasks[i].service = 'Misc';
				}
			}
			$scope.tableParams = new ngTableParams({
				page: 1,
				count: 10
			}, {
				total: tasks.length,
				getData: function ($defer, params) {
							var orderedData = params.sorting() ? $filter('orderBy')(tasks, params.orderBy()) : tasks;
							$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				}
			});

			$scope.editId = -1;

			$scope.setEditId = function (uuid) {
				$scope.editId = uuid;
			};
		});
	}	
}])
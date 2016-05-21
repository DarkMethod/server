'use strict';
/** 
  * Factory for task management.
*/
app.factory('task',['$http', function($http){
	var task = {};
	
	task.getTasks = function(id){
		return $http.get('/quote/'+id).then(function(res) {
			console.log(res);
			return res.data.json;
		}, function(error){
			console.log(error);
		});
	};
	task.getAllTasks = function(){
		return $http.get('/quote').then(function(res) {
			console.log(res);
			return res.data.json;
		}, function(error){
			console.log(error);
		});
	};

	return task;
}]);
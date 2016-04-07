'use strict';
/** 
  * controller for user authentication.
*/
app.controller('authCtrl', [
	'$scope',
	'$state',
	'auth',
	function($scope, $state, auth){
		$scope.signUp = function(){
			auth.signUp($scope.user).error(function(error){
			$scope.error = error;
			}).then(function(){
				$state.go('app.dashboard');
			});
		};

		$scope.logIn = function(){
			auth.logIn($scope.user).error(function(error){
			$scope.error = error;
			}).then(function(){
			$state.go('app.dashboard');
			});
		};
}])
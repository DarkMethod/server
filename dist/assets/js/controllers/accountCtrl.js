'use strict';
/** 
  * controller for user authentication.
*/
app.controller('authCtrl', [
	'$scope',
	'$state',
	'auth',
	function($scope, $state, auth){
	
		$scope.signOut = function(){
			auth.signOut($scope.user).error(function(error){
			$scope.error = error;
			}).then(function(){
				$state.go('app.dashboard');
			});
		};

		$scope.signIn = function(){
			console.log('Hey')
			auth.signIn($scope.user).error(function(error){
			$scope.error = error;
			}).then(function(){
			$state.go('app.dashboard');
			});
		};
}])
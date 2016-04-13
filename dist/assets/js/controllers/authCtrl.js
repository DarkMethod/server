'use strict';
/** 
  * controller for user authentication.
*/
app.controller('authCtrl', [
	'$scope',
	'$state',
	'$stateParams',
	'$auth',
	'$http',
	'SweetAlert',
	function($scope, $state, $stateParams, $auth, $http, SweetAlert){
		$scope.message = '';
		
		if($stateParams.status === 'expired'){
			$scope.message = "Your email verification link has expired. Please register again.";
		}
		
		if($stateParams.status === 'invalid'){
			$scope.message = "Your password reset link has expired.";
		}
		
		if($stateParams.status === 'verified'){
			$scope.message = "Your account has been activated.";
		}
		
		var successAlert = function (message) {
			SweetAlert.swal({
				title: message.title,
				text: message.text,
				type: "success",
				confirmButtonColor: "#007AFF",
				},
				function(isConfirm){
					$state.go(message._next);	
				}
			);
		};
		
		var errorAlert = function (message) {
			SweetAlert.swal({
				title: message.title,
				text: message.text,
				type: "warning",
				confirmButtonColor: "#DD6B55",
				}
			);
		};
		
		$scope.signUp = function(){
			$auth.signup($scope.user).then(function(response) {
				var message = {};
				message.title = 'Congrats!';
				message.text = 'An account activation link has been mailed to your email address.';
				message._next = 'login.login';
				successAlert(message);
			})
			.catch(function(response) {
				var message = {};
				if(response.status === 409){
					message.title = 'Error!';
					message.text = 'A user with this email already exists.';
					errorAlert(message);
				}else{
					message.title = 'Oops!';
					message.text = 'We seem to be having some trouble. Please try again later.';
					errorAlert(message);	
				}
			});
		};

		$scope.signIn = function(){
			$auth.login($scope.user) .then(function(response) {
				$state.go('app.dashboard');
			})
			.catch(function(response) {
				var message = {};
				if(response.status === 401){
					message.title = 'Invalid!';
					message.text = 'Invalid email and/or password';
					errorAlert(message);
				}else{
					message.title = 'Oops!';
					message.text = 'We seem to be having some trouble. Please try again later.';
					errorAlert(message);	
				}
			});
		};
		
		$scope.forgotPassword = function(){
			$http.post('/auth/forgot', $scope.user).then(function(response) {
				var message = {};
				message.title = 'Info';
				message.text = 'A password reset link has been mailed to your email address.';
				message._next = 'login.login';
				successAlert(message);
			}, function(response) {
				var message = {};
				if(response.status === 404){
					message.title = 'Error!';
					message.text = 'No account with this email address exists.';
					errorAlert(message);
				}else{
					message.title = 'Oops!';
					message.text = 'We seem to be having some trouble. Please try again later.';
					errorAlert(message);	
				}
			});
		};
		
		$scope.resetPassword = function(){
			var token = $stateParams.token;
			$http.post('/auth/reset/'+token, $scope.user).then(function(response) {
				$auth.setToken(response.data.token);
				var message = {};
				message.title = 'Info';
				message.text = 'Password successfully updated.';
				message._next = 'app.dashboard';
				successAlert(message);
			}, function(response) {
				var message = {};
				if(response.status === 404){
					message.title = 'Error!';
					message.text = 'No account with this email address exists.';
					errorAlert(message);
				}else{
					message.title = 'Oops!';
					message.text = 'We seem to be having some trouble. Please try again later.';
					errorAlert(message);	
				}
			});
		};
		
		$scope.authenticate = function(provider){
			$auth.authenticate(provider).then(function(response) {
				console.log('Authenticated');
				console.log(response.data);
				$state.go('app.dashboard');
			})
			.catch(function(response) {
				console.log(response.data);
				// Something went wrong.
			});
		};
		
		$scope.signOut = function(){
			$auth.logout();
			$state.go('login.login');
		};	
}])
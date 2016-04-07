'use strict';
/** 
  * Factory for user authentication.
*/
app.factory('auth',['$http','$window','$state',function($http,$window,$state){
	var auth = {};
	auth.saveToken = function (token){
		$window.localStorage['token'] = token;
	};
	auth.getToken = function()
	{
		return $window.localStorage['token'];
	};
	
	auth.isLoggedIn = function(){
		var token = auth.getToken();
		if(token){
			var payload = JSON.parse($window.atob(token.split('.')[1]));
			return payload.exp > Date.now() / 1000;
		}
		else{
			return false;
		}
	};
	auth.currentUser = function(){
		if(auth.isLoggedIn()){
			var token = auth.getToken();
			var payload = JSON.parse($window.atob(token.split('.')[1]));
			return payload._id;
		}
	};
	
	auth.signUp = function(user){
		return $http.post('/signup', user).success(function(data){
			auth.saveToken(data.token);
		});
	};
	
	auth.logIn = function(user){
		return $http.post('/login', user).success(function(data){
		auth.saveToken(data.token);
		});
	};
	
	auth.logOut = function(){
		$window.localStorage.removeItem('hoot-token');
		$state.go('login');
	};
	
	return auth;
 }]);

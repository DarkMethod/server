'use strict';
/** 
  * controller for User Profile Example
*/
app.controller('UserCtrl', ["$scope", "flowFactory", '$auth', '$http', 'SweetAlert', function ($scope, flowFactory, $auth, $http, SweetAlert) {
	var userId = $auth.getPayload().uuid;
	
	var getSocialAccounts = function(){
		$http.get('/alias/'+userId).then(function(response) {
			$scope.aliases = response.data.json;
		}).catch(function(response) {
			console.log(response);
		});
	};
	
	var successAlert = function (message) {
		SweetAlert.swal({
			title: message.title,
			text: message.text,
			type: "success",
			confirmButtonColor: "#007AFF",
		},
		function(isConfirm){
			getSocialAccounts();	
		});
	};
		
	var errorAlert = function (message) {
		SweetAlert.swal({
			title: message.title,
			text: message.text,
			type: "warning",
			confirmButtonColor: "#DD6B55",
		});
	};
	
	$scope.getSocialAccounts = getSocialAccounts;
	$scope.authenticate = function(provider){
		$auth.authenticate(provider).then(function(response) {
			$auth.setToken(response.data.token);
			var _provider = '';
			if(provider==='google')
				_provider = 'Google';
			else
				_provider = 'Facebook';
			var message = {};	
			message.title = 'Congrats!';
			message.text = 'Your '+_provider+' account has been successfully linked to your Yedupudi account.';
			successAlert(message);			
		}).catch(function(response) {
			var message = {};
			if(response.status === 409){
				message.title = 'Existing Account!';
				message.text = 'This '+provider+' account is already connected to your Yedupudi account.';
				errorAlert(message);
			}else{
				message.title = 'Oops!';
				message.text = 'We seem to be having some trouble. Please try again later.';
				errorAlert(message);	
			}
		});	
	};
	
	$scope.removeImage = function () {
        $scope.noImage = true;
    };
    $scope.obj = new Flow();

    $scope.userInfo = {
        firstName: 'Peter',
        lastName: 'Clark',
        url: 'www.example.com',
        email: 'peter@example.com',
        phone: '(641)-734-4763',
        gender: 'male',
        zipCode: '12345',
        city: 'London (UK)',
        avatar: 'assets/images/avatar-1-xl.jpg',
        twitter: '',
        github: '',
        facebook: '',
        linkedin: '',
        google: '',
        skype: 'peterclark82'
    };
    if ($scope.userInfo.avatar == '') {
        $scope.noImage = true;
    }
}]);
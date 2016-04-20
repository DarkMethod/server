'use strict';
/** 
  * Factory for Sign Up Modal.
*/
app.factory('authModal',['ngDialog', '$auth', function( ngDialog, $auth){
	var authModal = {};
	authModal.signUp = function($scope){
			ngDialog.openConfirm({
			template: '/assets/views/signUpModal.html',
			className: 'ngdialog-theme-default',
			scope: $scope //Pass the scope object if you need to access in the template
		}).then(
			function(value) {
				//You need to implement the saveForm() method which should return a promise object
				$scope.saveForm().then(
					function(success) {
						ngDialog.open({template: '<div class="ngdialog-message"> \
						  Your enquiry has been sent. We will get back to you shortly.</div>',
							plain: 'true'
						});
					},
					function(error) {
						ngDialog.open({template: '<div class="ngdialog-message"> \
						  An error occurred while sending your enquiry. Please try again.</div>',
							plain: 'true'
						});
					}
				);
			},
			function(value) {
				//Cancel or do nothing
			}
		);
	};
	return authModal;	
}])
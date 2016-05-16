var fm = angular.module('framework', ['ngResource', 'ngRoute']);

fm.controller('mainController', function($scope, $compile) {
	$scope.changeEmail = function() {
		$scope.loginData.email = $scope.loginData.email + "A";
	}
	$scope.loadRegistrationForm = function() {
		if(!$('form[name="registrationForm"]').length) $('#register').append($compile("<div load-registration-form></div>")($scope));
	}
});

fm.directive('loadRegistrationForm', function() {
	return {
		templateUrl: 'registrationForm.html'	
	};
});

fm.directive('loadEmail', function() {
	return {
		controller: function($scope) {
			$scope.loginData.email = "HEELO";
		},
		require: '^ngModel',
		link: function($scope, ele, attr, ctrl) {
			ctrl.$formatters.push(function(modelValue) {
				return modelValue.toLowerCase();
			});
			ctrl.$parsers.unshift(function(viewValue) {
				ctrl.$setViewValue(viewValue.toUpperCase());
				ctrl.$render();
				return;
			});
		}
	}
});

fm.directive('loadLoginForm', function() {
	return {
		templateUrl: 'loginForm.html',
		controller: function($scope) {
			$scope.loginData = {email: '', password: ''};
			$scope.loginData.email = "hrlloADD";

		},
		require: 'ngModel',
		link: function($scope, ele, attr, ctrl) {
			console.log($scope.loginData);
 	
		}
	};
});


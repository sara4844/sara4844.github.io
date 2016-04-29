'use strict';
/* this file contains all configurations */
var app = angular.module('myApp', [
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/", {
        templateUrl : "./main/welcome.html",
        controller: "./main/welcomeController"
      })
      .when("/MyList", {
        templateUrl : "./Birthdee/birthdee.html",
        controller: "./Birthdee/birthdeeController.js"
      })
      .when("/Genie", {
        templateUrl : "/genie/genie.html",
        controller: "/genie/genieController.js"
      })
      .otherwise({redirectTo: '/'});
}]);
// scope accesses the view that we wish to modify
app.controller('myCtrl', ['$scope', '$location', function($scope, $location) {

  $scope.createBdayList = function() {
    //$location.url('/BirthdeeView');
  }
}]);

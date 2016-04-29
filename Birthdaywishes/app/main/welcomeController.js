/**
 * Created by Sa on 4/29/2016.
 */
var app = angular.module('myApp');
var welcomeController = function ($scope, $location) {
    //when the user clicks the button to createlist
    $scope.createBdayList = function () {
        $location.hash(MyList);
    }
}

app.controller('welcomeController', welcomeController);
//welcomeController.$inject = ['$scope'];
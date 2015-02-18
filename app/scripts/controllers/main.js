'use strict';

/**
 * @ngdoc function
 * @name ngJapan.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the ngJapan
 */
angular.module('ngJapan')
  .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.section = [
    {name: 'About'},
    {name: 'Speakers'},
    {name: 'Schedule'},
    {name: 'Tickets'},
    {name: 'Getting There'},
    {name: 'Sponsors'}
  ];
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
}]);
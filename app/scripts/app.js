'use strict';

/**
 * @ngdoc overview
 * @name AppCtrl
 * @description
 * # AppCtrl
 *
 * Main module of the application.
 */
angular
  .module('ngJapan', [
    'ngAnimate',
    'ngAria',
    'ngMaterial'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('indigo');
  });
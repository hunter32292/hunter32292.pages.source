'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.contact = {
      email: '',
      name: '',
      message: ''
    };
  });

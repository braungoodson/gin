'use strict';

angular.module('ginApp')
  .controller('ReposCtrl', function ($scope, $stateParams, ReposService) {
    $scope.gin = $stateParams.gin;
    $scope.repos = ReposService.get({
      gin: $stateParams.gin
    });
  });

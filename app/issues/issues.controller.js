'use strict';

angular.module('ginApp')
  .controller('IssuesCtrl', function ($scope, $stateParams, IssuesService) {
    $scope.gin = $stateParams.gin;
    $scope.repo = $stateParams.repo;
    $scope.issues = IssuesService.get({
      gin: $scope.gin,
      repo: $scope.repo
    });
  });

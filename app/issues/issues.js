'use strict';

angular.module('ginApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('issues', {
        url: '/:gin/:repo',
        templateUrl: 'app/issues/issues.html',
        controller: 'IssuesCtrl'
      });
  });

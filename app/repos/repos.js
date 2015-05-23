'use strict';

angular.module('ginApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('repos', {
        url: '/:gin',
        templateUrl: 'app/repos/repos.html',
        controller: 'ReposCtrl'
      });
  });

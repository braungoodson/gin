'use strict';

angular.module('ginApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'About',
      'link': '/about'
    },{
      'title': 'Fork',
      'link': 'https://github.com/braungoodson/gin/fork'
    },{
      'title': 'Contact',
      'link': '/contact'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

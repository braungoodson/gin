'use strict';

angular.module('ginApp')
  .service('ReposService', function ($resource, $stateParams) {
    return $resource('https://api.github.com/users/:gin/repos', {
      gin: '@gin'
    }, {
      get: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data, headers) {
          return JSON.parse(data);
        }
      }
    });
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

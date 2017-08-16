'use strict';

angular.module('app')
    .factory('appService', function ($http) {
        var serviceAPIs = {};
        
        var baseUrl = '';

        var getFilesApiUrl = baseUrl + '/files/';
        serviceAPIs.getFilesApi = function(userId) {
            return $http({method: 'GET', url: getFilesApiUrl + userId});
        };

        var userApiUrl = baseUrl + '/me';
        serviceAPIs.postUserInfo = function(userInfo) {
            return $http({method: 'POST', url: userApiUrl, data: userInfo, headers: {'Content-Type': 'application/json'}});
        };

        var hashFileApiUrl = baseUrl + '/hash/';
        serviceAPIs.postFileForHash = function(userId, file) {
            var payload = new FormData();
            payload.append('file', file);
            return $http.post(hashFileApiUrl + userId, payload, {transformRequest: angular.identity, headers: {'Content-Type': undefined}});
        };
        
        return serviceAPIs;
    });

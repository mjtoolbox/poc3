'use strict';

angular.module('poc3')

.constant('baseURL', "http://localhost:9988/")

.service('outageFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    this.getOutages = function () {

        return $resource(baseURL + "outages/:id", null, {});

    };

}])


;

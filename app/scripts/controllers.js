'use strict';

angular.module('poc3')

.controller('OutageController', ['$scope', 'outageFactory', function ($scope, outageFactory) {

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;
    $scope.showMenu = false;
    $scope.message = "Loading ...";


    // Handle latency
    $scope.outages = outageFactory.getOutages().query(
        function (response) {
            $scope.outages = response;
            $scope.showMenu = true;
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
        }
    );


    $scope.select = function (setTab) {
        $scope.tab = setTab;

        if (setTab === 1) {
            $scope.filtText = "current";
        } else if (setTab === 2) {
            $scope.filtText = "restored";
        } else if (setTab === 3) {
            $scope.filtText = "planned";
        } else {
            $scope.filtText = "";
        }
    };

    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };

    $scope.toggleDetails = function () {
        $scope.showDetails = !$scope.showDetails;
    };
            }])


;

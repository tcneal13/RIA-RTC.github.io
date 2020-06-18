'use strict';
/* Photo of the Day Controller */
nasaApp.controller('listController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        var page = 0,
            $url = $apiEndpoint + $apiKey,
            $date = new Date();
        $scope.photosList = [];
        $scope.photo;
       
        //$url += 'photo/popular';
        $scope.pageHeading = 'Popular Photos';
        
        $scope.getPhotosList = function () {
            var $responsePromise;
            // Get data from API
            $responsePromise = $http({
                method: 'GET',
                url: $url
                //params: {
                //    api_key: $apiKey
                    
                //}
            });
            // Process requests
            $responsePromise.then(
                function successCallback(response) {
                    // Pagination Setup
                    page = response.data;
                    console.log(page);
                    // Append new photos to the list
                    $scope.photo = page;
                    $scope.photosList.push(page);
                    console.log($scope.photosList.length);
                },
                function errorCallback() {
                }
            );
        };
        // Calling the function
        $scope.getPhotosList();
    }
]);


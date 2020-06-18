'use strict';


var $apiEndpoint = 'https://api.nasa.gov/planetary/apod?',
    $apiKey = 'api_key=NEy9JOXcTCMDA7dMb1LaoLuyTzI2qaVyCzv8pidx',
    $imagepath = 'https://apod.nasa.gov/apod/image/2006/Tadpoles-of-IC-410-Trevor-Jones.jpg',
    $error_noData = 'Oops! No connection to the database.';

// Angular App
var nasaApp = angular.module('nasaApp', ['ngRoute', 'ngAnimate']);

// Configuration and routing
nasaApp
    .config(['$httpProvider',
        function ($httpProvider) {

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

        }
    ])
    .config(['$routeProvider',
        function ($routeProvider) {

            $routeProvider
                .when('/:page', {
                    controller: 'listController',
                    templateUrl: 'app/views/main.html'
                })
                .when('/photos/:photoId', {
                    controller: 'singleController',
                    templateUrl: 'app/views/single.html'
                });

            $routeProvider.otherwise({ 'redirectTo': '/photooftheday' });
        }
    ]);


// jQuery
(function ($) {
    'use strict';

    // Change navbar opacity on scroll
    $(window).scroll(function (event) {

        var $nav = $('#main-navbar');
        if ($(document).scrollTop() > 50) {
            $nav
                .addClass('scrolled');
        } else {
            $nav
                .removeClass('scrolled');
        }

    });

    // more

})(jQuery);

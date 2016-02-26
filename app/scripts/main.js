/**
 * Created by krisztinavajda on 24/02/16.
 */

'use strict';

var app = angular.module('PentiaExercise', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to 'home'
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state ('home', {
        url:          '/',
        templateUrl:  'views/home.html',
        controller:   'MainCtrl'
      })
    ;

  });

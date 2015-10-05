'use strict';

angular
  .module('compound.splash')
  .config(splashRoutes);

function splashRoutes($stateProvider) {
  $stateProvider
    .state('splash', {
      url: '/',
      templateUrl: 'components/splash/splash.html',
      controller: 'SplashController as vm',
    });
}

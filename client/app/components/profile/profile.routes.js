'use strict';

angular
  .module('compound.profile')
  .config(ProfileRoute);

function ProfileRoute($stateProvider) {
  $stateProvider
    .state('log.profile', {
      url: '/profile',
      views: {
        log: {
          templateUrl: 'components/profile/profile.html',
          controller: 'ProfileController as vm',
        },
      },
    });
}

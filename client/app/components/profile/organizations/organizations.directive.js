'use strict';

angular
    .module('compound.profile')
    .directive('organizations', organizations);

function organizations() {
    var directive = {
        restrict: 'E',
        templateUrl: 'components/profile/organizations/organizations.html',
        controller: 'OrganizationsController',
        controllerAs: 'vm',
        scope: {},
    };

    return directive;
}

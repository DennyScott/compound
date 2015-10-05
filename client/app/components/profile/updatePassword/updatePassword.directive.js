'use strict';

angular
    .module('compound.profile')
    .directive('updatePassword', updatePassword);

function updatePassword() {
    var directive = {
        restrict: 'E',
        templateUrl: 'components/profile/updatePassword/updatePassword.html',
        controller: 'UpdatePasswordController as vm',
    };

    return directive;
}

'use strict';

angular
    .module('compound.log')
    .controller('LogController', LogController);

function LogController(authentication) {
    var vm = this;

    angular.extend(vm, {
      logout: authentication.logout,
    });
}

'use strict';

angular
    .module('compound.profile')
    .controller('OrganizationsController', OrganizationsController);

function OrganizationsController() {
    var vm = this;

    angular.extend(vm, {
      organizations: getOrg(),
    });

    function getOrg() {
      return [
        {
          name: 'Pan Am',
        },

        {
          name: 'Space X',
        },

        {
          name: 'NASA',
        },
      ]
    }
}

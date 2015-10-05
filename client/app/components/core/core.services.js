'use strict';

angular
    .module('compound.core')

    /**
     * Add Lodash as injectable object.
     *
     * @param  {object} $window Gain access to Angular Window Object
     * @return {Object}         Return lodash.
     */
    .factory('_', function($window) {
      return $window._;
    });

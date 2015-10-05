'use strict';

angular
  .module('compound.core')
  .run(checkForToken);

function checkForToken($auth, users) {
    if($auth.isAuthenticated()) {
      users.setUser($auth.getPayload().id);
    }
}

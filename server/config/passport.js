// config/passport.js

var _ = require('lodash');
var _super = require('sails-permissions/config/passport');

_.merge(exports, _super);
_.merge(exports, {

  atlassian: {
    name: 'Atlassian',
    protocol: 'oauth',
    strategy: require('passport-atlassian-oauth').Strategy,
    options: {
      consumerKey: 'atlassian-oauth-sample',
      consumerSecret: 'denny'
    }
  },

  // Extend with custom logic here by adding additional fields, methods, etc.

});

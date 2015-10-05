// config/permissions.js

var _ = require('lodash');
var _super = require('sails-permissions/config/permissions');

_.merge(exports, _super);
_.merge(exports, {

  // environment: process.env.NODE_ENV || 'development'
  name: 'permissions',

  adminEmail: process.env.ADMIN_EMAIL || 'admin@example.com',
  adminUsername: process.env.ADMIN_USERNAME || 'admin',
  adminPassword: process.env.ADMIN_PASSWORD || 'admin1234',

  afterEvents: [
    'hook:auth:initialized'
  ]


  // Extend with custom logic here by adding additional fields, methods, etc.

});

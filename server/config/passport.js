// config/passport.js
var passport = require('passport');
var _ = require('lodash');
var _super = require('sails-permissions/config/passport');

_.merge(exports, _super);
_.merge(exports, {
  // Extend with custom logic here by adding additional fields, methods, etc.

});

// Use the AtlassianOauthStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Atlassian
//   profile), and invoke a callback with a user object.
passport.use(new AtlassianOAuthStrategy({
        applicationURL:"https://compound.atlassian.net",
        callbackURL:"http://104.236.112.213/auth/atlassian-oauth/callback",
        consumerKey:"atlassian-oauth-sample",
        consumerSecret:"denny"
    },
    function (token, tokenSecret, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            // To keep the example simple, the user's Atlassian profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the Atlassian account with a user record in your database,
            // and return that user instead.
            return done(null, profile);
        });
    }
));
sails.hooks.http.app.get a

// GET /auth/atlassian-oauth
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Atlassian authentication will involve
//   redirecting the user to the atlassian Oauth authorisation page.  After authorization, the Atlassian app will
//   redirect the user back to this application at /auth/atlassian-oauth
sails.hooks.http.app.get('/auth/atlassian-oauth',
    passport.authenticate('atlassian-oauth'),
    function (req, res) {
        // The request will be redirected to the Atlassian app for authentication, so this
        // function will not be called.
    });

// GET /auth/atlassian-oauth/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
sails.hooks.http.app.get('/auth/atlassian-oauth/callback',
    passport.authenticate('atlassian-oauth', { failureRedirect:'/login' }),
    function (req, res) {
        res.redirect('/');
    });


const passport = require('passport');
const User     = require('../models/user');
const config   = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//Create local Strategy
const localLogin = new LocalStrategy({usernameField: 'email'}, function(email, password){

});

//Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//Create JwtStrategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    // See if the user ID in the payload exists in our database
    User.findById(payload.sub, function(err, user){
        if(err) {return done(err, false); }

        if(user){
            done(null, user);
        } else {
            done(null,false);
        }
    });
});

//Tell passport to use this strategy
passport.use(jwtLogin);

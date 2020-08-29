const passport = require('passport');
const User = require('../../models/User');

module.exports = () => {
    passport.serializeUser((user, done) => {
        console.log('serialize', user, '++++++++');
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        console.log('deserialize');
        User.findByUsername(username)
        .then(user => done(null, user))
        .catch(err => done(err, null));
    });
};
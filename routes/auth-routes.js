const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');

const usersController = require('../controllers/users-controller')

authRouter.post('/register', usersController.create);
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/api/auth/verify',
    failureRedirect: '/api/auth/verify',
    failureFlash: true,
    })
);

authRouter.get('/verify', (req, res) => {
    if (req.user) return res.status(200).json({
        message: 'ok',
        auth: true,
        data: { user: req.user, }
    });
    else return res.status(403).json({
        message: 'Login failed',
        auth: false,
        data: { user: null, }
    });
});

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.json({
        message: 'Logged out',
        auth: false,
        data: { user: null, }
    });
});
module.exports = authRouter;
const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.index = (req, res, next) => {
    User.findById(req.params.id)
    .then(() => {
        res.json({
            message: 'ok',
            data: {
                userMovies: res.locals.userMovies,
                userSeries: res.locals.userSeries,
                userEpisodes: res.locals.userEpisodes,
                // user: WE MAY WANT TO BRING IN USER DATA????
            }
        })
    })
    .catch(next)
}

usersController.create = (req, res, next) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        genres: req.body.genres,
        password_digest: hash,
    })
    .then(user => {
        req.login(user, (err) => {
            if (err) return next(err);
            res.status(201).json({
                message: 'User successfully created!',
                auth: true,
                data: { user },
            });
        });
    })
    .catch(next)
};

usersController.update = (req, res, next) => {
    User.findById(req.params.id)
    .then(()=> res.redirect('/api/user'))
    .catch(next)
}

userController.delete = (req, res, next) => {
    req.user.delete()
    .then(() => {
        req.session.destroy();
        // we may need to redirect inside of here to a new route
    })
    .catch(next)
}
module.exports = usersController;
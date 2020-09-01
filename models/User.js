const db = require('../db/config');

class User {
    constructor(user) {
        this.id = user.id || null;
        this.username = user.username;
        this.name = user.name;
        this.email = user.email;
        this.age = user.age;
        this.genres = user.genres;
        this.password_digest = user.password_digest;
    }

    static findByUsername(username) {
        return db
        .oneOrNone('SELECT * FROM users WHERE username = $1', username)
        .then(user => {
            if (user) return new this(user);
            throw new Error('No User Found');
        })
        .catch(err => console.log(err));
    }

    static getById(id) {
        return db
        .oneOrNone('SELECT * FROM users WHERE id = $1', id)
        .then(user => {
            if (user) return new this(user);
            throw new Error('No User Found');
        })
        .catch(err => console.log(err));
    }

    save() {
        console.log('THIS?', this)
        return db
        .one(
            `INSERT INTO users
            (username, name, email, age, genres, password_digest)
            VALUES 
            ($/username/, $/name/, $/email/, $/age/, $/genres/, $/password_digest/)
            RETURNING *`,
            this
        )
        .then(savedUser => {
            console.log('saved??', savedUser) // not reaching this point
            Object.assign(this, savedUser)
        })
        .catch(err => console.log('ERROR MESSAGE', err));
    }

    update(changes) {
        Object.assign(this, changes);
        return db
        .oneOrNone(
            `UPDATE users SET
            username = $/username/,
            name = $/name/,
            email = $/email/,
            age = $/age/,
            genres = $/genres/,
            password_digest = $/password_digest/
            WHERE id = $/id/
            RETURNING *`,
            this
        )
        .then(updatedUser => Object.assign(this, updatedUser))
        .catch(err => console.log(err));
    }

    delete() {
        return db.oneOrNone('DELETE FROM users WHERE id = $1', this.id);
    }
};

module.exports = User;
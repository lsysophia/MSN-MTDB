const db = require('../db/config')

class User_shows {
    constructor(user_shows) {
        this.id = user_shows.id || null;
        this.title = user_shows.title;
        this.imdb_id = user_shows.imdb_id;
        this.ratings = user_shows.ratings;
        this.has_watched = user_shows.has_watched;
        this.watched_time = user_shows.watched_time;
        this.user_id = user_shows.user_id;
    }

    static getAll() {
        return db
            .manyOrNone('SELECT * FROM user_shows ORDER BY title ASC')
            .then(shows => shows.map(show => new this(show)))
            .catch(err => console.log(err))
    }

    static getAllForUser(user_id) {
        return db
            .manyOrNone(
                `SELECT * FROM users
            JOIN user_shows ON users.id = user_shows.user_id
            WHERE users.id = $1`, user_id
            )
            .then(shows => shows.map(show => new this(show)))
            .catch(err => console.log(err))
    }

    static getById(id) {
        return db
            .oneOrNone('SELECT * FROM user_shows WHERE id = $1', id)
            .then(show => new this(show))
            .catch(err => console.log(err))
    }

    static getOneForUser(users_id, userShow_id) {
        return db
            .manyOrNone('SELECT * FROM user_shows WHERE user_id = $1 AND imdb_id=$2', [users_id, userShow_id])
            .then(show => new this(show[0]))
            .catch(err => console.log(err))
    }

    save() {
        return db
            .one(
                `INSERT INTO user_shows
            (title, imdb_id, ratings, has_watched, watched_time, user_id)
            VALUES
            ($/title/, $/imdb_id/, $/ratings/, $/has_watched/, $/watched_time/, $/user_id/)
            RETURNING *            
            `,
                this
            )
            .then(savedShow => Object.assign(this, savedShow))
            .catch(err => console.log(err))
    }

    update(changes) {
        Object.assign(this, changes)
        return db
        .oneOrNone(
            `UPDATE user_shows SET
            title = $/title/,
            imdb_id = $/imdb_id/,
            ratings = $/ratings/,
            has_watched = $/has_watched/,
            user_id = $/user_id/
            WHERE id = $/id/
            RETURNING *`,
            this
        )
        .then(updatedShow => Object.assign(this, updatedShow))
        .catch(err => console.log(err))
    }

    delete() {
        return db.oneOrNone('DELETE FROM user_shows WHERE id = $1', this.id)
    }

}

module.exports = User_shows;
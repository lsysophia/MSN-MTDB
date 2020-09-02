const db = require('../db/config')

class User_movies {
    constructor(user_movies) {
        this.id = user_movies.id || null;
        this.title = user_movies.title;
        this.imdb_id = user_movies.imdb_id;
        this.ratings = user_movies.ratings;
        this.has_watched = user_movies.has_watched;
        this.watched_time = user_movies.watched_time;
        this.user_id = user_movies.user_id
    }

    static getAll() {
        return db
            .manyOrNone('SELECT * FROM user_movies ORDER BY title ASC')
            .then(movies => movies.map(movie => new this(movie)))
            .catch(err => console.log(err))
    }

    static getAllForUser(user_id) {
        return db.manyOrNone(
            `SELECT * FROM users
            JOIN user_movies ON users.id = user_movies.user_id
            WHERE users.id = $1`, user_id
        )
            .then(movies => movies.map(movie => new this(movie)))
            .catch(err => console.log(err))
    }

    static getById(id) {
        return db
            .oneOrNone('SELECT * FROM user_movies WHERE id = $1', id)
            .then(movie => new this(movie))
            .catch(err => console.log(err))
    }

    static getOneForUser(user_id, userMovie_id) {
        return db
            .manyOrNone('SELECT * FROM user_movies WHERE user_id = $1 AND id = $2', [user_id, userMovie_id])
            .then(movie => new this(movie[0]))
            .catch(err => console.log(err))
    }

    save() {
        return db
            .one(
                `INSERT INTO user_movies
            (title, imdb_id, ratings, has_watched, watched_time, user_id)
            VALUES
            ($/title/, $/imdb_id/, $/ratings/, $/has_watched/, $/watched_time/, $/user_id/)
            RETURNING *`,
                this
            )
            .then(savedMovie => Object.assign(this, savedMovie))
            .catch(err => console.log(err))
    }

    update(changes) {
        Object.assign(this, changes)
        return db
            .one(
                `
            UPDATE user_movies SET
            title = $/title/, 
            imdb_id = $/imdb_id/,
            ratings = $/ratings/,
            has_watched = $/has_watched/,
            watched_time = $/watched_time/,
            user_id = $/user_id/
            RETURNING *`,
                this
            )
            .then((movie) => Object.assign(this, movie));
    }

    delete() {
        return db.oneOrNone('DELETE FROM user_movies WHERE id = $1', this.id)
    }
}
module.exports = User_movies;
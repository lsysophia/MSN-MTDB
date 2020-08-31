const db = require('../db/config')

class User_series {
    constructor(user_series) {
        this.id = user_series.id || null;
        this.title = user_series.title;
        this.imdb_id = user_series.imdb_id;
        this.ratings = user_series.ratings;
        this.has_watched = user_series.has_watched;
        this.watched_time = user_series.watched_time;
        this.user_id = user_series.user_id;
    }

}

module.exports = User_series;
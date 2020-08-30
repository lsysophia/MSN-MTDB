CREATE TABLE IF NOT EXISTS user_series (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    imbd_id VARCHAR(255) NOT NULL,
    ratings INTEGER,
    has_watched BOOLEAN NOT NULL DEFAULT false,
    watched_time TIMESTAMP,
    series_id INTEGER NOT NULL REFERENCES user_series(imdb_id),
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
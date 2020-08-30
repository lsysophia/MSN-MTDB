CREATE TABLE IF NOT EXISTS user_movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    imbd_id VARCHAR(255) NOT NULL,
    ratings INTEGER,
    has_watched BOOLEAN,
    watched_time TIMESTAMP,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
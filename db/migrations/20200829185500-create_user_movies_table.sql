CREATE TABLE IF NOT EXISTS user_movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    imdb_id VARCHAR(255) NOT NULL,
    ratings INTEGER,
    has_watched BOOLEAN DEFAULT false,
    watched_time VARCHAR(255),
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
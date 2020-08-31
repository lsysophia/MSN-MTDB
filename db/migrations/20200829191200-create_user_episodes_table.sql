CREATE TABLE IF NOT EXISTS user_episodes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    imdb_id VARCHAR(255) NOT NULL,
    ratings INTEGER,
    has_watched BOOLEAN NOT NULL DEFAULT false,
    watched_time TIMESTAMP,
    show_id INTEGER NOT NULL REFERENCES user_shows(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
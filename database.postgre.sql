CREATE TABLE users {
    id SERIAL PRIMARY KEY,
    user VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150),
    token TEXT,
    status BOOLEAN DEFAULT TRUE
}

CREATE TABLE perms {
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    nivel INTEGER(2) NOT NULL,
    status BOOLEAN DEFAULT TRUE,
}

CREATE TABLE feeds {
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    icon TEXT,
    timeout_post INTEGER(3),
    min_perm_from_post INTEGER REFERENCES perms(nivel),
    max_char INTEGER(2),
    allow_mention BOOLEAN DEFAULT TRUE,
    allow_temporary_post BOOLEAN DEFAULT TRUE,
}


CREATE TABLE user_perm_feed {
    id SERIAL PRIMARY KEY,
    id_user INTEGER REFERENCES users(id),
    id_perm INTEGER REFERENCES perms(id),
    id_feed INTEGER REFERENCES feeds(id),
}

CREATE TABLE data_type {
    id SERIAL PRIMARY KEY,
    type VARCHAR(20)
}

CREATE TABLE post {
    id SERIAL PRIMARY KEY,
    id_feed INTEGER REFERENCES feeds(id)
    id_user_from INTEGER REFERENCES users(id),
    date_envite DATE NOT NULL,
    data TEXT,
    timestamp INTEGER(3),
    id_data_type INTEGER REFERENCES data_type(id),
    status BOOLEAN DEFAULT TRUE,
}
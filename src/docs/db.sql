CREATE DATABASE apiWeb;
USE apiWeb;

DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(200) UNIQUE NOT NULL,
            password VARCHAR(200) NOT NULL,
            biografia VARCHAR(1500),
            avatar VARCHAR(200),
            registrationCode VARCHAR(100)
        );

CREATE TABLE IF NOT EXISTS posts (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            userId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id),
            title VARCHAR(100) NOT NULL,
            url VARCHAR(500) NOT NULL,
            description VARCHAR(1000),
            image VARCHAR(200),
            date_creation DATETIME
        );

CREATE TABLE IF NOT EXISTS likes (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            userId INT UNSIGNED NOT NULL,
            postId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id),
            FOREIGN KEY (postId) REFERENCES posts(id)
        );
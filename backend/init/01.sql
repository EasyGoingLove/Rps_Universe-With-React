CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE arcadepoints (
    id INT(255),
    wins VARCHAR(255),
    losses VARCHAR(255)
);
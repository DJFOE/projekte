CREATE DATABASE IF NOT EXISTS demoDB CHARACTER SET utf8;

CREATE USER IF NOT EXISTS 'guest'@'localhost' IDENTIFIED BY 'Pa$$w0rd';

GRANT ALL PRIVILEGES ON demodb.* TO 'guest'@'localhost';

FLUSH PRIVILEGES;
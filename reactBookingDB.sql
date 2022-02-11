CREATE DATABASE IF NOT EXISTS reactBooking;

USE reactBooking;

DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS employees;

CREATE TABLE users(
	id			INT PRIMARY KEY NOT NULL auto_increment,
    username	varchar(10) NOT NULL UNIQUE,
    firstName	varchar(50) NOT NULL,
    lastName	varchar(50)	NOT NULL,
    email		varchar(150) NOT NULL UNIQUE,
    password	varchar(100) NOT NULL
);

CREATE TABLE employees(
	id			INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName	varchar(50) NOT NULL,
    lastName	varchar(50) NOT NULL
);

INSERT INTO employees(firstName, lastName)
VALUES
('Isabel', 'Laursen'),
('Clara', 'Sivert'),
('Simon', 'Freed');

CREATE TABLE IF NOT EXISTS services(
	id			INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    service		varchar(100) NOT NULL,
    price		INT NOT NULL,
    description	varchar(200),
    imgURL		varchar(100) NOT NULL,
    performerId	INT NOT NULL,
	FOREIGN KEY(performerId) REFERENCES employees(id)
);

INSERT INTO services(service, price, description, imgURL, performerId)
VALUES
('Hairdresser', 2900, 'Cutting and coloring','./hairdresser.jpeg', 1),
('Hairdresser', 450, 'Cutting','./clip.jpeg', 2),
('Hairdresser', 1500, 'Blow out and styling','./styling.jpeg', 2),
('Beauty', 3100, 'Facial treatment','./facial.jpeg', 1),
('Beauty', 950, 'Mani and pedi','./manipedi.jpeg', 3),
('Beauty', 6500, 'Dermapen','./skincare.jpeg', 1),
('Beauty', 550, 'Manicure','./manicure.jpeg', 3);

CREATE TABLE IF NOT EXISTS bookings(
	id			INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    serviceId	INT NOT NULL,
    date		DATE NOT NULL,
    time		varchar(10) NOT NULL,
    customerId	INT,
    FOREIGN KEY(serviceId) REFERENCES services(id),
    FOREIGN KEY(customerId) REFERENCES users(id)
);

INSERT INTO bookings(serviceId, date, time)
VALUES
(1,'2022-02-11','13.30'),
(2,'2022-02-09','11.00'),
(2,'2022-02-09','12.45'),
(3,'2022-02-06','17.00'),
(3,'2022-02-09','11.00'),
(6,'2022-02-11','13.30'),
(6,'2022-02-20','10.00'),
(4,'2022-02-15','13.30'),
(7,'2022-02-19','09.45');
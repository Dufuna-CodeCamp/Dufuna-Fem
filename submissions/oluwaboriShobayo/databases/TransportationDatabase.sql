CREATE DATABASE TransportCo;
SHOW DATABASES;
USE TransportCo;
SHOW TABLES;

CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
	fullName VARCHAR(250) NOT NULL,
	sex VARCHAR (10) NOT NULL,
	age VARCHAR(50),
	primary key(id)
);


CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
	passengers_id INT NOT NULL,
	passengers_class INT NOT NULL,
	passengers_ticket VARCHAR(150) NOT NULL,
	trip_fare DECIMAL (10,2) NOT NULL,
	assigned_cabin VARCHAR(150),
	number_of_ParCh INT NOT NULL,
    no_of_SibSp INT NOT NULL,
	point_of_embarkation VARCHAR(250) NOT NULL,
	primary key(id),
	foreign key(passengers_id) REFERENCES passengers(id)
);

SELECT * FROM trips;

CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
	passengers_id INT NOT NULL,
	passenger_status boolean NOT NULL,
	primary key (id),
	foreign key(passengers_id) REFERENCES passengers(id)
);

SELECT * FROM accidents;




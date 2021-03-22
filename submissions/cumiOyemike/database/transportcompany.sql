-- Create Database
CREATE DATABASE transport_company;
SHOW DATABASES;

-- Use created database
USE transport_company;

-- Create table for registered passengers
CREATE TABLE registered_passengers (
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(100) NOT NULL,
	sex VARCHAR(10) NOT NULL,
	age VARCHAR(5),
	created_at DATETIME DEFAULT now() NOT NULL,
	PRIMARY KEY (id)
);

-- Ctreate table for trip records
CREATE TABLE trip_records (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
	passenger_class INT NOT NULL,
	ticket_number VARCHAR(50) NOT NULL,
	trip_fare DECIMAL(10, 4) NOT NULL,
	assigned_cabin VARCHAR(10),
	parents_or_children_aboard INT NOT NULL,
	siblings_or_spouses_aboard INT NOT NULL,
	point_of_embarkation VARCHAR(20) NOT NULL,
	created_at DATETIME DEFAULT now() NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passenger_id) REFERENCES registered_passengers(id)
);

-- Create table for accident records
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
    passenger_survived BOOLEAN NOT NULL,
    created_at DATETIME DEFAULT now() NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES registered_passengers(id)
);



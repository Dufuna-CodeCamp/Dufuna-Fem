-- CREATE DATABASE FOR TRANSPORTATION COMPANY
CREATE DATABASE transportation;
USE transportation;

-- CREATE TABLES
CREATE TABLE passengers (
	passenger_id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(70) NOT NULL,
	sex VARCHAR(10) NOT NULL,
	age VARCHAR(5),
	PRIMARY KEY (passenger_id)
);

-- Create table for trips
CREATE TABLE trips (
	trip_id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
	passenger_class INT NOT NULL,
	ticket_number VARCHAR(20) NOT NULL,
	trip_fare DECIMAL(15,2) NOT NULL,
	cabin VARCHAR(20),
	number_of_parents_children INT NOT NULL,
	number_of_siblings_spouses INT NOT NULL,
	point_of_embarkation VARCHAR(25) NOT NULL,
	PRIMARY KEY (trip_id),
	FOREIGN KEY (passenger_id) REFERENCES passengers (passenger_id)
);
-- Create table for accidents
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
	survival_status BOOLEAN NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passenger_id) REFERENCES passengers (passenger_id)
);
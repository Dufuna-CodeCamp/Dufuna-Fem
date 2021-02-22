// CREATE DATABASE
CREATE DATABASE transportation;
use transportation;

// CREATE PASSENGERS TABLE
  CREATE TABLE passengers(
	id INT NOT NULL AUTO_INCREMENT,
	 full_name VARCHAR(100) NOT NULL, 
	 sex VARCHAR(10) NOT NULL,
	 age VARCHAR(11),
	 PRIMARY KEY (id)
 );

// CREATE TRIPS TABLE
 CREATE TABLE trips (
 	id INT NOT NULL AUTO_INCREMENT,
 	passenger_id INT NOT NULL,
 	passenger_class INT NOT NULL, 
 	passenger_ticket VARCHAR(30) NOT NULL,
 	trip_fare DECIMAL (10,2) NOT NULL, 
 	assigned_cabin VARCHAR(20), 
 	number_of_parents_children_aboard INT NOT NULL, 
 	number_of_siblings_spouses_aboard INT NOT NULL, 
 	point_of_embarkation VARCHAR(30) NOT NULL,
 	PRIMARY KEY(id),
 	FOREIGN KEY (passenger_id) REFERENCES passengers (id)
 );


// Create accidents table
CREATE TABLE accidents(
	id INT NOT NULL AUTO_INCREMENT,
	survived BOOLEAN NOT NULL, 
	passenger_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);
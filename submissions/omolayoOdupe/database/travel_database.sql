/* creating database for tripsprefect company*/
CREATE DATABASE trips_prefect;
USE trips_prefect;


/* creating table for passengers details and info */
CREATE TABLE passengers_record (
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(100) NOT NULL, 
	sex VARCHAR(10) NOT NULL,
	age VARCHAR (10),
	PRIMARY KEY (id)
);


/* creating table for travel details */
CREATE TABLE trips_record (
	id INT NOT NULL AUTO_INCREMENT,
 	passenger_id INT NOT NULL,
 	passenger_class INT NOT NULL, 
 	passenger_ticket_no VARCHAR(50) NOT NULL,
 	trip_fare DECIMAL (10,2) NOT NULL, 
 	assigned_cabin VARCHAR(50), 
 	number_of_parents_children_aboard INT NOT NULL, 
 	number_of_siblings_spouses_aboard INT NOT NULL, 
 	point_of_embarkation VARCHAR(50) NOT NULL,
 	PRIMARY KEY(id),
 	FOREIGN KEY (passenger_id) REFERENCES passengers_record (id)
);


/* creating table for accident status should in case of a bad event */
CREATE TABLE accidents_status(
	id INT NOT NULL AUTO_INCREMENT,
	survived BOOLEAN NOT NULL, 
	passenger_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (passenger_id) REFERENCES passengers_record (id)
);


SHOW TABLES;

SHOW DATABASES;



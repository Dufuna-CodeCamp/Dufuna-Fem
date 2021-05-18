// CREATE DATABASE
CREATE DATABASE transportation;
USE transportation

//CREATE PASSENGERS TABLE
CREATE TABLE transportation(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(150) NOT NULL,
sex VARCHAR(10) NOT NULL,
age VARCHAR(10),
PRIMARY KEY (id)

);

//CREATE TRIPS TABLE
CREATE TABLE trips(
	id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
	passenger_class INT NOT NULL,
	passenger_ticket VARCHAR(30) NOT NULL,
	trip_fare DECIMAL(10,2) NOT NULL,
	number_of_parents_children_abroad INT NOT NULL,
	number_of_siblings_spouses_abroad INT NOT NULL,
	point_of_embarktion VARCHAR(30) NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);

//CREATE ACCIEDENT TABLE 
CREATE TABLE accidents(
	id INT NOT NULL AUTO_INCREMENT,
	survived BOOLEAN NOT NULL, 
	passenger_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);

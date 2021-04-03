CREATE DATABASE transport;

USE transport;

-- craete passengers tale
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(25) NOT NULL,
    age INT,
    PRIMARY KEY (id)
);

-- create trips table
CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class ENUM('1', '2', '3') NOT NULL,
    passenger_ticket_number VARCHAR(30) NOT NULL,
    trip_fare DECIMAL(19, 4) NOT NULL,
    assigned_cabin VARCHAR(20),
    parents_children_aboard INT NOT NULL,
    siblings_spouse_aboard INT NOT NULL,
    point_of_embarkation VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);

-- create accidents table
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    trip_id INT NOT NULL,
    passenger_id INT NOT NULL,
    passenger_survived BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (trip_id) REFERENCES trips (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id)
)
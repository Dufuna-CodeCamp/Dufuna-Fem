CREATE DATABASE transportation_company;
USE transportation_company;


-- Created passenger details table
CREATE TABLE passenger_details (
	id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(30) NOT NULL,
	sex VARCHAR(8) NOT NULL,
	age INT NOT NULL,
    created_at DATETIME NOT NULL,
	PRIMARY KEY (id)
);


--Created travelling details of passenger table
CREATE TABLE travel_details (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class ENUM('1','2','3') NOT NULL,
    ticket_number VARCHAR(20) NOT NULL,
    trip_fare DECIMAL(10, 2) NOT NULL,
    cabin VARCHAR(10),
    parents_or_children_aboard INT NOT NULL,
    siblings_or_spouses_aboard INT NOT NULL,
    leaving_point VARCHAR(20) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passenger_details (id)
);


--Created accident event table
CREATE TABLE accident_event (
	id INT NOT NULL AUTO_INCREMENT,
    traveller_id INT NOT NULL,
    status ENUM('survived', 'died') NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (traveller_id) REFERENCES travel_details (id)
);



CREATE DATABASE transportation_company;
USE transportation_company;


-- Created passenger details table
CREATE TABLE passenger_details (
	id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(100) NOT NULL,
	sex VARCHAR(8) NOT NULL,
	age VARCHAR(5) ,
    created_at DATETIME DEFAULT NOW() NOT NULL,
	PRIMARY KEY (id)
);


--Created travelling details of passenger table
CREATE TABLE travel_details (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class ENUM('1','2','3') NOT NULL,
    ticket_number VARCHAR(20) NOT NULL,
    trip_fare DECIMAL(10, 5) NOT NULL,
    cabin VARCHAR(10),
    parents_or_children_aboard INT NOT NULL,
    siblings_or_spouses_aboard INT NOT NULL,
    leaving_point VARCHAR(20) NOT NULL,
    created_at DATETIME DEFAULT NOW() NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passenger_details (id)
);


--Created accident event table
CREATE TABLE accident_event (
	id INT NOT NULL AUTO_INCREMENT,
    traveller_id INT NOT NULL,
    status ENUM('0', '1') NOT NULL,
    created_at DATETIME DEFAULT NOW() NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (traveller_id) REFERENCES travel_details (id)
);



CREATE DATABASE transportation_company;
USE transportation_company;

-- table of passenger details

CREATE TABLE passenger_details (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age VARCHAR(5),
    PRIMARY KEY (id)
    );

-- table of trip details
    
CREATE TABLE trip_details (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    class TINYINT unsigned NOT NULL,
    ticket_number VARCHAR(25) NOT NULL,
    fare DECIMAL(10,5) NOT NULL,
    assigned_cabin VARCHAR(10),
    number_of_parent_or_children_aboard TINYINT unsigned NOT NULL,
    number_of_siblings_or_spouses_aboard TINYINT unsigned NOT NULL,
    point_of_embarkation VARCHAR(100) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passenger_details(id)
    );

-- table of trip accidents

CREATE TABLE trip_accidents (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    survived BOOLEAN NOT NULL, 
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passenger_details(id)
    );
    
SHOW TABLES;
SHOW COLUMNS FROM trip_details;
SHOW COLUMNS FROM passenger_details;
SHOW COLUMNS FROM trip_accidents;
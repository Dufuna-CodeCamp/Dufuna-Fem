-- Creating the Database
CREATE DATABASE berlin_transports;
SHOW DATABASES;

-- Creating the Tables
USE berlin_transports;
CREATE TABLE passenger_details (
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(50) NOT NULL,
	sex VARCHAR(8) NOT NULL,
	age TINYINT NOT NULL,
   	PRIMARY KEY (id)
);
SHOW COLUMNS from passenger_details;
ALTER TABLE passenger_details CHANGE full_name full_name VARCHAR(250);
ALTER TABLE passenger_details CHANGE age age INT;
ALTER TABLE passenger_details CHANGE age age VARCHAR(10);
SELECT * FROM passenger_details;
SELECT * FROM passenger_details WHERE age < 27;

CREATE TABLE travel_details (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_class VARCHAR(10),
	passenger_ticket_number VARCHAR(20),
	passenger_detail_id INT NOT NULL,
	trip_fare DECIMAL(10,2),
	assigned_cabin VARCHAR(10),
	spouses_aboard TINYINT NOT NULL,
	children_aboard TINYINT NOT NULL,
	parents_aboard TINYINT NOT NULL,
	siblings_aboard TINYINT NOT NULL,
	embarkation_port VARCHAR(30) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passenger_detail_id) REFERENCES passenger_details (id)
);
SHOW COLUMNS FROM travel_details;
ALTER TABLE travel_details
DROP COLUMN siblings_aboard;
ALTER TABLE travel_details
DROP COLUMN parents_aboard;
ALTER TABLE travel_details RENAME COLUMN spouses_aboard TO sibsp_aboard;
ALTER TABLE travel_details RENAME COLUMN children_aboard TO parch_aboard;
SELECT * FROM travel_details;

CREATE TABLE flight_statuses  (
		id INT NOT NULL AUTO_INCREMENT,
		passenger_detail_id INT NOT NULL,
		travel_detail_id INT NOT NULL,
		survived BOOLEAN,       
		PRIMARY KEY (id),	
		FOREIGN KEY (passenger_detail_id) REFERENCES passenger_details (id),
		FOREIGN KEY (travel_detail_id) REFERENCES travel_details (id)
);
SHOW COLUMNS FROM flight_statuses;
SELECT * FROM flight_statuses;
ALTER TABLE flight_statuses
DROP FOREIGN KEY travel_detail_id;
ALTER TABLE flight_statuses
DROP COLUMN travel_detail_id;

DROP TABLE flight_statuses;

CREATE TABLE survivals (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_detail_id INT NOT NULL,
	survived BOOLEAN,       
	PRIMARY KEY (id),	
	FOREIGN KEY (passenger_detail_id) REFERENCES passenger_details (id)
    );	    
SHOW COLUMNS FROM survivals;

-- BELOW ARE THE ANSWERS/SOLUTIONS TO THE QUESTIONS GIVEN

-- 2. The total number of passengers who did not survive is 549
SELECT * FROM survivals;
SELECT * FROM survivals WHERE survived = 0;
SELECT COUNT(*) FROM survivals WHERE survived = 0;	

 -- 1. The total number of passengers who survived is 342.
SELECT COUNT(*) FROM survivals WHERE survived = 1;	

-- 3. To get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg:
SELECT passenger_details.full_name, passenger_details.sex FROM passenger_details 
LEFT JOIN travel_details ON passenger_details.id = travel_details.passenger_detail_id
WHERE age < 27 AND (embarkation_port = 'Q' OR  embarkation_port = 'C');

-- 4. The total number of passengers that embarked at Southampton survived is 218.
SELECT travel_details.passenger_detail_id, travel_details.embarkation_port, survivals.passenger_detail_id, survivals.survived FROM travel_details 
JOIN survivals ON travel_details.passenger_detail_id = survivals.passenger_detail_id
WHERE embarkation_port = 'S' AND survived = '1';

-- 5. To get the id, name and the total number of passengers who paid a fare greater than $100 and above the age of 	35 had siblings or spouses on board:
SELECT passenger_details.id, passenger_details.full_name, passenger_details.age, travel_details.trip_fare, travel_details.sibsp_aboard FROM passenger_details 
JOIN travel_details ON passenger_details.id = travel_details.passenger_detail_id
WHERE  sibsp_aboard = '1' AND (trip_fare > '100' AND age > '35')












    
    

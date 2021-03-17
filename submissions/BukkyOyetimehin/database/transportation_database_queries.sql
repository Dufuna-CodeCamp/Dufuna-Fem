-- Creating the Database
CREATE DATABASE berlin_transports;
SHOW DATABASES;

-- Creating the Tables
USE berlin_transports;
CREATE TABLE passenger_details (
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(250) NOT NULL,
	sex VARCHAR(8) NOT NULL,
	age VARCHAR(10) NOT NULL,
   	PRIMARY KEY (id)
);
SHOW COLUMNS FROM passenger_details;
SELECT * FROM passenger_details;

CREATE TABLE travel_details (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_class VARCHAR(10),
	passenger_ticket_number VARCHAR(20),
	passenger_detail_id INT NOT NULL,
	trip_fare DECIMAL(10,2),
	assigned_cabin VARCHAR(10),
	sibsp_aboard TINYINT NOT NULL,
	parch_aboard TINYINT NOT NULL,	
	embarkation_port VARCHAR(30) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passenger_detail_id) REFERENCES passenger_details (id)
);
SHOW COLUMNS FROM travel_details;
SELECT * FROM travel_details;

CREATE TABLE survivals (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_detail_id INT NOT NULL,
	survived BOOLEAN,       
	PRIMARY KEY (id),	
	FOREIGN KEY (passenger_detail_id) REFERENCES passenger_details (id)
    );	    
SHOW COLUMNS FROM survivals;
SELECT * FROM survivals;


-- BELOW ARE THE ANSWERS/SOLUTIONS TO THE QUESTIONS GIVEN

-- 2. The total number of passengers who did not survive is 549
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

-- 5. To get the id, name and the total number of passengers who paid a fare greater than $100 and are above the age of 35 and had siblings or spouses on board:
SELECT passenger_details.id, passenger_details.full_name, passenger_details.age, travel_details.trip_fare, travel_details.sibsp_aboard FROM passenger_details 
JOIN travel_details ON passenger_details.id = travel_details.passenger_detail_id
WHERE  sibsp_aboard = '1' AND (trip_fare > '100' AND age > '35')


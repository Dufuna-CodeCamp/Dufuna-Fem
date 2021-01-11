CREATE DATABASE funa_travels;

use funa_travels;

CREATE TABLE registered_passengers (
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(100) NOT NULL,
sex VARCHAR(10) NOT NULL,
age INT,
created_at datetime,
primary key(id)
);

ALTER TABLE registered_passengers MODIFY age VARCHAR(100);

SELECT * FROM registered_passengers;

CREATE TABLE passengers_records (
id INT NOT NULL AUTO_INCREMENT,
registered_passengers_id INT NOT NULL,
passenger_class TINYINT NOT NULL,
passenger_ticket_number VARCHAR(100) NOT NULL,
trip_fare DECIMAL (10,2) NOT NULL,
assigned_cabin VARCHAR(100),
number_of_parents_children_aboard INT NOT NULL,
number_of_siblings_spouses_aboard INT NOT NULL,
point_of_embarkation VARCHAR(100) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (registered_passengers_id) REFERENCES registered_passengers (id)
);

SELECT * FROM passengers_records;


CREATE TABLE accident_records (
id INT NOT NULL AUTO_INCREMENT,
registered_passengers_id INT NOT NULL,
passenger_survived_yes_or_no VARCHAR(10) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (registered_passengers_id) REFERENCES registered_passengers (id)
);

ALTER TABLE accident_records MODIFY passenger_survived_yes_or_no TINYINT NOT NULL;

ALTER TABLE accident_records CHANGE passenger_survived_yes_or_no passenger_survived TINYINT NOT NULL;

SELECT * FROM accident_records;

/* Question 1: Query to find the total number of passengers that survived 
The total number of passengers who survived = 290. */
SELECT * FROM accident_records WHERE passenger_survived LIKE 1; 

/* Question2: Query to find the total number of passengers who did not survive
The total number of passengers who did not survive = 424. */
SELECT * FROM accident_records WHERE passenger_survived LIKE 0; 


/* Question 3: Query to get the name and sex of passengers under 
the age of 27 that embarked at Queenstown and Cherbourg? */
SELECT registered_passengers.full_name, registered_passengers.sex, registered_passengers.age < '27', passengers_records.point_of_embarkation = 'C' AND 'Q'
FROM registered_passengers LEFT JOIN passengers_records 
ON registered_passengers.id = passengers_records.id;

  
/* Question 4: Query to get how many of the passengers that embarked at Southampton survived? 
Passengers that embarked at Southampton survived = 714 */
SELECT passengers_records.point_of_embarkation LIKE 'S', accident_records.passenger_survived LIKE 1
FROM passengers_records INNER JOIN accident_records 
ON passengers_records.registered_passengers_id = accident_records.registered_passengers_id;


/* Question 5: Query to get the id, name and the total number of passengers who paid a fare greater 
than $100 and above the age of 35 had siblings or spouses on board. */
SELECT registered_passengers.id, registered_passengers.full_name, registered_passengers.age > '35', passengers_records.trip_fare > 100, passengers_records.number_of_siblings_spouses_aboard >= 1
FROM registered_passengers LEFT JOIN passengers_records 
ON registered_passengers.id = passengers_records.registered_passengers_id;

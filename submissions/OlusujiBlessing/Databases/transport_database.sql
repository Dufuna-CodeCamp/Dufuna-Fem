CREATE DATABASE transportation;
USE transportation;
CREATE TABLE passengers(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  full_names VARCHAR(100) NOT NULL,
  sex ENUM('Male', 'Female') NOT NULL,
  ages varchar(10)
  );
 ----This section is for trips table ---
USE transportation;
 CREATE TABLE trips(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   passengers_id INT NOT NULL REFERENCES passengers(id),
   ticket_numbers VARCHAR(50) NOT NULL,
   trip_fares VARCHAR(10) NOT NULL,
   cabin_number VARCHAR(5),
   parentsorchildren_number VARCHAR(20) NOT NULL,
   spousesorsiblings_number VARCHAR(20) NOT NULL,
   embarkation_point VARCHAR(100) NOT NULL
   );
ALTER TABLE trips ADD COLUMN passenger_class ENUM('1','2', '3');

----This section is for survival table---
USE transportation;
CREATE TABLE survival_status(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  passenger_id INT NOT NULL REFERENCES passengers(id),
  survival_status ENUM('Yes', 'No') NOT NULL
  );
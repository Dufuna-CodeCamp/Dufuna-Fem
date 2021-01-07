CREATE DATABASE duna_travels;

use duna_travels;

CREATE TABLE registered_passengers (
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(100) NOT NULL,
sex VARCHAR(10) NOT NULL,
age INT,
created_at datetime,
primary key(id)
);

SHOW DATABASES;

CREATE TABLE passengers_records (
id INT NOT NULL AUTO_INCREMENT,
registered_passengers_id INT NOT NULL,
passenger_class INT NOT NULL,
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

CREATE TABLE accident_records (
id INT NOT NULL AUTO_INCREMENT,
registered_passengers_id INT (3) NOT NULL,
survived VARCHAR(3) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (registered_passengers_id) REFERENCES registered_passengers (id)
);

SHOW TABLES;
SHOW COLUMNS FROM registered_passengers; 
SHOW COLUMNS FROM passengers_records;
SHOW COLUMNS FROM accident_records;

ALTER TABLE accident_records MODIFY registered_passengers_id INT NOT NULL;

ALTER TABLE passengers_records MODIFY passenger_class TINYINT NOT NULL;


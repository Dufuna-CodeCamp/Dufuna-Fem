/* creating a database for a transportation company*/
CREATE DATABASE ride_along;
USE ride_along;

/* Creating a table for registered passengers */
CREATE TABLE registered_passengers (
    id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(50) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age VARCHAR(20),
    created_at DATETIME,
    PRIMARY KEY(id)
);
ALTER TABLE registered_passengers MODIFY full_name VARCHAR(100);

/* Creating a table for passengers trip record */
CREATE TABLE trip_records (
    id INT NOT NULL AUTO_INCREMENT,
    registered_passengers_id INT NOT NULL, /*linking each registered passenger to a trip*/
    passenger_class TINYINT NOT NULL,
    passenger_ticket_number VARCHAR(30) NOT NULL,
    trip_fare DECIMAL (15,2) NOT NULL,
    assigned_cabin VARCHAR(50),
    number_of_parents_children_aboard INT NOT NULL,
    number_of_siblings_spouses_aboard INT NOT NULL,
    point_of_embarkation VARCHAR(100) NOT NULL,
    created_at DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (registered_passengers_id) REFERENCES registered_passengers (id)
);

/* Creating a table for accident records */
CREATE TABLE accident_records (
    id INT NOT NULL AUTO_INCREMENT,
    trip_records_id INT NOT NULL, 
    passenger_survived BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (trip_records_id) REFERENCES trip_records (id)
);

SHOW TABLES;
SELECT * FROM accident_records;

ALTER TABLE accident_records
DROP FOREIGN KEY accident_records_ibfk_1;

ALTER TABLE accident_records CHANGE trip_records_id registered_passengers_id INT NOT NULL;

ALTER TABLE accident_records
ADD FOREIGN KEY (registered_passengers_id) REFERENCES registered_passengers (id);


show create table accident_records;


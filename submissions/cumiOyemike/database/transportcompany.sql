CREATE DATABASE transport_company;
SHOW DATABASES;

USE transport_company;

CREATE TABLE registered_passengers (
	id INT NOT NULL,
	full_name VARCHAR(50) NOT NULL,
	sex VARCHAR(20) NOT NULL,
	age VARCHAR(10),
	created_at DATETIME NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE trip_records (
	id INT NOT NULL,
	passenger_id INT NOT NULL,
	passenger_class INT NOT NULL,
	ticket_number VARCHAR(50) NOT NULL,
	trip_fare DECIMAL(10, 2) NOT NULL,
	assigned_cabin VARCHAR(20),
	parents_or_children_aboard INT NOT NULL,
	siblings_or_spouses_aboard INT NOT NULL,
	point_of_embarkation VARCHAR(100) NOT NULL,
	created_at DATETIME NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passenger_id) REFERENCES registered_passengers(id)
);

CREATE TABLE accidents (
	id INT NOT NULL,
	passenger_id INT NOT NULL,
    passenger_survived BOOLEAN NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES registered_passengers(id)
);
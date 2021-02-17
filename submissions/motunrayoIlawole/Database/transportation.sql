CREATE DATABASE travel_corp;

USE travel_corp;

/* Create table for registered passengers */
CREATE TABLE registered_passengers (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    sex VARCHAR(7) NOT NULL,
    age VARCHAR(30),
    created_at DATETIME,
    primary key (id)
);

/* Create table for the regsitered passengers' trips */
CREATE TABLE passengers_trips (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class INT NOT NULL,
    passenger_ticket_number VARCHAR(50) NOT NULL,
    trip_fare DECIMAL(10, 2) NOT NULL,
    assigned_cabin VARCHAR(30),
    number_of_parents_children_aboard INT NOT NULL,
    number_of_siblings_spouses_aboard INT NOT NULL,
    point_of_embarkation VARCHAR(100) NOT NULL,
    created_at DATETIME,
    primary key (id),
    foreign key (passenger_id) references registered_passengers(id)
);

/* Create table to store accident records */
CREATE TABLE accident_records (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_survived BOOLEAN NOT NULL,
    created_at DATETIME,
    primary key (id),
    foreign key (passenger_id) references registered_passengers(id)
);
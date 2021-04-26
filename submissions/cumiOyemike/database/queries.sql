-- Total number of patients who survived
SELECT COUNT(*) FROM accidents WHERE passenger_survived = 1;
-- Answer is 342

-- Total number of patients who did not survive
SELECT COUNT(*) FROM accidents WHERE passenger_survived = 0;
-- Answer is 549

-- Name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbour
SELECT full_name, sex FROM registered_passengers 
LEFT JOIN trip_records ON registered_passengers.id = trip_records.passenger_id
WHERE age < 27 AND (point_of_embarkation = 'Q' OR point_of_embarkation = 'C');

-- Number of passengers that embarked at Southampton and survived
SELECT COUNT(*) FROM trip_records
LEFT JOIN accidents ON trip_records.passenger_id = accidents.passenger_id
WHERE passenger_survived = 1 AND point_of_embarkation = 'S';
-- Answer is 218

-- id, name and total number of passengers who paid a fare greater than $100 that are above the age of 35 and had siblings or spouses on board?
SELECT passenger_id, full_name FROM registered_passengers
LEFT JOIN trip_records ON registered_passengers.id = trip_records.passenger_id
WHERE (age > 35 AND trip_fare > 100) AND siblings_or_spouses_aboard > 0;

SELECT COUNT(*) FROM registered_passengers
LEFT JOIN trip_records ON registered_passengers.id = trip_records.passenger_id
WHERE (age > 35 AND trip_fare > 100) AND siblings_or_spouses_aboard > 0;
-- Answer is 9

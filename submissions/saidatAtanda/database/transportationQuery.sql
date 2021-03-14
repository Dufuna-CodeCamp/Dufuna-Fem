SHOW DATABASES;
USE transportation_company;

-- 1. Total number of passengers who survived

SELECT COUNT(*) FROM trip_accidents WHERE survived = 1;
-- Answer: 342

-- 2. Total number of passengers who did not survive

SELECT COUNT(*) FROM trip_accidents WHERE survived = 0; 
-- Answer: 549

-- 3. Name and sex of passengers under age of 27 that embarked at Queenstown and Cherbourg

SELECT passenger_details.full_name, passenger_details.sex FROM passenger_details 
LEFT JOIN trip_details ON passenger_details.id = trip_details.passenger_id
WHERE age < 27 AND (point_of_embarkation = 'Q' OR point_of_embarkation = 'C');

-- 4. Number of passengers that embarked at Southampton and survived 

SELECT COUNT(*) FROM  trip_accidents INNER JOIN trip_details
ON trip_accidents.passenger_id = trip_details.passenger_id  
WHERE point_of_embarkation = 'S' AND survived = 1; 
-- Answer: 218

-- 5A. IDs and Names of passengers who paid a fare greater than $100, above the age of 35 and had siblings or spouses on board

SELECT passenger_details.id, passenger_details.full_name FROM passenger_details
INNER JOIN trip_details ON passenger_details.id = trip_details.passenger_id
WHERE ((trip_details.fare > 100) AND (passenger_details.age > 35) AND (trip_details.number_of_siblings_or_spouses_aboard > 0));

-- 5B. Total number of passengers who paid a fare greater than $100, above the age of 35 and had siblings or spouses on board

SELECT count(*) as counter FROM passenger_details
INNER JOIN trip_details ON passenger_details.id = trip_details.passenger_id
WHERE ((trip_details.fare > 100) AND (passenger_details.age > 35) AND (trip_details.number_of_siblings_or_spouses_aboard > 0));
-- Answer: 9
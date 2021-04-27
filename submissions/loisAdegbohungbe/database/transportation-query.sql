USE transport;

-- Total Number of passengers who survived
SELECT COUNT(*) FROM accidents WHERE passenger_survived = 1;
-- 342

-- Total Number of passengers who did not survive
SELECT COUNT(*) FROM accidents WHERE passenger_survived = 0;
-- 549

-- select name and sex of passengers under the age of 27 
-- that embarked at Queenstown and Cherbourg
SELECT passengers.full_name, passengers.sex FROM passengers
	LEFT JOIN trips ON passengers.id = trips.passenger_id
	WHERE age < 27 AND point_of_embarkation= 'Q' OR point_of_embarkation = 'C'; 

-- Number of passengers that embarked at Southampton and survived?
SELECT COUNT(*) FROM accidents LEFT JOIN trips
	ON accidents.passenger_id = trips.passenger_id 
	WHERE trips.point_of_embarkation = 'S' AND accidents.passenger_survived = 1;
-- 218
    
-- Select the id and name of passengers who paid a fare greater than $100 
-- and above the age of 35 and had siblings or spouses on board?
SELECT passengers.id, passengers.full_name FROM passengers
	LEFT JOIN trips ON passengers.id = trips.passenger_id
    WHERE trips.trip_fare > 100 AND passengers.age > 35 
    AND trips.siblings_spouse_aboard > 0;
   
-- Get the total number of passengers who paid a fare greater than $100 
-- and above the age of 35 and had siblings or spouses on board?
SELECT COUNT(*) FROM passengers
	LEFT JOIN trips ON passengers.id = trips.passenger_id
    WHERE trips.trip_fare > 100 AND passengers.age > 35 
    AND trips.siblings_spouse_aboard > 0;
-- 9
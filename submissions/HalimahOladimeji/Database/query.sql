USE transportation;

-- 1) What is the total number of passengers who survived?
SELECT COUNT(*)
FROM accidents 
WHERE survival_status = 1;
-- OUTPUT = 342

-- 2) What is the total number of passengers who did not survive?
SELECT COUNT(*)
FROM accidents
WHERE survival_status = 0;
-- OUTPUT = 549

-- 3) Get the  name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg.
SELECT passengers.full_name, passengers.sex
FROM passengers
LEFT JOIN trips ON passengers.passenger_id = trips.passenger_id
WHERE age < 27 AND point_of_embarkation != 'S';

-- 4) How many passengers that embarked at Southampton survived?
SELECT COUNT(*) 
FROM accidents
LEFT JOIN trips ON trips.passenger_id = accidents.passenger_id
WHERE point_of_embarkation = 'S' AND survival_status = 1;
-- OUTPUT = 218

-- 5) Get the id and name of passengers who paid a fare greater than $100 and above the age of 35 with siblings or spouses on board.
SELECT passengers.passenger_id, passengers.full_name
FROM passengers
LEFT JOIN trips ON passengers.passenger_id = trips.passenger_id
WHERE trip_fare > 100 AND  age > 35 AND number_of_siblings_spouses != 0;

-- 6) Total Number of Passengers whose fare are above 100 and are above 35 years 
SELECT COUNT(*)
FROM passengers
LEFT JOIN trips ON passengers.passenger_id = trips.passenger_id
WHERE trip_fare > 100 AND age > 35 AND number_of_siblings_spouses != 0;
-- OUTPUT = 9
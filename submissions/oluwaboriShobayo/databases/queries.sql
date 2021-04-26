
-- Question 1
SELECT * FROM accidents WHERE passenger_status = 1;
-- Number of passengers who survived = 342


-- Question 2
SELECT * FROM accidents WHERE passenger_status = 0;
-- Number of passengers who did not survive = 549


-- Question 3: The name and sex of passengers that are under 27 and embarked at Q and C
SELECT passengers.sex, passengers.fullName, trips.point_of_embarkation
FROM passengers LEFT JOIN trips ON trips.id = passengers.id
WHERE point_of_embarkation != 'S' AND age <27;


-- Question 4: How many passengers that embarked at Southampton survived
SELECT trips.point_of_embarkation, accidents.passenger_status
FROM trips LEFT JOIN accidents ON trips.id = accidents.passengers_id
WHERE point_of_embarkation = 'S' AND passenger_status = 1;
-- Answer = 218 survived


-- Question 5: The passengers who paid a fare greater than $100, above the age of 35 and had sibSp on board
SELECT passengers.id, passengers.fullName, trips.trip_fare, trips.no_of_sibSp
FROM passengers LEFT JOIN trips ON passengers.id = trips.passengers_id 
WHERE trip_fare > 100 AND age > 35 AND no_of_sibSp = 1;




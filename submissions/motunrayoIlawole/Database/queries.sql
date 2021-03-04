/* (1) - Total number of passengers that survived */
SELECT COUNT(*) 
FROM accident_records 
WHERE passenger_survived LIKE 1;
/* Answer = 342 */


/* (2) - Total number of passengers that did not survive */
SELECT COUNT(*) 
FROM accident_records 
WHERE passenger_survived LIKE 0;
/* Answer = 549 */


/* (3) - Name and Sex of passengers under the age of 27 that embarked at Queenstown and Cherbourgh */
SELECT registered_passengers.full_name, registered_passengers.sex
FROM registered_passengers LEFT JOIN passengers_trips
ON registered_passengers.id = passengers_trips.passenger_id
WHERE age < 27 AND (point_of_embarkation = "Q" OR point_of_embarkation = "C");


/* (4) - Total number of passengers that embarked and Southampton and survived */
SELECT COUNT(passengers_trips.passenger_id) 
FROM passengers_trips INNER JOIN accident_records
ON passengers_trips.passenger_id = accident_records.passenger_id
WHERE point_of_embarkation = "S" and passenger_survived = 1;
/* Answer = 218 */


/* (5) - ID and name of passengers above the age of 35 that 
paid a fare greater than 100 and had siblings or spouses on board */
SELECT registered_passengers.id, registered_passengers.full_name
FROM registered_passengers LEFT JOIN passengers_trips
ON registered_passengers.id = passengers_trips.passenger_id
WHERE (trip_fare > 100 AND age > 35) AND number_of_siblings_spouses_aboard > 0;


/* Number of passengers above the age of 35 that 
paid a fare greater than 100 and had siblings or spouses on board */
SELECT COUNT(registered_passengers.id)
FROM registered_passengers LEFT JOIN passengers_trips
ON registered_passengers.id = passengers_trips.passenger_id
WHERE (trip_fare > 100 AND age > 35) AND number_of_siblings_spouses_aboard > 0;
/* Answer = 9 */
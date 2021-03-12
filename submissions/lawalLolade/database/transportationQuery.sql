/*  Total number of passengers that survived. */
SELECT COUNT(*) 
FROM accident_records 
WHERE passenger_survived = 1;
/* Answer = 342 */


/* The total number of passengers who did not survive. */
SELECT COUNT(*)
FROM accident_records 
WHERE passenger_survived LIKE 0; 
/* Answer = 549 */


/* Query to get the name and sex of passengers under 
the age of 27 that embarked at Queenstown and Cherbourg. */
 SELECT registered_passengers.full_name, registered_passengers.sex 
 FROM registered_passengers LEFT JOIN trip_records 
 ON registered_passengers.id = trip_records.registered_passengers_id
 WHERE age < 27 AND (point_of_embarkation= 'Q' OR point_of_embarkation = 'C');

  
/* Query to get how many of the passengers that embarked at Southampton survived */
SELECT COUNT(trip_records.registered_passengers_id)
FROM trip_records INNER JOIN accident_records 
ON trip_records.registered_passengers_id = accident_records.registered_passengers_id
WHERE point_of_embarkation = 'S' AND passenger_survived = 1;
 /* Answer = 218 */


/* Question 5: Query to get the id and name of passengers who paid a fare greater 
than $100 and above the age of 35 had siblings or spouses on board.*/
SELECT registered_passengers.id, registered_passengers.full_name
FROM registered_passengers LEFT JOIN trip_records 
ON registered_passengers.id = trip_records.registered_passengers_id
WHERE (trip_records.trip_fare > 100 AND registered_passengers.age > 35) AND trip_records.number_of_siblings_spouses_aboard >= 1;

/* the total number of passengers who paid a fare greater 
than $100 and above the age of 35 had siblings or spouses on board.*/
SELECT COUNT(registered_passengers_id)
FROM registered_passengers LEFT JOIN trip_records 
ON registered_passengers.id = trip_records.registered_passengers_id
WHERE (trip_records.trip_fare > 100 AND registered_passengers.age > 35) AND trip_records.number_of_siblings_spouses_aboard >= 1;
 /* Answer = 9 */

/* Question 1: Query to find the total number of passengers that survived 
Answer: The total number of passengers who survived = 342. */
SELECT COUNT(*)
FROM accident_records 
WHERE passenger_survived LIKE 1; 


/* Question2: Query to find the total number of passengers who did not survive
Answer: The total number of passengers who did not survive = 549. */
SELECT COUNT(*)
FROM accident_records 
WHERE passenger_survived LIKE 0; 


/* Question 3: Query to get the name and sex of passengers under 
the age of 27 that embarked at Queenstown and Cherbourg? */
 SELECT registered_passengers.full_name, registered_passengers.sex 
 FROM registered_passengers LEFT JOIN passengers_records 
 ON registered_passengers.id = passengers_records.registered_passengers_id
 WHERE age < 27 AND (point_of_embarkation= 'Q' OR point_of_embarkation = 'C');

  
/* Question 4: Query to get how many of the passengers that embarked at Southampton survived? 
Answer: Passengers that embarked at Southampton survived = 218 */
SELECT COUNT(passengers_records.registered_passengers_id)
FROM passengers_records INNER JOIN accident_records 
ON passengers_records.registered_passengers_id = accident_records.registered_passengers_id
WHERE point_of_embarkation = 'S' AND passenger_survived = 1;
 

/* Question 5: Query to get the id, name and the total number of passengers who paid a fare greater 
than $100 and above the age of 35 had siblings or spouses on board.*/
SELECT registered_passengers.id, registered_passengers.full_name
FROM registered_passengers LEFT JOIN passengers_records 
ON registered_passengers.id = passengers_records.registered_passengers_id
WHERE (passengers_records.trip_fare > 100 AND registered_passengers.age > 35) AND passengers_records.number_of_siblings_spouses_aboard >= 1;

-- 2nd query to get the total number of passengers = 9
SELECT COUNT(registered_passengers_id)
FROM registered_passengers LEFT JOIN passengers_records 
ON registered_passengers.id = passengers_records.registered_passengers_id
WHERE (passengers_records.trip_fare > 100 AND registered_passengers.age > 35) AND passengers_records.number_of_siblings_spouses_aboard >= 1;
 

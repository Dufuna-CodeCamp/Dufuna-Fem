-- BELOW ARE THE ANSWERS/SOLUTIONS TO THE QUESTIONS GIVEN

-- 1. The total number of passengers who survived is 342.
SELECT * FROM survivals;
SELECT * FROM survivals WHERE survived = 1;
SELECT COUNT(*) FROM survivals WHERE survived = 1;	

-- 2. The total number of passengers who did not survive is 549
SELECT * FROM survivals WHERE survived = 0;
SELECT COUNT(*) FROM survivals WHERE survived = 0;	
 
-- 3. To get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg:
SELECT passenger_details.full_name, passenger_details.sex FROM passenger_details 
LEFT JOIN travel_details ON passenger_details.id = travel_details.passenger_detail_id
WHERE age < 27 AND (embarkation_port = 'Q' OR  embarkation_port = 'C');

-- 4. The total number of passengers that embarked at Southampton survived is 218.
SELECT travel_details.passenger_detail_id, travel_details.embarkation_port, survivals.passenger_detail_id, survivals.survived FROM travel_details 
JOIN survivals ON travel_details.passenger_detail_id = survivals.passenger_detail_id
WHERE embarkation_port = 'S' AND survived = '1';

-- 5. To get the id, name of passengers who paid a fare greater than $100 and above the age of 35 had and siblings or spouses on board:
SELECT passenger_details.id, passenger_details.full_name, passenger_details.age, travel_details.trip_fare, travel_details.sibsp_aboard FROM passenger_details 
JOIN travel_details ON passenger_details.id = travel_details.passenger_detail_id
WHERE (trip_fare > '100' AND age > '35') AND sibsp_aboard != '0';
-- The total number of passengers who paid a fare greater than $100 and above the age of 35 and had siblings or spouses on board is 9.

-- Total number of passengers who survived
SELECT COUNT(*) FROM accident_event WHERE survival_status LIKE '1';
-- Answer: 342

-- Total number of passengers who did not survive
SELECT COUNT(*) FROM accident_event WHERE survival_status = '0';
-- Answer: 549

-- Name and sex of passengers whose age < 27 and embarked at 'Q' or 'C'
SELECT passenger_details.fullname, passenger_details.sex FROM passenger_details
LEFT JOIN travel_details ON passenger_details.id = travel_details.passenger_id
WHERE passenger_details.age < 27 AND (travel_details.leaving_point = 'Q' OR travel_details.leaving_point = 'C');

-- Number of passengers that embarked at 'S' and survived
SELECT COUNT(*) FROM accident_event
LEFT JOIN travel_details ON travel_details.id = accident_event.traveller_id
WHERE travel_details.leaving_point = 'S' AND accident_event.survival_status = '1';
-- Answer: 218

-- Passengers id and name who paid fare > $100 & age > 35 & siblings or spouses on board > 0
SELECT passenger_details.id, passenger_details.fullname FROM passenger_details
LEFT JOIN travel_details ON passenger_details.id = travel_details.passenger_id
WHERE travel_details.trip_fare > 100 AND passenger_details.age > 35 
AND travel_details.siblings_or_spouses_aboard > 0;


-- Total number of passengers who paid fare > $100 & age > 35 & siblings or spouses on board > 0
SELECT COUNT(*) FROM passenger_details LEFT JOIN travel_details 
ON passenger_details.id = travel_details.passenger_id
WHERE travel_details.trip_fare > 100 AND passenger_details.age > 35 
AND travel_details.siblings_or_spouses_aboard > 0;
-- Answer: 9

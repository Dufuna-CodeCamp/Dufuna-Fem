-- 1. Total number of passengers who survived 
SELECT COUNT(*)
FROM accidents_status
WHERE survived LIKE 1;
-- result 342

-- 2. Total number of passengers who did not survived 
SELECT COUNT(*)
FROM accidents_status
WHERE survived LIKE 0;
-- result 549


-- 3. Name and Sex of passengers under 27 years 
-- who embarked at Queenstown and Cherbourg 
SELECT  passengers_record.full_name, passengers_record.sex
FROM passengers_record LEFT JOIN trips_record
ON passengers_record.id  = trips_record.passenger_id
WHERE age < 27 AND (point_of_embarkation= 'Q' OR point_of_embarkation = 'C');


-- 4. No of survived passengers that embarked at Sounthampton 
SELECT COUNT(*) 
FROM accidents_status LEFT JOIN trips_record
ON accidents_status.passenger_id = trips_record.passenger_id
WHERE trips_record.point_of_embarkation = 'S' AND accidents_status.survived = 1;
-- result 218

-- 5. Name, id and numbers of passengers who paid > 100 and above 35 years  
-- name and id
SELECT passengers_record.id, passengers_record.full_name
FROM passengers_record LEFT JOIN trips_record 
ON passengers_record.id = trips_record.passenger_id
WHERE trips_record.trip_fare > 100 AND passengers_record.age > 35 AND trips_record.number_of_siblings_spouses_aboard >= 1;

-- total number who paid > 
SELECT COUNT(*)
FROM passengers_record LEFT JOIN trips_record 
ON passengers_record.id = trips_record.passenger_id
WHERE trips_record.trip_fare > 100 AND passengers_record.age > 35 AND trips_record.number_of_siblings_spouses_aboard >= 1;
-- result 9




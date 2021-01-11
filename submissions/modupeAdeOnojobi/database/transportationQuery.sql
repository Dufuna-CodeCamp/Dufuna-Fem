1. SELECT COUNT(*) FROM accidents WHERE survived = 1;
// 342


2. SELECT COUNT(*) FROM accidents WHERE survived = 0;
// 549


3.  SELECT passengers.full_name, passengers.sex FROM passengers
	LEFT JOIN trips ON passengers.id = trips.passenger_id
	WHERE age < 27 AND point_of_embarkation= 'Q' OR point_of_embarkation = 'C';



4. SELECT COUNT(*) FROM accidents LEFT JOIN trips
	ON accidents.passenger_id = trips.passenger_id 
	WHERE trips.point_of_embarkation = 'S' AND accidents.survived = 1;

// 218


5a. // Name and id of passengers...
	SELECT passengers.id, passengers.full_name FROM passengers LEFT JOIN trips 
	ON passengers.id = trips.passenger_id WHERE trips.trip_fare > 100 
	AND trips.number_of_siblings_spouses_aboard > 0 AND passengers.age > 35;
 // Number passengers...
	SELECT COUNT(*) FROM passengers LEFT JOIN trips 
	ON passengers.id = trips.passenger_id WHERE trips.trip_fare > 100 
	AND trips.number_of_siblings_spouses_aboard > 0 AND passengers.age > 35; 
// 9



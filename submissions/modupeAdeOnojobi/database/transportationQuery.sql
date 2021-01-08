1. SELECT survived, COUNT(*) FROM accidents WHERE survived = 1 GROUP BY survived;
// 290


2. SELECT survived, COUNT(*) FROM accidents WHERE survived = 0 GROUP BY survived;
// 424


3. SELECT P.full_name, P.sex, P.age, T.point_of_embarkation FROM passengers AS P LEFT JOIN trips AS T 
	ON P.id = T.passenger_id WHERE P.age < 27 
	AND (T.point_of_embarkation= 'Q' OR T.point_of_embarkation = 'C');



4. SELECT COUNT(*), accidents.survived, trips.point_of_embarkation FROM accidents LEFT JOIN trips
	ON accidents.passenger_id = trips.passenger_id 
	WHERE trips.point_of_embarkation = 'S' AND accidents.survived = 1;
// 202


5a. // Name and id of passengers...
	SELECT passengers.id, passengers.full_name FROM passengers LEFT JOIN trips 
	ON passengers.id = trips.passenger_id WHERE trips.trip_fare > 100 
	AND trips.number_of_siblings_spouses_aboard > 0 passengers.age > 35;



5b. // Number passengers...
	SELECT COUNT(*) FROM passengers LEFT JOIN trips 
	ON passengers.id = trips.passenger_id WHERE trips.trip_fare > 100 
	AND trips.number_of_siblings_spouses_aboard > 0 AND passengers.age > 35; 
// 9



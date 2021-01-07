// Create database
CREATE DATABASE sneak_nation;
use sneak_nation;


// Create categorie table
CREATE TABLE categories(
	id INT NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(20) NOT NULL,
	PRIMARY KEY (id)
);



// Insert data into categories table
INSERT INTO categories (category_name)
VALUES ('sneaker'), ('sandals'), ('slippers');



// Create admins table
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(40) NOT NULL,
	password VARCHAR(40) NOT NULL,
	phone VARCHAR(20) NOT NULL,
	PRIMARY KEY (id)
);



// Insert into admins table
INSERT INTO admins(name, email, password, phone)
VALUES ('Joy John', 'jjohn@gmail.com', 'joy@123456', '09076547866'),
	('Amina Joseph', 'ajoseph@gmail.com', 'amina@123456', '09076549086'),
	('Michael Michael', 'mike@gmail.com', '458930372', '07076860536'),
	('Sarah Joe', 'sarahj@gmail.com', 'password@999', '08176547866');



// Create products table
CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
	product_description VARCHAR(255) NOT NULL,
	product_image BLOB,
	unit_price DECIMAL (10,2) NOT NULL,
        stock_level VARCHAR(50) NOT NULL,
        product_status VARCHAR(50) NOT NULL,
	categories_id INT NOT NULL,
	admins_id INT NOT NULL,
        PRIMARY KEY (id),
	FOREIGN KEY (categories_id) REFERENCES categories (id),
	FOREIGN KEY (admins_id) REFERENCES admins (id)
);



// Insert into product table
INSERT INTO products (product_name, product_description, product_image, unit_price, stock_level, product_status, categories_id, admins_id)
VALUES ('victoria sneaker', 'multicolor sneaker can be worn with any attire', 'D:\Dufuna-Fem\submissions\modupeAdeOnojobi\html\images\sneaker.jpg', 400, 5, 'in stock', 1, 2),
	('totem sneaker', 'multicolor sneaker can be worn with any attire', 'D:\Dufuna-Fem\submissions\modupeAdeOnojobi\html\images\sneaker2.jpg', 9000, 2, 'in stock', 1, 1);



// Create customer table 
CREATE TABLE customer (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(40) NOT NULL,
	password VARCHAR(20) NOT NULL,
	PRIMARY KEY(id)
);



// Insert into customer table 
INSERT INTO customer (first_name, last_name, email, password)
VALUES ('Paul', 'Adebayo', 'pauladebayo@gmail.com', 'adebayo@1234'),
	('Mary', 'Eze', 'maryeze@gmail.com', 'marye202020'),
	('Josephine', 'Okocha', 'jokocha@gmail.com', 'luckygurl');



// Create customer address table
CREATE TABLE customer_address (
	id INT NOT NULL AUTO_INCREMENT,
 	street VARCHAR(50) NOT NULL, 
 	city VARCHAR(40) NOT NULL, 
 	state VARCHAR(40) NOT NULL, 
 	zip_code INT, 
 	country VARCHAR(30) NOT NULL,
 	phone_number VARCHAR(20) NOT NULL,
 	customer_id INT NOT NULL,
 	PRIMARY KEY(id),
 	FOREIGN KEY (customer_id) REFERENCES customer (id)
);



// Insert into customer address table
INSERT INTO customer_address(street, city, state, zip_code, country, phone_number, customer_id)
VALUES('Abraham close', 'Benin', 'Edo State', '900045', 'Nigeria', '09087654599', 1),
	('Prine and Pricess', 'Abuja', 'FCT', '900045', 'Nigeria', '07098654599', 2),
	('Parakou cresent', 'Abuja', 'FCT', '900045', 'Nigeria', '08107654869', 3);



// Create order table 
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
	amount DECIMAL(10,2) NOT NULL,
	date DATETIME NOT NULL,
	customer_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (customer_id) REFERENCES customer (id)
);



// Insert into orders tabel 
INSERT INTO orders (amount, date, customer_id)
VALUES(800, now(), 1),
	(900, now(), 2),
	(400, now(), 3);



// Create order items 
CREATE TABLE order_items (
	id INT NOT NULL AUTO_INCREMENT,
	quantity INT NOT NULL,
	unit_prices INT NOT NULL,
	total_amount DECIMAL(10,2) NOT NULL,
	order_id INT NOT NULL,
	product_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (order_id) REFERENCES orders (id),
	FOREIGN KEY (product_id) REFERENCES products (id)
);



//Insert into order_items
INSERT INTO order_items(quantity, unit_prices, total_amount, order_id, product_id)
VALUES (3, 400, 1200, 1, 1),
	(2, 500, 1000, 2, 2),
	(1, 800, 800, 1, 1); 
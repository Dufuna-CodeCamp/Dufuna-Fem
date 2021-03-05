CREATE DATABASE StylebyBori;
SHOW DATABASES;
USE StylebyBori;

-- this is the categories table that links back to the product table
CREATE TABLE categories (
		id INT NOT NULL AUTO_INCREMENT,
		category VARCHAR(50) NOT NULL,
		created_at DATETIME NOT NULL,
		primary key(id)
);

INSERT INTO categories (category, created_at)
VALUES
		('dresses', now()),
		('dresses', now()),
		('tops', now()),
		('office wear', now());
SELECT * FROM categories;

-- This is the admins' table
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(30) NOT NULL,
	password VARCHAR(50) NOT NULL,
	phone_number BIGINT NOT NULL,
	primary key(id)
);

INSERT INTO admins (name, email, password, phone_number)
VALUES 
	('Segun', 'segun@gmail.com', '*****', 08112223334),
	('Bimbo', 'bimbo@yahoo.com', '*****', 08112223334),
	('Sade', 'sade@gmail.com', '*****', 08112223334),
	('Tola', 'tola@gmail.com', '*****', 08112223334);

SELECT * FROM admins;

-- This is the products table that references the admin and categories table
CREATE TABLE PRODUCTS (
		id INT NOT NULL AUTO_INCREMENT,
		name VARCHAR(100) NOT NULL,
		description VARCHAR(255) NOT NULL,
		image BLOB,
		unit_price DECIMAL (10,2),
		stock_level VARCHAR(50),
        created_by INT NOT NULL,
        categories_id INT NOT NULL,
		status VARCHAR(50),
		primary key (id),
        foreign key(created_by) REFERENCES admins(id),
        foreign key(categories_id) REFERENCES categories(id)
);

SHOW TABLES;
SELECT * FROM products;
INSERT INTO products (name, description, image, unit_price, stock_level, created_by, categories_id, status)
VALUES 
		('Mira dress', 'Perfect for every outing', 'Mira_image', 7000.00, '5 pieces', 4, 2, 'in stock'),
		('Adara danshiki', 'Ideal for casual wear', 'adara_danshiki', 6500.00, '3 pieces', 2, 1, 'limited stock'),
		('Bella dress', 'The bella dress is designed to enhance the female silhouette','bella_dress', 10000.00, '2 pieces', 1, 4,'limited stock'),
		('Adire wrap top', 'It can be worn on trousers, skirts, or a sleeveless dress', 'adire_top', 6000.00, '6 pieces', 3, 3, 'in stock');

-- This is the registered customers' table
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
	firstname VARCHAR(30) NOT NULL,
	lastname VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(20) NOT NULL,
	primary key(id)
);

INSERT INTO customers (firstname, lastname, email, password)
VALUES
	('Bola', 'Adeonajobi', 'bola@gmail.com', '*****'),
	('Bisi', 'Coker', 'bisi@gmail.com','*****'), 
	('Titi', 'Banjo', 'titi@yahoo.com','*****'),
	('Tayo', 'Ojo', 'tayo@gmail.com', '*****');

SELECT * FROM customers;

-- This is the table for the contact addresses of the customers, it links back to the customers' table
CREATE TABLE contact_addresses (
	id INT NOT NULL AUTO_INCREMENT,
	customers_id INT NOT NULL,
	street_address VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	state VARCHAR(50) NOT NULL,
	zip_code INT,
	country VARCHAR(50) NOT NULL,
	phone_number BIGINT NOT NULL,
	primary key(id),
	foreign key(customers_id) REFERENCES customers (id)
);
SHOW TABLES;


INSERT INTO contact_addresses (customers_id, street_address, city, state, zip_code, country, phone_number)
VALUES 
	(3, 'F.H.E. B1 Extension, Elega', 'Abeokuta', 'Ogun state', 110111, 'Nigeria', 07032456776),
	(1, 'Crown heights junction', 'Ibadan', 'Oyo state', 110111, 'Nigeria', 07032456773),
	(4, 'Abiola way', 'Abeokuta', 'Ogun state', 110111, 'Nigeria', 07032456774),
	(2, 'Bodija', 'Ibadan', 'Oyo state', 110111, 'Nigeria', 07032456776);
    
SELECT * FROM contact_addresses;

-- this is the customer orders table; it references the customers
CREATE TABLE orders (
	id INT NOT NULL auto_increment,
	customer_order INT NOT NULL,
	order_amount DECIMAL (10,2),
	order_date DATETIME,
	primary key(id),
	foreign key(customer_order) REFERENCES customers (id)
);

INSERT INTO orders (customer_order, order_amount, order_date)
VALUES
	(2, 14000.00, NOW()),
	(3, 20000.00, NOW()),
	(1, 12000.00, NOW()),
	(4, 6500.00, NOW());

SELECT * FROM orders;
SHOW TABLES;

-- This is the items that are included in the order 
CREATE TABLE order_items (
	id INT NOT NULL AUTO_INCREMENT,
	order_items_lists INT NOT NULL,
	products_bought INT NOT NULL,
	quantity INT NOT NULL,
	unit_price DECIMAL (10,2) NOT NULL,
	total_amount DECIMAL(10,2) NOT NULL,
	primary key(id),
	foreign key(order_items_lists) REFERENCES orders (id),
	foreign key(products_bought) REFERENCES products (id)
);

INSERT INTO order_items (order_items_lists, products_bought, quantity, unit_price, total_amount)
VALUES
	(1, 1, 2, 7000.00, 14000.00),
	(2, 3, 2, 10000.00, 20000.00),
	(4, 2, 1, 6500.00, 6500.00),
	(3, 4, 2, 12000.00, 12000.00);

SELECT * FROM order_items;

SHOW TABLES
CREATE DATABASE StylebyBori;
SHOW DATABASES;
USE StylebyBori;

CREATE TABLE PRODUCTS (
		id INT NOT NULL AUTO_INCREMENT,
		name VARCHAR(100) NOT NULL,
		description VARCHAR(255) NOT NULL,
		image BLOB,
		unit_price DECIMAL (10,2),
		stock_level VARCHAR(50),
        created_by VARCHAR(50) NOT NULL,
        categories VARCHAR(50) NOT NULL,
		status VARCHAR(50),
		primary key (id)
);

SHOW TABLES;
SELECT * FROM products;
INSERT INTO products (name, description, image, unit_price, stock_level, created_by, categories, status)
VALUES 
		('Mira dress', 'Perfect for every outing', 'Mira_image', 7000.00, '5 pieces', 'Tola', 'dresses', 'in stock'),
		('Adara danshiki', 'Ideal for casual wear', 'adara_danshiki', 6500.00, '3 pieces', 'Bimbo', 'dresses', 'limited stock'),
		('Bella dress', 'The bella dress is designed to enhance the female silhouette','bella_dress', 10000.00, '2 pieces', 'Segun', 'office wear','limited stock'),
		('Adire wrap top', 'It can be worn on trousers, skirts, or a sleeveless dress', 'adire_top', 6000.00, '6 pieces', 'Sade', 'tops', 'in stock');

CREATE TABLE categories (
		id INT NOT NULL AUTO_INCREMENT,
        products_id INT NOT NULL,
		category VARCHAR(50) NOT NULL,
		created_at DATETIME NOT NULL,
		primary key(id),
		foreign key(products_id) REFERENCES products(id)
);

INSERT INTO categories (products_id, category, created_at)
VALUES
		(2, 'dresses', now()),
		(1, 'dresses', now()),
		(4, 'tops', now()),
		(3, 'office wear', now());
SELECT * FROM categories;

CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
	products_lists_id INT NOT NULL,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(30) NOT NULL,
	password VARCHAR(50) NOT NULL,
	phone_number BIGINT NOT NULL,
	primary key(id),
	foreign key(products_lists_id) REFERENCES products(id)
);

INSERT INTO admins (products_lists_id, name, email, password, phone_number)
VALUES 
	(3, 'Segun', 'segun@gmail.com', '*****', 08112223334),
	(2, 'Bimbo', 'bimbo@yahoo.com', '*****', 08112223334),
	(4, 'Sade', 'sade@gmail.com', '*****', 08112223334),
	(1, 'Tola', 'tola@gmail.com', '*****', 08112223334);

SELECT * FROM admins;

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
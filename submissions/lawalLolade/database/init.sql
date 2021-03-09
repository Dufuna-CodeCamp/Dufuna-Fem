/* create database for flawa */
CREATE DATABASE flawa;
USE flawa;

/* creating a table for product categories */
CREATE TABLE product_categories (
	id INT NOT NULL AUTO_INCREMENT,
	categories VARCHAR (50) NOT NULL,
	created_at DATETIME NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO product_categories (categories, created_at)
VALUES 
	('birthdays', now()),
	('occasions', now()),
	('flowerPlants', now());
	
    
SELECT * FROM product_categories;

/* Creating a table for admin users with eligibility to create products and manage store*/ 
CREATE TABLE admin_users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(20) NOT NULL,
	phonenumber VARCHAR(20) NOT NULL,
	created_at DATETIME NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO admin_users (name, email, password, phonenumber, created_at) 
VALUES
	('Nifemi Itiola', 'nifemiitiola@flawa.com', 'nifemi1234', '08123456789', now()),
	('Ayobami Ajakaye', 'ayobamiajakaye@flawa.com', 'ajakiakia1234', '08123456789', now()),
	('Akinbola Akinleye', 'akinakinleye@flawa.com', 'akin1234', '08123456789', now()),
	('Signs Ogundare', 'signsogundare@flawa.com', 'signs1234', '08123456789', now());

/* creating a product table */
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	admin_users_id INT NOT NULL, /* links products to the admin user who uploaded the product using the admin's id */
	product_categories_id INT NOT NULL, /* links products to categories table using the categories id */
	product_name VARCHAR(50) NOT NULL,
	product_description VARCHAR(255) NOT NULL,
	product_image BLOB(255) NOT NULL,
	unit_price DECIMAL (15,2) NOT NULL,
	stock_level VARCHAR(20) NOT NULL,
	product_status VARCHAR(50) NOT NULL,
	created_at DATETIME NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (admin_users_id) REFERENCES admin_users (id),
	FOREIGN KEY (product_categories_id) REFERENCES product_categories (id)
);


INSERT INTO products (admin_users_id, product_categories_id, product_name, product_description, product_image, unit_price, stock_level, product_status, created_at)
VALUES
	(1, 2, 'Cherry Blossom', 'A feminine arrangement of pale pink Asiatic Lilies alongside hot pink carnations, pink and white two tone spray carnations and white Freesias.', 'C:\Users\Mr L.O. Lawal\Desktop\Dufuna-Fem\submissions\lawalLolade\HTML\images\Prod2.jpeg', 15000, 8, 'in stock', now()),
    (2, 1, 'Carnation', 'As vibrant as they are majestic, carnations cater to the joy of all through their color and fragrance.', 'C:\Users\Mr L.O. Lawal\Desktop\Dufuna-Fem\submissions\lawalLolade\HTML\images\Carnation4.png', 5000, 12, 'in stock', now());

SELECT * FROM products;

/* Creating a table for registered customers*/
CREATE TABLE registered_customers (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(25) NOT NULL,
	last_name VARCHAR(25) NOT NULL,
	email_address VARCHAR(50) NOT NULL,
	password VARCHAR(20) NOT NULL,
	created_at DATETIME NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO registered_customers (first_name, last_name, email_address, password, created_at) 
VALUES
	('Ruth', 'Ashaolu', 'ruthashaolu@gmail.com', 'ruth1234', now()),
	('Lara', 'Wasiu', 'larawasiu@gmail.com', 'lara1234', now()),
	('Temi', 'Adefope', 'temiadefope@gmail.com', 'temi1234', now());

SELECT * FROM registered_customers;

/* creating a table for registered customers addresses */
CREATE TABLE customers_addresses (
	id INT NOT NULL AUTO_INCREMENT,
	registered_customers_id INT NOT NULL, /*links the addresses to each registered customers using the registered customers id*/
	street_address VARCHAR(255) NOT NULL,
	city VARCHAR(30) NOT NULL,
	state  VARCHAR(30) NOT NULL,
	zip_code INT(10),
	country VARCHAR(40) NOT NULL,
	phone_number VARCHAR (20) NOT NULL,
	created_at DATETIME NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (registered_customers_id) REFERENCES registered_customers (id)
);

INSERT INTO customers_addresses (registered_customers_id, street_address, city, state, zip_code, country, phone_number, created_at) 
VALUES
	(2, '10 Iyana Iyesi', 'Abeokuta', 'Ogun', '110001', 'Nigeria', '07012345678', now()),
	(1, '5 Alagbaka', 'Akure', 'Ondo', '340001', 'Nigeria', '07012345678', now()),
	(3, '15 Balogun', 'Ikeja', 'Lagos', '100001', 'Nigeria', '07012345678', now());

SELECT * FROM customers_addresses;

/* creating a table for customer orders */
CREATE TABLE customer_orders (
	id INT NOT NULL AUTO_INCREMENT,
	registered_customers_id INT NOT NULL,
	order_amount DECIMAL (15,2) NOT NULL,
	created_at DATETIME NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (registered_customers_id) REFERENCES registered_customers (id)
);

INSERT INTO customer_orders (registered_customers_id, order_amount, created_at) 
VALUES
	(1, 54000.00, now()),
	(3, 17250.00, now()),
	(2, 36000.00, now());

SELECT * FROM customer_orders;

/*creating a table for order items to display each items ordered by each customer */
CREATE TABLE order_items (
	id INT NOT NULL AUTO_INCREMENT,
	customer_orders_id INT NOT NULL,
	products_id INT NOT NULL,
	quantity INT NOT NULL,
	unit_prices DECIMAL (15,2) NOT NULL,
	total_amount DECIMAL (15,2) NOT NULL,
	created_at DATETIME NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (customer_orders_id) REFERENCES customer_orders (id),
	FOREIGN KEY (products_id) REFERENCES products (id)
);

INSERT INTO order_items (customer_orders_id, products_id, quantity, unit_prices, total_amount, created_at) 
VALUES
	(1, 1, 2, 30000.00, 94000.00, now()),
	(2, 1, 1, 15000.00, 45000.00, now()),
	(3, 2, 1, 15000.00, 56000.00, now());

SELECT * FROM order_items;

SHOW TABLES;

UPDATE products
SET product_image = 'https://images.bunches.co.uk/products/large/spring-garden-1.jpg'
WHERE id = 1;

SELECT * FROM products;

UPDATE products
SET product_image = 'https://images.bunches.co.uk/products/large/spring-roses-1.jpg'
WHERE id = 2;


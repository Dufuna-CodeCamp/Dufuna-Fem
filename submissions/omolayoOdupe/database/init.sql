/* creating busybasket database*/
CREATE DATABASE busybasket;
USE busybasket;


/* details of product categories/table */
CREATE TABLE product_categories (
	id INT NOT NULL AUTO_INCREMENT,
	categories VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO product_categories (categories)
VALUES 
	('Our Preffered Pack'), 
	('Wine and Confectionary Basket'), 
	('Just Fruits Basket'), 
	('Corporate Basket');
    
    
/* admin users details/table */
CREATE TABLE admin_users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(30) NOT NULL,
	phonenumber VARCHAR(40) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO admin_users (name, email, password, phonenumber)
VALUES 
	('John Mikel', 'johnmikel@busybasket.com', 'mikel@4445', '08044456667'),
	('Tyler Perry', 'tylerperry@busybasket.com', 'perry@4443', '08044436666'),
	('Viola Davis', 'violadavis@busybasket.com', 'davis@4442', '08044426665');
    

	/* product details/table */
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
	product_description VARCHAR(255) NOT NULL,
	product_image BLOB,
	unit_price DECIMAL (10,2) NOT NULL,
	product_stock_level VARCHAR(50) NOT NULL,
	product_status VARCHAR(50) NOT NULL,
	categories_id INT NOT NULL, --  this links the products to categories
	admin_id INT NOT NULL, -- this links products to the admin uploader
	PRIMARY KEY (id),
	FOREIGN KEY (categories_id) REFERENCES product_categories (id), 
	FOREIGN KEY (admin_id) REFERENCES admin_users (id)
);

INSERT INTO products (product_name, product_description, product_image, unit_price, product_stock_level, product_status, categories_id, admin_id)
VALUES 
	('Our Preferred Pack', 'an already packed hamper with your favourite delight', '', 25000.00, 4, 'in stock', 1, 1),
	('Wine and Confectionary Basket', 'alcholic or non alcholic wine with confectioneries', '', 30000.00, 5, 'in stock', 2, 1);


	/* registered customers details/table */
CREATE TABLE registered_customers (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO registered_customers (first_name, last_name, email, password) 
VALUES
	('Funke', 'Akindele', 'funkeakindele@gmail.com', 'akindele1234'),
	('Yemi', 'Alade', 'yemialade@yahoo.com', 'alade1234'),
	('Tomie', 'Balogun', 'tomiebalogun@gmail.com', 'balogun1234'),
	('Beverly', 'Naya', 'beverlynaya@gmail.com', 'naya1234');
    
    
    
    /* registered customers contact address details/table */
CREATE TABLE customers_addresses (
	id INT NOT NULL AUTO_INCREMENT,
	street VARCHAR(100) NOT NULL,
	city VARCHAR(50) NOT NULL,
	state  VARCHAR(50) NOT NULL,
	zip_code VARCHAR(50),
	country VARCHAR(50) NOT NULL,
	phonenumber VARCHAR (40) NOT NULL,
	customers_id INT NOT NULL, -- this links address to registered customers
	PRIMARY KEY (id),
	FOREIGN KEY (customers_id) REFERENCES registered_customers (id)
);

INSERT INTO customers_addresses (street, city, state, zip_code, country, phonenumber, customers_id) 
VALUES
	('20 Beverly Hill', 'Ikeja', 'Lagos', '44444', 'Nigeria','08022235556','1'),
	('12 London Hill', 'Victoria Island', 'Lagos','44444', 'Nigeria','08022245557','2'),
    ('32 South Hill', 'Lekki Ajah', 'Lagos','44444', 'Nigeria','08022255558','3'),
    ('09 West Hill', 'Ikeja', 'Lagos', '44444', 'Nigeria', '08022265559','4');
    
    
    
     /* details/table for Orders */
CREATE TABLE customer_orders (
	id INT NOT NULL AUTO_INCREMENT,
	customers_id INT NOT NULL,
	amount DECIMAL (10,2) NOT NULL,
	created_at DATETIME NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (customers_id) REFERENCES registered_customers (id) 
);

INSERT INTO customer_orders (customers_id, amount, created_at) 
VALUES
	(1, 25000.00, now()),
	(2, 15000.00, now()),
	(3, 20000.00, now()),
    (4, 15000.00, now());



     /* details/table for Ordered Items */
CREATE TABLE ordered_items (
	id INT NOT NULL AUTO_INCREMENT,
	quantity INT NOT NULL,
	unit_prices INT NOT NULL,
	total_amount DECIMAL(10,2) NOT NULL,
	order_id INT NOT NULL,
	product_id INT NOT NULL, -- this links product to ordered items
	PRIMARY KEY (id),
	FOREIGN KEY (order_id) REFERENCES customer_orders (id),
	FOREIGN KEY (product_id) REFERENCES products (id)
);

INSERT INTO ordered_items (quantity, unit_prices, total_amount, order_id, product_id) 
VALUES
	(1, 25000, 25000.00, 1, 1),
	(1, 30000, 30000.00, 2, 2),
	(1, 15000, 15000.00, 3, 1),
    (1, 20000, 20000.00, 4, 2); 

SHOW TABLES;







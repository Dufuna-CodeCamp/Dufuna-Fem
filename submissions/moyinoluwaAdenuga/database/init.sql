CREATE DATABASE amod;
USE amod;


-- Created product categories table
CREATE TABLE product_categories (
	id INT NOT NULL AUTO_INCREMENT,
	categories VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO product_categories (categories)
VALUES ('tops'), ('skirts'), ('gowns'), ('trousers'), ('jumpsuit');


-- Created admin info table
CREATE TABLE admin_users (
	id INT NOT NULL AUTO_INCREMENT,
	admin_name VARCHAR(30) NOT NULL,
	admin_email VARCHAR(40) NOT NULL,
	admin_password VARCHAR(12) NOT NULL,
	admin_phone_number VARCHAR(15) NOT NULL,
    created_at DATETIME NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO admin_users (admin_name, admin_email, admin_password, admin_phone_number, created_at)
VALUES ('Moyinoluwa Adenuga', 'dayoh14@gmail.com', '1234Asdf', '08123354008', now());


-- Created products table
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	product_category_id INT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	product_description VARCHAR(1000) NOT NULL,
	product_image BLOB(150) NOT NULL,
	product_unit_price DECIMAL(10, 2) NOT NULL,
	product_stock INT NOT NULL,
	product_status ENUM('in stock', 'out of stock', 'low stock' ) NOT NULL,
	admin_username_id INT NOT NULL,
	created_at DATETIME NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (product_category_id) REFERENCES product_categories(id),
	FOREIGN KEY (admin_username_id) REFERENCES admin_users(id)
);

INSERT INTO products (product_category_id, product_name, product_description, product_image, product_unit_price, product_stock, product_status, admin_username_id, created_at)
VALUES 
    (1, 'Laced Ankara top', 
    'A simple and classy wear for all occasions. This top is a clothing that can be worn at all seasons. 
    It is made of light-weight material which makes it comfortable to wear. It is made up of high quality
    fabric which guarantees a long life span for the cloth. It does not fade or change color with wash.', 
    'images/amod1.png', 5000, 20, 'in stock', 1, now()),
    (1, 'Off-shoulder Ankara Top', 
	'A simple and classy wear for all occasions. This top is a clothing that can be worn at all seasons. 
	It is made of light-weight material which makes it comfortable to wear. It is made up of high quality
	fabric which guarantees a long life span for the cloth. It does not fade or change color with wash.', 
	'images/amod2.png', 5000, 30, 'in stock', 1, now()),
	(1, 'Ankara Top with Belt', 
	'A 2-in-one wear: It can be styled with or without belt. It is made of light-weight material which makes it comfortable to wear. It is made up of high quality
	fabric which guarantees a long life span for the cloth. It does not fade or change color with wash.', 
	'images/amod3.png', 4000, 25, 'in stock', 1, now());


-- Created registered customers table
CREATE TABLE registered_customers (
	id INT NOT NULL AUTO_INCREMENT,
    customer_firstname VARCHAR(20) NOT NULL,
    customer_lastname VARCHAR(20) NOT NULL,
    customer_email VARCHAR(40) NOT NULL,
    customer_password VARCHAR(12) NOT NULL,
    registered_at DATETIME NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO registered_customers (customer_firstname, customer_lastname, customer_email, customer_password, registered_at)
VALUES ('Omowunmi', 'Adebusuyi', 'wunmi@gmail.com', 'wunmytE123', now()),
('Funmilayo', 'Ayeni', 'funmayen@gmail.com', 'fuNmi123', now());


-- Created registered customers address table
CREATE TABLE registered_customers_addresses (
	id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    street_address VARCHAR(50) NOT NULL,
    city VARCHAR(20) NOT NULL,
    state VARCHAR(20) NOT NULL,
    zip_code VARCHAR(20),
    country VARCHAR(30) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES registered_customers (id)
);

INSERT INTO registered_customers_addresses (customer_id, street_address, city, state, country, phone_number, created_at)
VALUES (1, '2, AD Street, Shagari Estate', 'Ipaja', 'Lagos', 'Nigeria', '08132453671', now()),
(2, 'Plot 20, Sobowale Crescent', 'Ikorodu', 'Lagos', 'Nigeria', '08093745473', now());


-- Created customer order table
CREATE TABLE customer_orders (
	id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_amount DECIMAL(10,2) NOT NULL,
    ordered_on DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES registered_customers (id)
);

INSERT INTO customer_orders (customer_id, order_amount, ordered_on)
VALUES (1, 20000, now()),
(2, 14000, now());


-- Created customer order item table
CREATE TABLE customer_items (
	id INT NOT NULL AUTO_INCREMENT,
    customer_order_id INT NOT NULL,
    products_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_prices DECIMAL(10,2) NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_order_id) REFERENCES customer_orders (id),
    FOREIGN KEY (products_id) REFERENCES products (id)
);

INSERT INTO customer_items (customer_order_id, products_id, quantity, unit_prices, total_amount, created_at)
VALUES (1, 1, 4, 5000, 20000, now()),
(2, 2, 2, 5000, 10000, now()),
(2, 3, 1, 4000, 4000, now());

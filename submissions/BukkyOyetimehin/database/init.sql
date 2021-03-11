-- Creating the Databse
CREATE DATABASE fashi_online_store;
SHOW DATABASES;

-- Creating the Tables

USE fashi_online_store;
-- Categories Table
CREATE TABLE categories (
	id INT NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(100) NOT NULL,
    created DATETIME,
	PRIMARY KEY (id)	
);
ALTER TABLE categories CHANGE created  created_at DATETIME;
SHOW COLUMNS FROM categories;

INSERT INTO categories (category_name, created_at)
VALUES ('Men Apparel', now()),
('Women Apparel', now()),
('Men Accessories', now()),
('Women Accessories', now()),
('Sports & Outdoors', now());

SELECT * FROM categories;

-- AdminLogin Table
CREATE TABLE admin_Login (
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(40) NOT NULL,
    admin_email VARCHAR (30) NOT NULL,
    admin_password VARCHAR(20) NOT NULL,
    admin_phone VARCHAR(30) NOT NULL,  
    created_at DATETIME,
	PRIMARY KEY (id)
    );
USE fashi_online_store;
ALTER TABLE admin_Login
RENAME TO admin_login;
SHOW TABLES;

INSERT INTO admin_login (full_name, admin_email, admin_password, admin_phone, created_at)
VALUES ('Ben Ellison', 'bellisongmail.com', 'info@1234', '950-830-3729', now()),
('Danika Marshall', 'dmarshall@gmail.com', 'workflow%#1105', '226-813-4145', now()),
('Linda McGrath', 'lmcgrath@gmail.com', 'shalom**203', '430-646-2808', now());

SELECT * FROM admin_login;

-- Products Table
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
    Brand VARCHAR(100), 
    category_id INT NOT NULL,
	product_description VARCHAR(250) NOT NULL,
	product_image BLOB NOT NULL,
	product_price DECIMAL(10,2) NOT NULL,    
    stock_level INT NOT NULL,
    product_status VARCHAR(40) NOT NULL,
    admin_login_id INT NOT NULL,
    created_at DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY (category_id) REFERENCES categories (id),
	FOREIGN KEY (admin_login_id) REFERENCES admin_login (id)
);
USE fashi_online_store;
ALTER TABLE products CHANGE Brand brand VARCHAR(100);
SHOW COLUMNS FROM products;

USE fashi_online_store;
ALTER TABLE products
DROP COLUMN brand;
SHOW COLUMNS FROM products;

INSERT INTO products (product_name, category_id, product_description,
 product_image, product_price, stock_level, product_status, admin_login_id, created_at)
VALUES ('Blue White Collar Tee Shirt', '1', 
'This is a shirt you can put on all day.
This polka dot designed shirt guarantees maximum comfort for whoever wears it.',
'../html/images/shirt.jpg', '5000', '100', 'in stock', 1, now()),
('Red Tennis Shoes', 5, 'Original pair of Tennis Shoes. Light, Snappy and Fast; Easy ON/EASY OFF',
'../html/images/shoes2.jpg', '10000', '200', 'in stock', 2, now()),
('Black Office Shoes', 3, '100% Synthetic, Synthetic sole, Classic Lace-up, Textile lining',
   '../html/images/shoes3.jpg', '25000', '0', 'out of stock', 3, now()),
('Red High-heeled Shoes', 4, 'Faux Suede, Court heel, Pointed toe, Slip-on',
'../html/images/shoes.jpg', '18000', '50', 'low stock', 2, now());
  
  SELECT * FROM products;
  
   -- Customers Table
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(20) NOT  NULL,
	last_name VARCHAR(30) NOT NULL,
	customer_email VARCHAR(30) NOT NULL,   
	customer_password VARCHAR (20) NOT NULL,
    created_at DATETIME,
    PRIMARY KEY(id)
);

INSERT INTO customers (first_name, last_name, customer_email, customer_password, created_at)
VALUES ('Ben', 'Chapman', 'bchapman@yahoo.com', 'Chapb*1234', now()),
('Rhett', 'Buckland', 'rbuckland@gmail.com', 'Burkr@0834', now()),
('Catheryn', 'Terry', 'cterry@gmail.com', 'Ladyterry&052', now()),
('Lena', 'Clarkson', 'lclarkson@yahoo.com', 'biggylane+8712', now()),
('Ayoade', 'Oyetayo', 'ayotayo@gmail.com', 'rocketshow$$78', now()),
('Chandra', 'Parsons', 'cparsons@gmail.com', 'Parsonchan@7923', now());

SELECT * FROM customers;

-- Customers Addresses    
CREATE TABLE customers_addresses (
	id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
	street_address VARCHAR(40) NOT NULL,
	city VARCHAR(20) NOT NULL,
	state VARCHAR(20) NOT NULL,
	zip_code NCHAR (15),
    country VARCHAR(20) NOT NULL,  
    phone_number VARCHAR(30) NOT NULL,
    created_at DATETIME,
	PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers (id)
);
ALTER TABLE customers_addresses CHANGE zip_code zip_code NCHAR(10);
SHOW COLUMNS FROM customers_addresses;

INSERT INTO customers_addresses (customer_id, street_address, city, state, zip_code,
country, phone_number, created_at)
VALUES (1, '6, James Avenue', 'Hopkinsville', 'Syndney', '25289', 'Australia', '497-267-8777', now()),
(2, '243, Mayflower Street', 'Watertown', 'Pettstadt', '96175', 'Germany', '995-730-7439', now()),
(3, '921, Cardinal Court', 'Huntingdon', 'Pennsylvania', 16654, 'USA','954-824-5029', now()),
(4, '50, Westport Rd.', 'Los Angeles', 'California', '90003', 'USA', '774-155-2188', now()),
(5, '3 Aromire Street', 'Ikeja', 'Lagos', '100282', 'Nigeria', '234-80-4895-7676', now()),
(6, '44 Jones Road', 'Manchester', 'New Hampshire', '03104', 'USA', '226-813-4145', now());

SELECT * FROM customers_addresses;

-- Order Table
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
	customer_id INT NOT NULL,
    order_amount DECIMAL(10,2) NOT NULL,
   	created_at DATETIME,
	PRIMARY KEY (id),
	FOREIGN KEY (customer_id) REFERENCES customers (id)
);
INSERT INTO orders (customer_id, order_amount, created_at)
VALUES (2, '10000', now()),
(4, '25000', now()),
(6, '15000', now()),
(1, '5000', now()),
(3, '20000', now());

SELECT * FROM orders;

CREATE TABLE order_items (
	id INT NOT NULL AUTO_INCREMENT,
	order_id INT NOT NULL,
	product_id INT NOT NULL,
    quantity INT NOT NULL,	
    unit_price DECIMAL(10,2) NOT NULL,
	total_amount DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);

INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_amount)
VALUES (1, 1, '2', '5000', '10000'),
(2, 2,'1', '10000', '20000'),
(3, 3, '1', '25000', '25000'),
(4, 4, '2', '18000', '36000'),
(5, 1, '4', '5000', '20000');

SELECT * FROM order_items;



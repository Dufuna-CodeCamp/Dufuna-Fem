-- create database
CREATE DATABASE louissa_store;

-- use database
USE louissa_store;

-- create categories table
CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

-- insert values into categories table
INSERT INTO categories(name)
VALUES ('Kitchen Equipments'), 
		('Furniture'), 
		('Food and Beverages');

-- create table for admin users
CREATE TABLE admin_users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email_address VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

-- insert values into admin users table
INSERT INTO admin_users (name, email_address, password, phone_number)
VALUES ('Eniola Martins', 'eniolamartins@mail.com', 'eniola001', '08132127878'),
		('Jumoke Ibidun', 'jumokeibidun@mail.com', 'jumoke001', '08100452084'),
        ('Sharon Mike', 'sharonmike@mail.com', 'sharon001', '08033888443');

-- create table for products
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(250) NOT NULL,
    imageUrl VARCHAR(250) NOT NULL,
    unit_price DECIMAL(19, 4) NOT NULL,
    category_id INT NOT NULL,
    creator_id INT NOT NULL,
    stock_level INT NOT NULL,
    status ENUM('in stock', 'out of stock', 'low stock') NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id)
        REFERENCES categories (id),
    FOREIGN KEY (creator_id)
        REFERENCES admin_users (id)
);

-- insert values into products table
INSERT INTO products (name, description, imageUrl, unit_price, category_id, creator_id, stock_level, status)
VALUES ('K32 electric kettle', 'make hot water reaily available when needed with K32 kettle', 'C:\\Users\\user\\Downloads\\bulb.jpg', 5000, 1, 2, 25, 'low stock'),
		('Golden Morn 500g', 'delicious golden morn, ready to eat at aytime!', 'C:\\Users\\user\\Downloads\\oranges.jpg', 500, 3, 1, 150, 'in stock');

-- create table for customers
CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email_address VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

-- insert values into customers table
INSERT INTO customers (first_name, last_name, email_address, password)
VALUES ('Michael', 'James', 'michaeljames@mail.com', 'michael002',
		('Olaoluwa', 'Nifemi', 'olaoluwanifemi@mail.com', 'olanifemi002'),
		('Ajayi', 'Mary', 'ajayimary@mail.com', 'mary002');

-- create table for customers addresses
CREATE TABLE customers_addresses (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    street_address VARCHAR(50) NOT NULL,
    city VARCHAR(20) NOT NULL,
    state VARCHAR(20) NOT NULL,
    zip_code VARCHAR(20),
    country VARCHAR(20) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers (id)
);

-- insert values into customers addresses table
INSERT INTO customers_addresses (customer_id, street_address, city, state, zip_code, country, phone_number)
VALUES (1, '23 Ayeni Close, Ile-Tuntun', 'Ibadan', 'Oyo', '100091', 'Nigeria' , '08102347878'),
		(2, '4 Abiola Estate', 'Lekki', 'Lagos', '100001', 'Nigeria' , '08146893667'),
		(3, '17 Fagbola Street, Isale General', 'Ilesha', 'Osun','100023', 'Nigeria' , '08134567832');

-- create table for orders
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    amount DECIMAL(19, 4) NOT NULL,
    customer_id INT NOT NULL,
    created_at DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id)
        REFERENCES customers (id)
);

-- insert values into orders tale
INSERT INTO orders (amount, customer_id, created_at)
VALUES(30000, 2, now()),
		(20000, 3, now()),
		(2500, 1, now());

-- create table for order items     
CREATE TABLE order_items (
    id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(19 , 4 ) NOT NULL,
    total_amount DECIMAL(19 , 4 ) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id)
        REFERENCES orders (id),
    FOREIGN KEY (product_id)
        REFERENCES products (id)
);

-- insert values into order items
INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_amount)
VALUES (1, 1, 4, 5000, 20000),
		(1, 2, 2, 5000, 10000),
		(2, 1, 4, 5000, 20000),
		(3, 2, 5, 500, 2500);


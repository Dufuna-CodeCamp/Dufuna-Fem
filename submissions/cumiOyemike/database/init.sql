/* create database */
CREATE DATABASE infinity_sparkles;
SHOW DATABASES;

/* use the created infinity_sparkles database*/
USE infinity_sparkles;

/*create table for product categories*/
CREATE TABLE product_categories (
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id)
);
/*inserting values into the product_categories table*/
INSERT INTO product_categories (category, created_at)
VALUES ('Earrings', now()),
('Necklaces', now());

/*create table for admin users*/
CREATE TABLE admin_users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id)
);
/*inserting values into the admin_users table*/
INSERT INTO admin_users (name, email, password, phone_number, created_at)
VALUES ('Shola Daniel', 'sholadan@mail.com', 'ewfwerge66', '08123456789', now()),
('Ada Chukwuma', 'adachuks@mail.com', 'rr54efffef', '09123456789', now()),
('Hannah Adebayo', 'hanbayo@mail.com', 'gfegtgt', '07123456789', now());

/*create table for registered customers*/
CREATE TABLE registered_customers (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(20) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id)
);
/*inserting values into the registered_customers table*/
INSERT INTO registered_customers (first_name, last_name, email, password, created_at)
VALUES ('Kunle', 'James', 'kunniejay@mail.com', 'safvcteeg', now()),
('Bello', 'Hassan', 'bellohassan@mail.com', '3fffffgwaq', now()),
('Oghenetega', 'Esiri', 'tegaesiri@mail.com', 'vbmukgfjnfi', now());

/*create table for contact addresses of registered customers*/
CREATE TABLE contact_addresses (
    id INT NOT NULL AUTO_INCREMENT,
    street VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(40) NOT NULL,
    country VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    registered_customer_id INT NOT NULL, /* id from registered_customers table */
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (registered_customer_id) REFERENCES registered_customers(id) /* this links the customer to the registered_customers table */
);
/*inserting values into the contact_addresses table*/
INSERT INTO contact_addresses (street, city, state, zip_code, country, phone_number, registered_customer_id, created_at)
VALUES ('Church street', 'Port Harcourt', 'Rivers', '500272', 'Nigeria', 09343667658, 1, now()),
('Ike street', 'Asaba', 'Delta', '320242', 'Nigeria', 0754326489, 2, now()),
('Serena avenue', 'Ibadan', 'Oyo', '200223', 'Nigeria', 0854363267, 3, now());


/*create table for products*/
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_category_id INT NOT NULL, /* this id is from the product_categories table */
    admin_user_id INT NOT NULL, /* this id is from the admin_users table */
    product_name VARCHAR(100) NOT NULL,
    product_description VARCHAR(255) NOT NULL,
    product_image BLOB NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    quantity_available INT NOT NULL,
    status VARCHAR(20) NOT NULL, 
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_category_id) REFERENCES product_categories(id), /* this links the product to the product_categories table */
    FOREIGN KEY (admin_user_id) REFERENCES admin_users(id) /* this links the product to the admin_users table */
);
/*inserting values into the products table*/
INSERT INTO products (product_category_id, admin_user_id, product_name, product_description, product_image, unit_price, quantity_available, status, created_at)
VALUES (1, 1, 'Amethyst diamond Earrings', 'Add a sparkle to your ears by shopping our Marilyn Monroe collection baguette amethyst diamond earrings made with sterling silver and 18 carat gold plating.', '..html/images/img_6.jpg', 500, 2, 'in stock', now()),
(2, 2, 'Pearl and sapphire Necklace', 'Exquisite hand-made necklace', '../html/images/img-7.jpg', 99.99, 3, 'in stock', now());


/*create table for product orders*/
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    registered_customer_id INT NOT NULL, /* this id is from the registered_customers table */
    order_amount DECIMAL(10, 2) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (registered_customer_id) REFERENCES registered_customers(id) /* this links the orders to the registered_customers table */
);
/*inserting values into the orders table*/
INSERT INTO orders (registered_customer_id, order_amount, created_at)
VALUES (2, 500, now()),
(3, 199.98, now());

/*create table for order items*/
CREATE TABLE order_items (
    id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL, /* this id is from the orders table */
    product_id INT NOT NUll, /* this id is from the products table */
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    total_amount DECIMAL (10, 2) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders(id), /* this links the order items to the orders table */
    FOREIGN KEY (product_id) REFERENCES products(id) /* this links the order items to the products table */
);
/*inserting values into the order_items table*/
INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_amount, created_at)
VALUES (1, 1, 1, 500, 500, now()),
(2, 2, 2, 99.99, 199.98, now());


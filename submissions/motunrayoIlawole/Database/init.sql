CREATE DATABASE top_clothing;

use top_clothing;

/* Create the product categories table */
CREATE TABLE product_categories (
	id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL,
    primary key (id)
);

/* Insert into product categories table */
INSERT INTO product_categories (category, created_at)
VALUES ('Hats', now()), ('Sneakers', now()), ('Jackets', now()), ('Women', now()), ('Men', now());


/* Create a table for the admin users who are able to create products */
CREATE TABLE admin_users (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    phone_number VARCHAR(30) NOT NULL,
    created_at DATETIME NOT NULL,
    primary key (id)
);

INSERT INTO admin_users (name, email, password, phone_number, created_at)
VALUES ("Babatunde Akinlade", "babaakin@gmail.com", "thdhfbxjj56", "09085673456", now()),
("Joy Olowu", "jolowu@gmail.com", "hfggsbfjf76", "07085643214", now()),
("Folashade Odun", "folaodun@gmail.com", "iuygfbsvgd98", "070123476890", now());

/* Create a table for products */
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_category_id INT NOT NULL, /* id from the product_categories table */
    admin_user_id INT NOT NULL, /* id from the admin_users table */
	product_name VARCHAR(100) NOT NULL,
    product_description VARCHAR(255) NOT NULL,
    product_image BLOB NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    quantity_available INT NOT NULL,
    status VARCHAR(40) NOT NULL,
    created_at DATETIME NOT NULL,
    primary key (id),
    foreign key (product_category_id) references product_categories(id), /* links the product_categories table and products table */
    foreign key (admin_user_id) references admin_users(id) /* links the admin_users table and products table */
);

INSERT INTO products (product_category_id, admin_user_id, product_name, product_description, product_image, unit_price, quantity_available, status, created_at)
VALUES (1, 1, "Brown Brim", "A sturdy brown hat that goes with just about anything. The strength of the material ensures that it is long-lasting from the moment it gets off the shelf.", "/Users/motunrayoilawole/Documents/Dufuna/Dufuna-Fem/submissions/motunrayoIlawole/html/assets/brown-brim.png", 150, 3, "in stock", now()),
(1, 2, "Brown Cowboy", "The only way to go western!", "/Users/motunrayoilawole/Documents/Dufuna/Dufuna-Fem/submissions/motunrayoIlawole/html/assets/brown-cowboy.png", 230, 2, "in stock", now());

/* Create a table for registered customers */
CREATE TABLE registered_customers (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email_address VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL,
    primary key (id)
);

INSERT INTO registered_customers (first_name, last_name, email_address, password, created_at)
VALUES ("Karimu", "Ikotun", "karimukotun@gmail,com", "jdhgfbbdbd675", now()),
("Fola", "Agoro", "folagoro@gmail.com", "ldjhfbdvdgd439", now());

/* Create a table for customer addresses */
CREATE TABLE customer_addresses (
	id INT NOT NULL AUTO_INCREMENT,
    registered_customer_id INT NOT NULL, /* id from the registered_customers table */
    street_address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zipcode VARCHAR(50),
    country VARCHAR(30) NOT NULL,
    phone_number VARCHAR(30) NOT NULL,
    created_at DATETIME NOT NULL,
    primary key (id),
    foreign key (registered_customer_id) references registered_customers(id)
);

INSERT INTO customer_addresses (registered_customer_id, street_address, city, state, zipcode, country, phone_number, created_at)
VALUES (1, "45, Karimu-kotun street", "Ikeja", "Lagos", "100212", "Nigeria", "08034568907", now()),
(2, "3, Kuti Close", "Abuja", "FCT", "900108", "Nigeria", "07016748902", now());

/* Create a table for customers' orders */
CREATE TABLE customer_orders (
	id INT NOT NULL AUTO_INCREMENT,
    registered_customer_id INT NOT NULL, /* id from the registered_customers table */
    order_amount DECIMAL(10, 2) NOT NULL,
    created_at DATETIME NOT NULL,
    primary key (id),
    foreign key (registered_customer_id) references registered_customers(id)
);

INSERT INTO customer_orders (registered_customer_id, order_amount, created_at)
VALUES (1, 460, now()),
(2, 150, now());

/* Create a table for the customer order items */
CREATE TABLE customer_order_items (
	id INT NOT NULL AUTO_INCREMENT,
    customer_order_id INT NOT NULL, /* id from the customer_orders table */
    customer_product_id INT NOT NULL, /* id from the products table */
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    created_at DATETIME NOT NULL,
    primary key (id),
    foreign key (customer_order_id) references customer_orders(id),
    foreign key (customer_product_id) references products(id)
);

INSERT INTO customer_order_items (customer_order_id, customer_product_id, quantity, unit_price, total_amount, created_at)
VALUES (1, 2, 2, 230, 460, now()),
(2, 1, 1, 150, 150, now());
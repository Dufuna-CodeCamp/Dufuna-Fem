CREATE DATABASE top_clothing;

use top_clothing;

/* Create the product categories table */
CREATE TABLE product_categories (
	id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL,
    primary key (id)
);

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

/* Create a table for products */
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_category_id INT NOT NULL, /* id from the product_categories table */
    admin_user_id INT NOT NULL, /* id from the admin_users table */
	product_name VARCHAR(100) NOT NULL,
    product_description VARCHAR(255) NOT NULL,
    product_image BLOB(255) NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    quantity_available INT NOT NULL,
    status VARCHAR(40) NOT NULL,
    created_at DATETIME NOT NULL,
    primary key (id),
    foreign key (product_category_id) references product_categories(id), /* links the product_categories table and products table */
    foreign key (admin_user_id) references admin_users(id) /* links the admin_users table and products table */
);

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

/* Create a table for customers' orders */
CREATE TABLE customer_orders (
	id INT NOT NULL AUTO_INCREMENT,
    registered_customer_id INT NOT NULL, /* id from the registered_customers table */
    order_amount DECIMAL(10, 2) NOT NULL,
    created_at DATETIME NOT NULL,
    primary key (id),
    foreign key (registered_customer_id) references registered_customers(id)
);

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
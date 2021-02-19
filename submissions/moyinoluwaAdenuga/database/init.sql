CREATE DATABASE amod;
USE amod;

-- Created product categories table
CREATE TABLE product_categories (
	id INT NOT NULL AUTO_INCREMENT,
	categories VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
);

-- Created admin info table
CREATE TABLE admin_users (
	id INT NOT NULL AUTO_INCREMENT,
	admin_name VARCHAR(30) NOT NULL,
	admin_email VARCHAR(40) NOT NULL,
	admin_password VARCHAR(12) NOT NULL,
	admin_phone_number VARCHAR(15) NOT NULL,
    log_in_date DATETIME NOT NULL,
	PRIMARY KEY (id)
);

-- Created products table
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	product_category_id INT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	product_description VARCHAR(250) NOT NULL,
	product_image BLOB(150) NOT NULL,
	product_unit_price DECIMAL(10, 2) NOT NULL,
	product_stock INT NOT NULL,
	product_status VARCHAR(20) NOT NULL,
	admin_username_id INT NOT NULL,
	product_added_at DATETIME NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (product_category_id) REFERENCES product_categories(id),
	FOREIGN KEY (admin_username_id) REFERENCES admin_users(id)
);

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

-- Created registered customers address table
CREATE TABLE registered_addresses (
	id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    street_address VARCHAR(50) NOT NULL,
    city VARCHAR(20) NOT NULL,
    state VARCHAR(20) NOT NULL,
    zip_code VARCHAR(20),
    country VARCHAR(30) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    added_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES registered_customers (id)
);

-- Created customer order table
CREATE TABLE customer_order (
	id INT NOT NULL,
    customer_id INT NOT NULL,
    order_amount DECIMAL(10,2) NOT NULL,
    ordered_on DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES registered_customers (id)
);

-- Created customer order item table
CREATE TABLE customer_item (
	id INT NOT NULL,
    customer_order_id INT NOT NULL,
    products_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_prices DECIMAL(10,2) NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_order_id) REFERENCES customer_order (id),
    FOREIGN KEY (products_id) REFERENCES products (id)
);

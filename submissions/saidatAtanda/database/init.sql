CREATE DATABASE venister;
USE venister;

-- Product Categories table

CREATE TABLE categories (
    category_id int auto_increment NOT NULL,
    category_name varchar(100) NOT NULL,
    primary key(category_id)
);

-- Admin Users table

CREATE TABLE admins (
    admin_id int auto_increment NOT NULL,
    `name` varchar(150) NOT NULL,
    email_address varchar(100) NOT NULL,
    `password` varchar(100) NOT NULL,
    phone_number varchar(100) NOT NULL,
    primary key(admin_id)
);

-- Products table

CREATE TABLE products (
    product_id int auto_increment NOT NULL,
    category_id int NOT NULL,    
    admin_id int NOT NULL,
    `name` varchar(100) NOT NULL,
    `description` varchar(250) NOT NULL,
    image varchar(250) NOT NULL,
    unit_price decimal(10,5) NOT NULL,
    stock_level int default(1) NOT NULL,
    `status` enum('in stock', 'out of stock', 'low stock') NOT NULL,
    primary key(product_id),
    foreign key (category_id) REFERENCES categories(category_id),
    foreign key (admin_id) REFERENCES admins(admin_id)
);

-- Customer details table

CREATE TABLE customers (
    customer_id int auto_increment NOT NULL,
    first_name varchar(100) NOT NULL,
	last_name varchar(100) NOT NULL,
    email_address varchar(100) NOT NULL,
    `password` varchar(100) NOT NULL,
    primary key(customer_id)
);

-- Customer Addresses table

CREATE TABLE customer_addresses (
    customer_address_id int auto_increment NOT NULL,
    customer_id int NOT NULL,
    street_address varchar(100) NOT NULL,
	city varchar(100) NOT NULL,
    state varchar(100) NOT NULL,
    zip_code varchar(100),
    country varchar(100) NOT NULL,
    phone_number varchar(100) NOT NULL,
    primary key(customer_address_id),
    foreign key (customer_id) REFERENCES customers(customer_id)
);

-- Orders table

CREATE TABLE orders (
    order_id int auto_increment NOT NULL,
    customer_id int NOT NULL,
    order_amount decimal(10,5) NOT NULL,
    created_at datetime default current_timestamp NOT NULL,
    primary key(order_id),
    foreign key (customer_id) REFERENCES customers(customer_id)
);

-- Order Items table

CREATE TABLE order_items (
    order_items_id int auto_increment NOT NULL,
    order_id int NOT NULL,
    product_id int NOT NULL,
    unit_price decimal(10,5) NOT NULL,
    quantity int NOT NULL,
    total_amount decimal(10,5) NOT NULL,
    primary key(order_items_id),
    foreign key (order_id) REFERENCES orders(order_id),
    foreign key (product_id) REFERENCES products(product_id)
);

SHOW TABLES; 
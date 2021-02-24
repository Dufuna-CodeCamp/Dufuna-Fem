// CREATE DATABASE
	CREATE DATABASE imma_classique;
	USE imma_classique;
    
// CREATE ADMINS TABLE
CREATE TABLE admins (
    admin_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(20) NOT NULL,
	phone_number VARCHAR(15) NOT NULL,
	PRIMARY KEY (admin_id)
);

// INSERT RECORD INTO ADMINS TABLE
INSERT INTO admins (name, email, password, phone_number)
VALUES  ('Hannah Donald', 'hannahdonald@gmail', 'july31', '+234808437228'),
	('Michael Jackson', 'mikejacson@yahoo.com', 'micson3', '+23490893144879'),
	('Donald Trump ', 'donaldtrump@sample.com', 'trump4life', '+2344903002'),	

// CREATE CATEGORIES TABLE
CREATE TABLE categories (
    category_id INT NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(50) NOT NULL,
	PRIMARY KEY (category_id)
);

// INSERT DATA INTO CATEGORIES TABLE
INSERT INTO categories (category_name)
VALUES 	('Bag'),
	('Belt'),
	('Wristwatch'),
    ('sunglasses');
					                   
// CREATE PRODUCTS TABLE
CREATE TABLE products (
    product_id INT NOT NULL AUTO_INCREMENT,
	category_id INT NOT NULL,
	admins_id INT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	product_description VARCHAR(250) NOT NULL,
	product_image BLOB,
	unit_price DECIMAL (10,2) NOT NULL,
    stock_level VARCHAR(50) NOT NULL,
    product_status VARCHAR(50) NOT NULL,
    PRIMARY KEY (product_id),
	FOREIGN KEY (category_id) REFERENCES categories (category_id),
	FOREIGN KEY (admins_id) REFERENCES admins (admin_id)
);

 // INSERT INTO PRODUCTS TABLE
INSERT INTO products (category_id, admins_id, product_name, product_description, product_image, unit_price, stock_level, product_status)
VALUES 	(1,2,'Belt', 'A classique leather for men and women', 'C:\Users\kajoe\Desktop\Dufuna-Fem\submissions\nwokejeme-immaculeta\html\Image\sku_brown_1_10.jpg', 8000, 6, 'in stock'),
    (1,1,'Wristwatch', 'A gold-plaited wristwatch for classique men and women', 'C:\Users\kajoe\Desktop\Dufuna-Fem\submissions\nwokejeme-immaculeta\html\Image\images1.jpg', 6000, 3, 'in stock');

// CREATE CUSTOMERS TABLE
CREATE TABLE customers (
	customer_id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(15) NOT NULL,
	PRIMARY KEY (customer_id)
);
        
// INSERT INTO CUSTOMERS TABLE
INSERT INTO customers (first_name, last_name, email, password)
	VALUES 	('Jennifer', 'Paul', 'jennypaul@gmail.com', 'december1'),
		('Philip', 'Thomas', 'philipthomas@gmail.com', 'desktop123'),
		('Josephine', 'Stone', 'josephinestoned@yahoo.com', 'background'),
		('Mercy David', 'mercydavida@gmail.com', 'david19', '+234810010255');

// CREATE CUSTOMERS ADDRESS TABLE 
CREATE TABLE customer_address (
	address_id INT NOT NULL AUTO_INCREMENT,
 	street VARCHAR(50) NOT NULL, 
 	city VARCHAR(40) NOT NULL, 
 	state VARCHAR(40) NOT NULL, 
 	zip_code INT, 
 	country VARCHAR(30) NOT NULL,
 	phone_number VARCHAR(20) NOT NULL,
 	customer_id INT NOT NULL,
 	PRIMARY KEY(address_id),
 	FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);

// INSERT INTO CUSTOMERS ADDRESS TABLE
INSERT INTO customer_address (customer_id, street, city, state, zip_code, country, phone_number)
VALUES  (1, '45 Rasaki oseni Street', 'Adebayo', 'Ekiti', 23444 , 'Nigeria', '0803508168'),
		(2, '45 King and Queen', 'Kubua', 'Abuja', 557654 , 'Nigeria', '08163243832'),
		(3, '12 A close first avenue', 'Festac', 'lagos', 432185 , 'Nigeria', '07033352641');
                    
// CREATE ORDER TABLE
CREATE TABLE orders (
	order_id INT NOT NULL AUTO_INCREMENT,
	order_amount DECIMAL(10,2) NOT NULL,
	order_created_at DATETIME,
	customer_id INT NOT NULL,
	PRIMARY KEY(order_id),
	FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);

// INSERT INTO ORDERS TABLE
INSERT INTO orders (order_amount, order_created_at, customer_id)
VALUES(6000, now(), 1),
	(8000, now(), 2),
	(6000, now(), 3);


// CREATE ORDER ITEMS 
CREATE TABLE order_items (
	item_id INT NOT NULL AUTO_INCREMENT,
	order_id INT NOT NULL, 
	product_id INT NOT NULL,
	quantity INT NOT NULL,
	unit_prices INT NOT NULL,
	total_amount DECIMAL(10,2) NOT NULL,
	PRIMARY KEY (item_id),
	FOREIGN KEY (order_id) REFERENCES orders (order_id),
	FOREIGN KEY (product_id) REFERENCES products (prduct_id)
);

//INSERT INTO ORDER ITEMS
INSERT INTO order_items(quantity, unit_prices, total_amount, order_id, item_id)
VALUES (3, 6000, 18000, 1, 3),
	(2, 8000, 160000, 2, 2),
	(1, 6000, 6000, 3, 1); 
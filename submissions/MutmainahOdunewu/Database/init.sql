
// CREATE DATABASE
    CREATE DATABASE sandal_by_mo
    USE sandals_by_mo


// CREATE ADMIN TABLE
CREATE TABLE admins (
		 admin_id INT NOT NULL AUTO_INCREMENT,
		 name VARCHAR(100) NOT NULL,
		 email VARCHAR(50) NOT NULL,
		 password VARCHAR(20) NOT NULL,
		 phone_number VARCHAR(15) NOT NULL,
		 PRIMARY KEY (admin_id)
 );

 //INSERT RECORD INTO ADMINS TABLE
 INSERT INTO admins (name, email, password, phone_number)
VALUES ('Muhsinah Odunewu', 'muhsinah@gmail.com', 'mushy12', '+234812556889'),
       ('Mardiyah Abiodun', 'mardiyah@sample.com', 'ma23di', '+23470654327'),
       ('Abdullahi Olarenwaju', 'olaranwaju@email.com', 'abdul12', '+2345789320');

// CREATE CATEGORIES TABLE
CREATE TABLE categories(
	category_id INT NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(50) NOT NULL,
	PRIMARY KEY(category_id)
);

//INSERT DATA INTO CATEGORIES TABLES
INSERT INTO categories(category_name)
    VALUES   ('SHOES'),
            ('HALF SHOES'),
            ('SNEKERS');


//CREATE PRODUCT TABLE
CREATE TABLE products(
	  product_id INT NOT NULL AUTO_INCREMENT,
	  category_id INT NOT NULL,
	  admins_id INT NOT NULL,
	  Product_name VARCHAR(50) NOT NULL,
	  product_description VARCHAR(250) NOT NULL,
	  product_image BLOB,
	  unit_price DECIMAL(10,2) NOT NULL,
      stock_level VARCHAR(50) NOT NULL,
	  product_status VARCHAR(50) NOT NULL,
	  PRIMARY KEY (product_id),
	   FOREIGN KEY (category_id) REFERENCES categories (category_id),
	   FOREIGN KEY (admins_id) REFERENCES admins (admin_id)
	  );          

	   //INSERT DATA INTO PRODUCT TABLE
	    
       INSERT INTO products(category_id, admins_id, product_name, product_description, product_image, unit_price, stock_level, product_status)
       VALUES (1,2,'Brooks', 'This is a shoe you can put on all day for cooperate meetings and outings', 'file:///home/mainah/Dufuna-Fem/submissions/MutmainahOdunewu/HTML/images/Brooks.jpg', 10000, 8, 'in stock' ),
               (1,1, 'Boot', 'A classic leather for men and women', 'file:///home/mainah/Dufuna-Fem/submissions/MutmainahOdunewu/HTML/images/Boots.jpg', 20000, 10, 'in stock' );

        //CREATE CUSTOMERS TABLE
		 CREATE TABLE customers(
		 customer_id INT NOT NULL AUTO_INCREMENT,
		 first_name VARCHAR(50) NOT NULL,
		 last_name VARCHAR(50) NOT NULL,
		 email VARCHAR(30) NOT NULL,
		 password VARCHAR(20) NOT NULL,
		 PRIMARY KEY (customer_id)
     );          

	 //INSERT DATA INTO CUSTOMERS TABLE
	  INSERT INTO customers(first_name, last_name, email, password)
     VALUES ('Muhsinah', 'Odunewu', 'muhsinah@gmail.com', 'mushy23'),
             ('Mardiyah', 'odunewu', 'mardiyah@gmail.com', 'tope12'),
             ('Ayo', 'Tope', 'ayo@gmail.com','a123t');

//CREATE CUSTOMERS ADDRESS TABLE 
CREATE TABLE customer_address(
    address_id INT NOT NULL AUTO_INCREMENT,
    street VARCHAR(50) NOT NULL,
    city VARCHAR(40) NOT NULL,
    state VARCHAR(30) NOT NULL,
    zip_code INT,
    country VARCHAR(30) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    customer_id INT NOT NULL,
    PRIMARY KEY (address_id),
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
    );
    
	//INSERT INTO CUSTOMERS ADDRESS
	INSERT INTO customer_address (customer_id, street, city, state, zip_code, country, phone_number,)
    VALUES(1, '24 Durojayie close', 'Isolo', 'Lagos', 200100,'Nigeria','0902345897'),
		(2, '12 Makoko street', 'Kubwa', 'Abuja', 453900,'Nigeria', '08045673867'),
		(3, '1 Adeola avenue', 'Adedayo', 'Ibadan', 345675,'Nigeria', '0814562386');
    
	// CREATE ORDER TABLE (
    order_id INT NOT NULL AUTO_INCREMENT,
    order_amount DECIMAL(10,2) NOT NULL,
    order_created_at DATETIME,
    customer_id INT NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
    );

	//INSERT INTO ORDERS
	INSERT INTO orders (order_amount, order_created_at, customer_id)
VALUES(800, now(), 1),
	(900, now(), 2),
	(400, now(), 3);

	//CREATE ORDER ITEMS
	 CREATE TABLE order_items (
	item_id INT NOT NULL AUTO_INCREMENT,
	order_id INT NOT NULL,
	product_id INT NOT NULL,
	quantity DECIMAL(10,2) NOT NULL,
	unit_prices INT NOT NULL,
	total_amount INT NOT NULL,
	PRIMARY KEY (item_id),
	FOREIGN KEY (order_id) REFERENCES orders (order_id),
	FOREIGN KEY (product_id) REFERENCES products (product_id)
);
//INSERT INTO ORDER ITEMS

INSERT INTO order_items(quantity, unit_prices, total_amount, order_id, item_id)
VALUES(3,8000, 20000,1, 3),
       (2, 6000,18000, 2, 2),
       (1, 7000, 16000, 3, 1);

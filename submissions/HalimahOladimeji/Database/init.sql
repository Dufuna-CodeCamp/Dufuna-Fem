--// CREATE MY E-COMMERCE STORE DATABASE
	CREATE DATABASE premium_technologies;
	USE premium_technologies;

--// CREATE TABLES FOR E-COMMERCE STORE DATABASE
		--// Create the admins table
		CREATE TABLE admins (
			admin_id INT NOT NULL AUTO_INCREMENT,
			name VARCHAR(100) NOT NULL,
			email VARCHAR(40) NOT NULL,
			password VARCHAR(40) NOT NULL,
			phone_number VARCHAR(20) NOT NULL,
			PRIMARY KEY (admin_id)
		);
		--// Insert records into the admins table
		INSERT INTO admins (name, email, password, phone_number) 
			VALUES  ('Halimah Oladimeji', 'halimaholadimeji@gmail', 'mathematics', '08022445566'),
				('Bose Joshua', 'bosejoshua@gmail.com', 'yoruba44', '09044579621'),
				('Umar Mariam', 'umarmariam@gmail.com', 'alhikmah00', '07099712035'),
				('Samuel Taylor', 'taylors@yahoo.com', 'olowutee1234', '08052397456'),
				('Aliyah Bello', 'belloaliyah@yahoo.com', '14thaliyah', '07014789632');

--// CATEGORIES
		--// Created categories table
		CREATE TABLE categories (
			category_id INT NOT NULL AUTO_INCREMENT,
			category_name VARCHAR(20) NOT NULL,
			PRIMARY KEY (category_id)
		);
        
		--// Inserted records into the categories table
		INSERT INTO categories (category_name)
			VALUES 	('samsung'), ('tecno'), ('apple'), ('infinix'),('redmi');
                    
--// PRODUCTS
		--// Create products table
		CREATE TABLE products (
			product_id INT NOT NULL AUTO_INCREMENT,
            		category_id INT NOT NULL,
			admin_id INT NOT NULL,
			name VARCHAR(50) NOT NULL,
			description VARCHAR(255) NOT NULL,
			image BLOB,
			unit_price DECIMAL(8,2) NOT NULL,
			stock_level INT NOT NULL,
			status ENUM('in stock', 'out of stock', 'low stock'),
			PRIMARY KEY (product_id),
			FOREIGN KEY (category_id) REFERENCES categories (category_id),
			FOREIGN KEY (admin_id) REFERENCES admins (admin_id)
		);
        
		--// Insert records into the products table
		INSERT INTO products (category_id, admin_id,name, description, image, unit_price, stock_level, status)
			VALUES 	(1,2,'Samsung S20', 'A mind-blending glass screen that folds like a book.', ('D:\Dufuna-Fem\submissions\HalimahOladimeji\HTML-forms\images/samsungs20.jpg'),265000.00, 40, 'in stock'),
				(3,4,'Samsung Galaxy Note 20', 'A hands-free camera that shoots when you wave',('D:\Dufuna-Fem\submissions\HalimahOladimeji\HTML-forms\images/NOTE-20.jpg'),350000.00, 25, 'in stock');
				
--// CUSTOMERS
		--// Create customers table
		CREATE TABLE customers (
			customer_id INT NOT NULL AUTO_INCREMENT,
			first_name VARCHAR(50) NOT NULL,
			last_name VARCHAR(50) NOT NULL,
			email VARCHAR(30) NOT NULL,
			password VARCHAR(20) NOT NULL,
			PRIMARY KEY (customer_id)
		);
        
		--// Insert records into the customers table
		INSERT INTO customers (first_name, last_name, email, password)
			VALUES 	('Joseph', 'Akinola', 'josephakin@gmail.com', 'bookworm24'),
				('Ajayi', 'Coker', 'cokerajayi@gmail.com', 'snickers77'),
				('Adeola', 'Adeoye', 'adeolaoye@yahoo.com', 'powderjuice888'),
				('Matthew', 'Gbenga', 'gbengamatt@yahoo.com', 'bodycare20');
                    
--// CUSTOMERS CONTACTS 
		--// Create the customers contacts table
		CREATE TABLE customer_contacts (
			contact_id INT NOT NULL AUTO_INCREMENT,
            		customer_id INT NULL,
			street VARCHAR(50) NOT NULL,
			city VARCHAR(40) NOT NULL,
			state VARCHAR(30) NOT NULL,
			zip_code MEDIUMINT,
			country VARCHAR(30) NOT NULL,
			phone VARCHAR(20) NOT NULL,
			PRIMARY KEY (contact_id),
			FOREIGN KEY (customer_id) REFERENCES customers (customer_id) 
		);
        
		--// Insert records into the customers address table
		INSERT INTO customer_contacts (customer_id, street, city, state, zip_code, country, phone)
			VALUES  (1, '77 Hamilton Street', 'Magodo', 'Lagos', 55667 , 'Nigeria', '08045223669'),
				(2, 'House 317 Flat 2 Gowon Estate', 'Alimosho', 'Lagos', 12355 , 'Nigeria', '07099665558'),
				(3, '54 Ayoola Avenue', 'Challenge', 'Kwara', 44777 , 'Nigeria', '08028896311'),
				(4, '6 Bolaji Road', 'Mokola', 'Oyo', 02278 , 'Nigeria', '09033444778');
                    
--// ORDERS
		--// Create the orders table
		CREATE TABLE orders (
			order_id INT NOT NULL AUTO_INCREMENT,
			clients INT NOT NULL,
			order_amount DECIMAL(10,2) NOT NULL,
			order_created_at DATETIME,
			PRIMARY KEY (order_id),
			FOREIGN KEY (clients) REFERENCES customers (customer_id)
		);

		--// Insert values into the orders table
		INSERT INTO orders (clients, order_amount, order_created_at)
			VALUES  (2, 265000.00, now()),
				(3, 350000.00, now()),
				(1, 350000.00, now()),
				(4, 265000.00, now());
                    
--// ORDER ITEMS
		--// Create the order items table
		CREATE TABLE order_items (
			item_id INT NOT NULL AUTO_INCREMENT,
			order_id INT NOT NULL,
			product_id INT NOT NULL,
			quantity INT NOT NULL,
			unit_price DECIMAL(10,2) NOT NULL,
			total_amount DECIMAL(20,2) NOT NULL,
			PRIMARY KEY (item_id),
			FOREIGN KEY (order_id) REFERENCES orders (order_id),
			FOREIGN KEY (product_id) REFERENCES products (product_id)
		);
		--// Insert records into the order items table
		INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_amount) 
			VALUES  (1, 1, 5, 265000.00, 1325000.00),
				(2, 2, 1, 350000.00, 350000.00),
				(3, 2, 10, 350000.00, 3500000.00),
                		(3, 1, 2, 265000.00, 530000.00);

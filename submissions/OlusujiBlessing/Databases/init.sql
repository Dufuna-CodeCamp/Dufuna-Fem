CREATE DATABASE ecommerce_store;
USE ecommerce_store;
---This is the sql queries for Admin Table---
CREATE TABLE admin(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(20) NOT NULL,
  phone VARCHAR(20) NOT NULL, 
  PRIMARY KEY (id)
);
INSERT INTO admin (name, email, password, phone)
  VALUES
    ('Olusuji Blessing', 'olusujiblessing@gmail.com', '@OmobusOla', '08093910017'),
    ('Sholesi Kofo', 'sholesikofo@gmail.com', '@busOla123', '08071228228'),
    ('Daniels Folashade', 'danielsfolashade@gmail.com', '@Omo1234', '08041931921');
  
---This is the sql queries for Product Table---
USE ecommerce_store;  
CREATE TABLE product_category(
    id INT NOT NULL AUTO_INCREMENT,
    Category_type VARCHAR(50) NOT NULL,
    PRIMARY KEY (id));
INSERT INTO product_category(category_type)
   VALUES
       ('Accessories'),
       ('Provisions'),
       ('Gadgets'),
       ('Food');

---This is the sql queries for product table --
USE ecommerce_store;
CREATE TABLE product(
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     description VARCHAR(255) NOT NULL,
     image VARCHAR(255) NOT NULL,
     unit_price VARCHAR(20) NOT NULL,
     stock_level VARCHAR(50) NOT NULL,
     status ENUM('in stock', 'out of stock', 'low stock') NOT NULL,
     created_by INT NOT NULL REFERENCES admin(id),
     category INT NOT NULL REFERENCES product_category(id)
  );
INSERT INTO product (name, description, image, unit_price, stock_level, status, created_by, category)
    VALUES
      ('Necklace','Fancy necklace suitable for all kind of outings at a resonable price','https://homeofnecklaces.com','N5000', '500','in stock', '1', '1'),
      ('iphone11','Fancy iphone compatible with all kind of Apple gadgets','https://macmadephone.jpg','N100000', '50','low stock', '2', '3'),
      ('Veges','Healthy and nutritional vegetables with right proportion of classes of food','https://myfood.com','N2500', '0','out of stock', '3', '4'),
      ('Family Milo','Yummy and super nourshing beverages good for body','https://yummymilo.com','N5000', '1000','in stock', '1', '2');

----This is the sql queries for customer table----
USE ecommerce_store;
CREATE TABLE customer(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(50) NOT NULL,
      last_name VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      password VARCHAR(20) NOT NULL
);
INSERT INTO customer(first_name, last_name, email, password)
   VALUES
        ('Nelson', 'Adams', 'adamsnelson@yahoo.com', 'AdamsSuprb234'),
	('Smith', 'Korede', 'korede95@gmail.com', 'Koredespecial123'),
        ('Fasuji', 'Blessing', 'fasuji56@yahoo.com','fablessing1234');

----This is  the sql queries for customer address---
USE ecommerce_store;
CREATE TABLE customer_address(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   street_address VARCHAR(50) NOT NULL,
   city VARCHAR(20) NOT NULL,
   state VARCHAR(20) NOT NULL,
   zip VARCHAR(10),
   country VARCHAR(20) NOT NULL,
   phone_number VARCHAR(20) NOT NULL
 );
ALTER TABLE customer_address ADD COLUMN customer_id INT NOT NULL REFERENCES customer(id);
INSERT INTO customer_address(street_address, city, state, zip, country, phone_number, customer_id)
    VALUES
      ('11, Adekunle close', 'Lagos', 'Lagos', '' , 'Nigeria', '07041941941', '1'),
      ('12, Cameroon street', '	Ibadan', 'Oyo', '' , 'Nigeria', '09041941941', '2'),
      ('13, Wison close', 'Akure', 'Ondo', '123456' , 'Nigeria', '08041941941', '3');

--This is the sql queries for order table---
USE ecommerce_store;
CREATE TABLE customer_order (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  customer INT NOT NULL REFERENCES customer(id),
  order_amount VARCHAR(20) NOT NULL,
  date DATETIME
  );
INSERT INTO customer_order(customer, order_amount, date)
    VALUES 
       ('2', '50,000', now()),
       ('1', '25,000', now()),
       ('3', '12,500', now());

---This is the sql queries for order items---
CREATE TABLE customer_items(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL REFERENCES product(id),
  quantity VARCHAR(50) NOT NULL,
  unit_prices VARCHAR(100) NOT NULL,
  total_amount VARCHAR(100) NOT NULL,
  customer_id INT NOT NULL REFERENCES customer_order(id)
  );
INSERT INTO customer_items (product_id, quantity, unit_prices, total_amount, customer_id)
   VALUES  
       ('1', '5', '5000', '25000', '3'),
       ('3', '1', '100000', '100000', '1'),
       ('1', '2', '2500', '7500', '2');
  




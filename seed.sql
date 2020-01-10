DROP DATABASE IF EXISTS items_db;

CREATE DATABASE items_db;

USE items_db;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(100),
  catagory VARCHAR(100),
  price INTEGER(10),
  quantity INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO items (item, catagory, price, quantity)
VALUES ("Banana", "Fruit", 30, 7);

INSERT INTO items (item, catagory, price, quantity)
VALUES ("Guava", "Fruit", 63, 95);

INSERT INTO items (item, catagory, price, quantity)
VALUES ("Rocket Ship", "Vehicles", 30000, 4);
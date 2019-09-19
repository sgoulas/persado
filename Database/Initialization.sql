CREATE DATABASE IF NOT EXISTS LIBRARY
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;
USE LIBRARY;

CREATE TABLE Books
(
Book_ID int NOT NULL AUTO_INCREMENT,
Name varchar(80) NOT NULL,
Summary varchar(80) NOT NULL,
ISBN varchar(17) NOT NULL,
Purchased varchar(5),
Available varchar(5),
PRIMARY KEY (Book_ID)
)ENGINE=INNODB;

Create TABLE Users
(
U_ID int NOT NULL AUTO_INCREMENT,
FirstName varchar(25),
LastName varchar(30),
Address varchar(80),
BooksLoaned varchar(5),
PRIMARY KEY (U_ID)
)ENGINE=INNODB;

Create TABLE Registry
(
Book_ID int NOT NULL,
U_ID int NOT NULL,
DateLoaned DATE DEFAULT NULL,
DateReturned DATE DEFAULT NULL,
INDEX (U_ID, DateReturned),
FOREIGN KEY (Book_ID) REFERENCES Books (Book_ID)
ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (U_ID) REFERENCES Users (U_ID)
ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=INNODB;
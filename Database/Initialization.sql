CREATE DATABASE IF NOT EXISTS LIBRARY
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;
USE LIBRARY;

CREATE TABLE Books
(
Book_ID int NOT NULL AUTO_INCREMENT,
Name varchar(80) NOT NULL,
Summary varchar(450) NOT NULL,
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

INSERT INTO Users (FirstName, LastName, Address, BooksLoaned) VALUES ("Spyros", "Goulas","Chatzi 13 Anw Patisia","1");
INSERT INTO Users (FirstName, LastName, Address, BooksLoaned) VALUES ("Andrew", "Papadopoylos","Athinaidwn 47 Kipseli","1");
INSERT INTO Users (FirstName, LastName, Address, BooksLoaned) VALUES ("Panos", "Argyropoylos","Epameinonda 4 Kifisia","0");

INSERT INTO Books(Name, Summary, ISBN, Purchased, Available) VALUES("The old man and the sea","An epic tale of man vs nature vs man.","846135438.","5","4");
INSERT INTO Books(Name, Summary, ISBN, Purchased, Available) VALUES("Moby Dick","A story of revenge, as a captain seeks to kill a whale that cost him his leg.","216543216546","3","2");
INSERT INTO Books(Name, Summary, ISBN, Purchased, Available) VALUES("Secret Story","Ben makes new friends, but his new friends have a dark secret.","81246846","2","2");

INSERT INTO Registry(Book_ID, U_ID, DateLoaned) VALUES ("1","1",NOW());
INSERT INTO Registry(Book_ID, U_ID, DateLoaned) VALUES ("2","2",NOW());
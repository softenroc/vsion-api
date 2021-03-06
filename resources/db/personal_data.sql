--- CREATE DATABASE

CREATE 

CREATE TABLE `personal_data` (
	`id` BIGINT NOT NULL AUTO_INCREMENT,
	`document_type` VARCHAR(20) NOT NULL,
	`document` VARCHAR(20) NOT NULL,
	`name` VARCHAR(50) NOT NULL,
	`last_name` VARCHAR(50) NOT NULL,
	`phone` VARCHAR(20),
	`date_of_birth` DATE,
	`gender` VARCHAR(20) NOT NULL,
	`email` VARCHAR(50) NOT NULL,
	`direction` VARCHAR(50),
	`city` VARCHAR(50) NOT NULL,
	`civil_status` VARCHAR(20) NOT NULL,
	`ocupation` VARCHAR(50),
	`eps` VARCHAR(50) NOT NULL,
	`companion_name` VARCHAR(50),
	`companion_document` VARCHAR(50),
	`companion_relation` VARCHAR(50),
	UNIQUE KEY `document_unique` (`document`) USING BTREE,
KEY `document_type_name` (`document_type`,`document`,`name`) USING BTREE,
	PRIMARY KEY (`id`)
);
CREATE TABLE `sale_data` (
	`id` BIGINT NOT NULL AUTO_INCREMENT,
	`document` VARCHAR(20) NOT NULL,
	`date_invoice` DATE,
	`invoice_id` VARCHAR(20),
	`mount` NUMERIC,
	`tax` NUMERIC,
	`lens` NUMERIC,
	`balance` NUMERIC,
	`payment_method` VARCHAR(20),
	`status` VARCHAR(50) NOT NULL,	
	PRIMARY KEY (`id`)
);

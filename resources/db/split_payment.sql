CREATE TABLE `split_payment` (
	`id` BIGINT NOT NULL AUTO_INCREMENT,
	`invoice_id` VARCHAR(20),
    `date_split` DATE,
	`mount` NUMERIC,
    `payment_method` VARCHAR(20),
	`status` VARCHAR(50) NOT NULL,	
	PRIMARY KEY (`id`)
);

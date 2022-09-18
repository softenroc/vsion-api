CREATE TABLE `order` (
	`id` BIGINT NOT NULL AUTO_INCREMENT,
	`document` VARCHAR(20) NOT NULL,
	`date_order` DATE,
    `date_sender_lab` DATE,
    `date_receive_lab` DATE,
	`invoice_id` VARCHAR(20),
	`order_description` TEXT,
    `laboratory` VARCHAR(20),
	`status` VARCHAR(50) NOT NULL,	
	PRIMARY KEY (`id`)
);

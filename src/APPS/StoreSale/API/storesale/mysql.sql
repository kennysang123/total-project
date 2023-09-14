-- Thiet ke db cho rent.vngate.top------------
CREATE TABLE StoreSale (
	id INT NOT NULL AUTO_INCREMENT,
	productCode TEXT NULL,
	prodcutCategory TEXT NULL,
	PRIMARY KEY (id)
) ENGINE = MyISAM;

CREATE TABLE StoreSaleAdmin (
	id INT NOT NULL AUTO_INCREMENT,
	subDomain TEXT NULL,
	adName TEXT NULL,
	adPhone TEXT NULL,
	PRIMARY KEY (id)
) ENGINE = MyISAM;

-- ALTER TABLE StoreSale ADD COLUMN productPrice INT NULL AFTER productCode;
-- ALTER TABLE StoreSale ADD COLUMN productDescription INT NULL AFTER productCode;
-- ALTER TABLE StoreSale ADD COLUMN productOwnerCode TEXT NULL AFTER productCode;
-- UPDATE StoreSale SET productPrice = 0 WHERE id = 1;
--bang cong viec hang ngay
CREATE TABLE Apartments (
    id INT NOT NULL AUTO_INCREMENT,
    productID TEXT NULL,
    productLocation TEXT NULL,
    productPrice INT NULL,
    productStyle TEXT NULL,
    productType TEXT NULL,
    productDesription TEXT NULL,
    productAvailable DATE NULL,
    productUpdate DATE NULL,
    ownerPhone TEXT NULL,
    ownerGroup TEXT NULL,
    PRIMARY KEY (id)
) ENGINE = MyISAM;

ALTER TABLE
    `Apartments` DEFAULT CHARSET = utf8 COLLATE utf8_unicode_ci;

ALTER TABLE `Apartments` ADD COLUMN productBed INT NULL AFTER productID;
ALTER TABLE `Apartments` ADD COLUMN productBad INT NULL AFTER productID;
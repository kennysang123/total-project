--bang cong viec hang ngay
CREATE TABLE WebApp (
    id INT NOT NULL AUTO_INCREMENT,
    productName TEXT NULL,
    productType TEXT NULL,
    productDesription TEXT NULL,
    PRIMARY KEY (id)
) ENGINE = MyISAM;

ALTER TABLE
    `Apartments` DEFAULT CHARSET = utf8 COLLATE utf8_unicode_ci;

ALTER TABLE
    `Apartments`
ADD
    COLUMN productBed INT NULL
AFTER
    productID;

ALTER TABLE
    `Apartments`
ADD
    COLUMN productBad INT NULL
AFTER
    productID;

    INSERT INTO `WebApp` (`id`, `productName`, `productType`, `productDesription`) VALUES (NULL, '10', NULL, NULL);
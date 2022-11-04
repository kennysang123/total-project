CREATE TABLE bds (
  Id INT NOT NULL AUTO_INCREMENT,
  Phone1 TEXT NULL,
  Phone1Name TEXT NULL,
  Phone2 TEXT NULL,
  Phone2Name TEXT NULL,
  Phone3 TEXT NULL,
  Phone3Name TEXT NULL,
  ZaloGroup TEXT NULL,
  FacebookGroup TEXT NULL,
  Style TEXT NULL,
  Bedroom TEXT NULL,
  Bathroom TEXT NULL,
  Vintage TEXT NULL,
  Area TEXT NULL,
  Address TEXT NULL,
  Street TEXT NULL,
  Dist TEXT NULL,
  GoogleMap TEXT NULL,
  Com TEXT NULL,
  Vnd TEXT NULL,
  Usd TEXT NULL,
  Duration TEXT NULL,
  LatestUpdate TEXT NULL,
  Status TEXT NULL,
  ElectricFee TEXT NULL,
  WaterFee TEXT NULL,
  NetworkFee TEXT NULL,
  TVCabFee TEXT NULL,
  ParkingFee TEXT NULL,
  DepositFee TEXT NULL,
  ServiceFee TEXT NULL,
  Utilities TEXT NULL,
  UtilitiesLink TEXT NULL,
  Furnitures TEXT NULL,
  VideoLinkYouTube TEXT NULL,
  PostTitleEn TEXT NULL,
  PostTitleVi TEXT NULL,
  Category1 TEXT NULL,
  Category2 TEXT NULL,
  Category3 TEXT NULL,
  PostContent TEXT NULL,
  PostBySaler TEXT NULL,
  PhotoPath TEXT NULL,
  PhotoThumbnail TEXT NULL,
  PRIMARY KEY (Id)
) ENGINE = MyISAM;

ALTER TABLE
  bds
ADD
  COLUMN Code TEXT
AFTER
  Id;

ALTER TABLE
  bds
ADD
  COLUMN HostCode TEXT
AFTER
  Code;

ALTER TABLE
  `bds` DEFAULT CHARSET = utf8 COLLATE utf8_unicode_ci;

INSERT INTO
  `bds`(`Code`)
VALUES
  ("D2N0005")
SELECT
  `Code`
FROM
  `bds`
WHERE
  `Code` = "D2N0005"
UPDATE
  `bds`
SET
  `Id` = [value-1],
  `Code` = [value-2],
  `HostCode` = [value-3],
  `Phone1` = [value-4],
  `Phone1Name` = [value-5],
  `Phone2` = [value-6],
  `Phone2Name` = [value-7],
  `Phone3` = [value-8],
  `Phone3Name` = [value-9],
  `ZaloGroup` = [value-10],
  `FacebookGroup` = [value-11],
  `Style` = [value-12],
  `Bedroom` = [value-13],
  `Bathroom` = [value-14],
  `Vintage` = [value-15],
  `Area` = [value-16],
  `Address` = [value-17],
  `Street` = [value-18],
  `Dist` = [value-19],
  `GoogleMap` = [value-20],
  `Com` = [value-21],
  `Vnd` = [value-22],
  `Usd` = [value-23],
  `Duration` = [value-24],
  `LatestUpdate` = [value-25],
  `Status` = [value-26],
  `ElectricFee` = [value-27],
  `WaterFee` = [value-28],
  `NetworkFee` = [value-29],
  `TVCabFee` = [value-30],
  `ParkingFee` = [value-31],
  `DepositFee` = [value-32],
  `ServiceFee` = [value-33],
  `Utilities` = [value-34],
  `UtilitiesLink` = [value-35],
  `Furnitures` = [value-36],
  `VideoLinkYouTube` = [value-37],
  `PostTitleEn` = [value-38],
  `PostTitleVi` = [value-39],
  `Category1` = [value-40],
  `Category2` = [value-41],
  `Category3` = [value-42],
  `PostContent` = [value-43],
  `PostBySaler` = [value-44],
  `PhotoPath` = [value-45],
  `PhotoThumbnail` = [value-46]
WHERE
  1
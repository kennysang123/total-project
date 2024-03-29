CREATE TABLE `3978235_wpresse4944aaa`.`bds` (
	`id` INT(32) NOT NULL AUTO_INCREMENT,
	`phone` TEXT NOT NULL,
	`typeStyle` TEXT NOT NULL,
	`typeBed` TEXT NOT NULL,
	`typeWc` TEXT NOT NULL,
	`vintage` TEXT NOT NULL,
	`ad` TEXT NOT NULL,
	`street` TEXT NOT NULL,
	`owner` TEXT NOT NULL,
	`com` TEXT NOT NULL,
	`vnd` TEXT NOT NULL,
	`usd` TEXT NOT NULL,
	`latestupdate` TEXT NOT NULL,
	`area` TEXT NOT NULL,
	`noteStatus` TEXT NOT NULL,
	`noteDuration` TEXT NOT NULL,
	`noteUtilities` TEXT NOT NULL,
	`noteOther` TEXT NOT NULL,
	`v1` TEXT NOT NULL,
	`v2` TEXT NOT NULL,
	`v3` TEXT NOT NULL,
	`v4` TEXT NOT NULL,
	`v5` TEXT NOT NULL,
	`v6` TEXT NOT NULL,
	`v7` TEXT NOT NULL,
	`v8` TEXT NOT NULL,
	`v9` TEXT NOT NULL,
	`v10` TEXT NOT NULL,
	`v11` TEXT NOT NULL
) ENGINE = MyISAM;

CREATE TABLE `3978235_wpresse4944aaa`.`bds` (
	`id` INT(32) NOT NULL AUTO_INCREMENT,
	`phone` TEXT NULL,
	`typeStyle` TEXT NULL,
	`typeBed` TEXT NULL,
	`typeWc` TEXT NULL,
	`vintage` TEXT NULL,
	`ad` TEXT NULL,
	`street` TEXT NULL,
	`owner` TEXT NULL,
	`com` TEXT NULL,
	`vnd` TEXT NULL,
	`usd` TEXT NULL,
	`latestupdate` TEXT NULL,
	`area` TEXT NULL,
	`noteStatus` TEXT NULL,
	`noteDuration` TEXT NULL,
	`noteUtilities` TEXT NULL,
	`noteOther` TEXT NULL,
	`v1` TEXT NULL,
	`v2` TEXT NULL,
	`v3` TEXT NULL,
	`v4` TEXT NULL,
	`v5` TEXT NULL,
	`v6` TEXT NULL,
	`v7` TEXT NULL,
	`v8` TEXT NULL,
	`v9` TEXT NULL,
	`v10` TEXT NULL,
	`v11` TEXT NOT NULL
) ENGINE = MyISAM;

CREATE TABLE rentvn (
	Id INT NOT NULL AUTO_INCREMENT,
	Code TEXT NULL,
	Phone TEXT NULL,
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
	`bds` DEFAULT CHARSET = utf8 COLLATE utf8_unicode_ci;

ALTER TABLE
	rentvn
ADD
	COLUMN HostCode TEXT
AFTER
	Code;

ALTER TABLE
	rentvn
ADD
	COLUMN PhoneMain TEXT
AFTER
	Phone;

ALTER TABLE
	rentvn
ADD
	COLUMN PhoneMainPass TEXT
AFTER
	PhoneMain;

-- Thiet ke db cho rent.vngate.top------------
CREATE TABLE StoreSale (
	id INT NOT NULL AUTO_INCREMENT,
	productCode TEXT NULL,
	prodcutCategory TEXT NULL,
	PRIMARY KEY (id)
) ENGINE = MyISAM;

SELECT
	id,
	duration,
	dayUpdate,
	content,
	price,
	area,
	bath,
	bed,
	ownerr,
	DATEDIFF(duration, '2022-12-24') AS daysOfDuration,
	DATEDIFF(dayUpdate, '2022-12-24') AS daysOfUpdate
FROM
	RentVnGate
WHERE
	DATEDIFF(duration, '2022-12-24') < 20
ORDER BY
	daysOfDuration DESC;

--bang bdsvngate2
CREATE TABLE BdsVnGate (
	id INT NOT NULL AUTO_INCREMENT,
	code TEXT NULL,
	typer TEXT NULL,
	street TEXT NULL,
	dist TEXT NULL,
	city TEXT NULL,
	project TEXT NULL,
	utilities TEXT NULL,
	duration TEXT NULL,
	dayUpdate TEXT NULL,
	content TEXT NULL,
	price INT NULL,
	area INT NULL,
	bath INT NULL,
	bed INT NULL,
	ownerr TEXT NULL,
	codeHost TEXT NULL,
	googleMap TEXT Null,
	PRIMARY KEY (id)
) ENGINE = MyISAM;

ALTER TABLE
	`bds` DEFAULT CHARSET = utf8 COLLATE utf8_unicode_ci;

-- Thiet ke db cho ketdoi.vngate.top------------
CREATE TABLE KetDoiVnGate (
	id INT NOT NULL AUTO_INCREMENT,
	code TEXT NULL,
	namex TEXT NULL,
	sex TEXT NULL,
	birthday TEXT NULL,
	age INT NULL,
	verify TEXT NULL,
	dist TEXT NULL,
	city TEXT NULL,
	country TEXT NULL,
	toila TEXT NULL,
	timnguoi TEXT NULL,
	facebook TEXT NULL,
	telegram TEXT NULL,
	whatsapp TEXT NULL,
	twitter TEXT NULL,
	instagram TEXT NULL,
	linex TEXT NULL,
	PRIMARY KEY (id)
) ENGINE = MyISAM;

-- Thiet ke db cho dung dashboard------------
CREATE TABLE DungDB_CVHN (
	id INT NOT NULL AUTO_INCREMENT,
	ngayThang DATE NULL,
	mSNV TEXT NULL,
	arrHoanThanh TEXT NULL,
	soHoanThanh TEXT NULL,
	soChuaHoanThanh INT NULL,
	tongSo TEXT NULL,
	PRIMARY KEY (id)
) ENGINE = MyISAM;

select
	*
from
	DungDB_CVHN
where
	ngayThang between '2023-7-03'
	and '2023-7-08'
	and mSNV like 'NV001';

select
	SUM(soHoanThanh) as tongSoHoanThanh,
	SUM(tongSo) as tongSoCV,
	(SUM(soHoanThanh) / SUM(tongSo)) * 100 as phanTramHoanThanh
from
	DungDB_CVHN
where
	ngayThang between '2023-7-03'
	and '2023-7-08'
	and mSNV like 'NV001';

-- Bang doanh so ngay
CREATE TABLE DungDB_DoanhSoHangNgay (
	id INT NOT NULL AUTO_INCREMENT,
	ngayThang DATE NULL,
	mSNV TEXT NULL,
	doanhSo INT NULL,
	PRIMARY KEY (id)
) ENGINE = MyISAM;

select
	*
from
	DungDB_DoanhSoHangNgay
where
	ngayThang between '2023-7-01'
	and '2023-7-03'
	and mSNV like 'NV001';

select
	SUM(doanhSo) AS doanhSoThang
from
	DungDB_DoanhSoHangNgay
where
	ngayThang between '2023-7-01'
	and '2023-7-31'
	and mSNV like 'NV001';

--bang cong viec hang ngay
CREATE TABLE DungDB_CongViecHangNgay (
	id INT NOT NULL AUTO_INCREMENT,
	ngayThang DATE NULL,
	mSNV TEXT NULL,
	cacCongViecHoanThanh TEXT NULL,
	cacCongViec TEXT NULL,
	soHoanThanh TEXT NULL,
	soChuaHoanThanh INT NULL,
	tongSoCongViec TEXT NULL,
	PRIMARY KEY (id)
) ENGINE = MyISAM;
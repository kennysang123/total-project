CREATE TABLE `3978235_wpresse4944aaa`.`bds` ( `id` INT(32) NOT NULL AUTO_INCREMENT , `phone` TEXT NOT NULL , `typeStyle` TEXT NOT NULL , `typeBed` TEXT NOT NULL , `typeWc` TEXT NOT NULL , `vintage` TEXT NOT NULL , `ad` TEXT NOT NULL , `street` TEXT NOT NULL , `owner` TEXT NOT NULL , `com` TEXT NOT NULL , `vnd` TEXT NOT NULL , `usd` TEXT NOT NULL , `latestupdate` TEXT NOT NULL , `area` TEXT NOT NULL , `noteStatus` TEXT NOT NULL , `noteDuration` TEXT NOT NULL , `noteUtilities` TEXT NOT NULL , `noteOther` TEXT NOT NULL , `v1` TEXT NOT NULL , `v2` TEXT NOT NULL , `v3` TEXT NOT NULL , `v4` TEXT NOT NULL , `v5` TEXT NOT NULL , `v6` TEXT NOT NULL , `v7` TEXT NOT NULL , `v8` TEXT NOT NULL , `v9` TEXT NOT NULL , `v10` TEXT NOT NULL , `v11` TEXT NOT NULL ) ENGINE = MyISAM;

CREATE TABLE `3978235_wpresse4944aaa`.`bds` ( `id` INT(32) NOT NULL AUTO_INCREMENT , `phone` TEXT NULL , `typeStyle` TEXT NULL , `typeBed` TEXT NULL , `typeWc` TEXT NULL , `vintage` TEXT NULL , `ad` TEXT NULL , `street` TEXT NULL , `owner` TEXT NULL , `com` TEXT NULL , `vnd` TEXT NULL , `usd` TEXT NULL , `latestupdate` TEXT NULL , `area` TEXT NULL , `noteStatus` TEXT NULL , `noteDuration` TEXT NULL , `noteUtilities` TEXT NULL , `noteOther` TEXT NULL , `v1` TEXT NULL , `v2` TEXT NULL , `v3` TEXT NULL , `v4` TEXT NULL , `v5` TEXT NULL , `v6` TEXT NULL , `v7` TEXT NULL , `v8` TEXT NULL , `v9` TEXT NULL , `v10` TEXT NULL , `v11` TEXT NOT NULL ) ENGINE = MyISAM;

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
ALTER TABLE `bds` DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;




ALTER TABLE rentvn ADD COLUMN HostCode TEXT AFTER Code;
ALTER TABLE rentvn ADD COLUMN PhoneMain TEXT AFTER Phone;
ALTER TABLE rentvn ADD COLUMN PhoneMainPass TEXT AFTER PhoneMain;

-- Thiet ke db cho rent.vngate.top------------
CREATE TABLE RentVnGate (
      id INT NOT NULL AUTO_INCREMENT,
      duration TEXT NULL,
			dayUpdate TEXT NULL,
			content TEXT NULL,
			price TEXT NULL,
			area TEXT NULL,
			bath TEXT NULL,
			bed TEXT NULL,
			owner TEXT NULL,
  PRIMARY KEY (id)
) ENGINE = MyISAM;

SELECT id,duration,dayUpdate,content,price,area,bath,bed,ownerr,DATEDIFF(duration,'2022-12-24') AS daysOfDuration,DATEDIFF(dayUpdate,'2022-12-24') AS daysOfUpdate FROM RentVnGate WHERE DATEDIFF(duration,'2022-12-24') < 20 ORDER BY daysOfDuration DESC; 

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
ALTER TABLE `bds` DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;











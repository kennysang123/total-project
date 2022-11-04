<?php
class Connect
{
  private $servername = "sql100.epizy.com";
  private $username = "epiz_30640174";
  private $password = "0fEaJMS1PZ94Bb";
  private $dbname = "epiz_30640174_w211";
  private $mysqli;

  public function Update($ProductsArrX)
  {
    $ProductsArr = json_decode($ProductsArrX);
    $this->mysqli = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
    mysqli_set_charset($this->mysqli, 'UTF8');
    $sqlStrArr = [];
    $numEffectArr = [];
    $addArr = [];
    $failAddArr = [];
    $checkCodeArr = [];
    for ($i = 1; $i < count($ProductsArr); $i++) {
      $Code = $ProductsArr[$i][0];
      $HostCode = $ProductsArr[$i][1];
      $Phone1 = $ProductsArr[$i][2];
      $Phone1Name = $ProductsArr[$i][3];
      $Phone2 = $ProductsArr[$i][4];
      $Phone2Name = $ProductsArr[$i][5];
      $Phone3 = $ProductsArr[$i][6];
      $Phone3Name = $ProductsArr[$i][7];
      $ZaloGroup = $ProductsArr[$i][8];
      $FacebookGroup = $ProductsArr[$i][9];
      $Style = $ProductsArr[$i][10];
      $Bedroom = $ProductsArr[$i][11];
      $Bathroom = $ProductsArr[$i][12];
      $Vintage = $ProductsArr[$i][13];
      $Area = $ProductsArr[$i][14];
      $Address = $ProductsArr[$i][15];
      $Street = $ProductsArr[$i][16];
      $Ward = $ProductsArr[$i][17];
      $Dist = $ProductsArr[$i][18];
      $City = $ProductsArr[$i][19];
      $GoogleMap = $ProductsArr[$i][20];
      $Com = $ProductsArr[$i][21];
      $Vnd = $ProductsArr[$i][22];
      $Usd = $ProductsArr[$i][23];
      $Duration = $ProductsArr[$i][24];
      $LatestUpdate = $ProductsArr[$i][25];
      $Status = $ProductsArr[$i][26];
      $ElectricFee = $ProductsArr[$i][27];
      $WaterFee = $ProductsArr[$i][28];
      $NetworkFee = $ProductsArr[$i][29];
      $TVCabFee = $ProductsArr[$i][30];
      $ParkingFee = $ProductsArr[$i][31];
      $DepositFee = $ProductsArr[$i][32];
      $ServiceFee = $ProductsArr[$i][33];
      $Utilities = $ProductsArr[$i][34];
      $UtilitiesLink = $ProductsArr[$i][35];
      $Furnitures = $ProductsArr[$i][36];
      $VideoLinkYouTube = $ProductsArr[$i][37];
      $PostTitleEn = $ProductsArr[$i][38];
      $PostTitleVi = $ProductsArr[$i][39];
      $Category1 = $ProductsArr[$i][40];
      $Category2 = $ProductsArr[$i][41];
      $Category3 = $ProductsArr[$i][42];
      $PostContent = $ProductsArr[$i][43];
      $PostBySaler = $ProductsArr[$i][44];
      $PhotoPath = $ProductsArr[$i][45];
      $PhotoThumbnail = $ProductsArr[$i][46];


      $sql = "UPDATE `bds` SET `HostCode`='$HostCode',`Phone1`='$Phone1',`Phone1Name`='$Phone1Name',`Phone2`='$Phone2',`Phone2Name`='$Phone2Name',`Phone3`='$Phone3',`Phone3Name`='$Phone3Name',`ZaloGroup`='$ZaloGroup',`FacebookGroup`='$FacebookGroup',`Style`='$Style',`Bedroom`='$Bedroom',`Bathroom`='$Bathroom',`Vintage`='$Vintage',`Area`='$Area',`Address`='$Address',`Street`='$Street',`Ward`='$Ward',`Dist`='$Dist',`City`='$City',`GoogleMap`='$GoogleMap',`Com`='$Com',`Vnd`='$Vnd',`Usd`='$Usd',`Duration`='$Duration',`LatestUpdate`='$LatestUpdate',`Status`='$Status',`ElectricFee`='$ElectricFee',`WaterFee`='$WaterFee',`NetworkFee`='$NetworkFee',`TVCabFee`='$TVCabFee',`ParkingFee`='$ParkingFee',`DepositFee`='$DepositFee',`ServiceFee`='$ServiceFee',`Utilities`='$Utilities',`UtilitiesLink`='$UtilitiesLink',`Furnitures`='$Furnitures',`VideoLinkYouTube`='$VideoLinkYouTube',`PostTitleEn`='$PostTitleEn',`PostTitleVi`='$PostTitleVi',`Category1`='$Category1',`Category2`='$Category2',`Category3`='$Category3',`PostContent`='$PostContent',`PostBySaler`='$PostBySaler',`PhotoPath`='$PhotoPath',`PhotoThumbnail`='$PhotoThumbnail' WHERE `Code`='$Code';";
      /* Check code And  Add */
      $numRow = $this->CheckCodeAndAdd($Code);
      array_push($checkCodeArr, $numRow);
      /* update */
      array_push($sqlStrArr, $sql);
      $this->mysqli->query($sql);
      array_push($numEffectArr, $this->mysqli->affected_rows);
      $check = $this->mysqli->query($sql);
      if ($check === TRUE) {
        array_push($addArr, "success");
      } else {
        array_push($failAddArr, "fail" . $Code);
      }
    }


    /* close connect */
    $this->mysqli->close();
    $resultArr = array("method" => "update", "strSql" => $sqlStrArr, "added" => $addArr, "failedAdd" => $failAddArr, "numEffect" => $numEffectArr, "checkCode" => $checkCodeArr);
    return  $resultArr;
  }
  public function CheckCodeAndAdd($Code)
  {
    $sql = "SELECT * FROM bds WHERE `Code`='$Code';";
    $result = $this->mysqli->query($sql);
    $numCheck = $result->num_rows;
    if (!$numCheck > 0) {
      $sqlAdd = "INSERT INTO `bds`(`Code`) VALUES ('$Code');";
      $this->mysqli->query($sqlAdd);
    }
    return $numCheck;
  }
  public function CheckCode($Code)
  {
    $sql = "SELECT * FROM bds WHERE `Code`='$Code';";
    $result = $this->mysqli->query($sql);
    $numCheck = $result->num_rows;
    return $numCheck;
  }
}

class DB
{
  private $servername = "sql100.epizy.com";
  private $username = "epiz_30640174";
  private $password = "0fEaJMS1PZ94Bb";
  private $dbname = "epiz_30640174_w211";
  private $conn;
  public function connect()
  {
    $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
    mysqli_set_charset($this->conn, 'UTF8');
    // Check connection
    if ($this->conn->connect_error) {
      //die("Connection failed: " . $this->conn->connect_error);
      return false;
    } else {
      //echo "Ket noi thanh cong" . "<br>";
      return true;
    }
  }
  public function close()
  {
    # code...
    $this->conn->close();
    //echo "Da ngat ket noi" . "<br>";
  }

  public function isReadyRow($Code)
  {
    # Kiem tra co ton tai ko
    $sql = "SELECT `Code` FROM `bds` WHERE `Code`= '$Code'";
    $result = $this->conn->query($sql);
    if ($result->num_rows > 0) {
      return true;
    } else {
      return false;
    }
  }
  public function insert($CodeArr)
  {
    $skipArr = [];
    $addArr = [];
    $failAddArr = [];
    # code... Kiem tra neu co ko them, nguoc lai them
    for ($i = 0; $i < count($CodeArr); $i++) {
      if ($this->isReadyRow($CodeArr[$i])) {
        array_push($skipArr, $CodeArr[$i]);
      } else {
        $sql = "INSERT INTO `bds`(`Code`) VALUES ('$CodeArr[$i]')";
        $check = $this->conn->query($sql);
        if ($check === TRUE) {
          array_push($addArr, $CodeArr[$i]);
        } else {
          array_push($failAddArr, $CodeArr[$i]);
        }
      }
    }
    $resultArr = array("skipped" => $skipArr, "added" => $addArr, "failedAdd" => $failAddArr);
    return  $resultArr;
  }
  public function update($ProductsArrX)
  {
    $ProductsArr = json_decode($ProductsArrX);
    $kqStr = [];
    $addArr = [];
    $failAddArr = [];
    # code... Kiem tra neu co ko them, nguoc lai them
    for ($i = 1; $i < count($ProductsArr); $i++) {
      $Code = $ProductsArr[$i][0];
      $HostCode = $ProductsArr[$i][1];
      $Phone1 = $ProductsArr[$i][2];
      $Phone1Name = $ProductsArr[$i][3];
      $Phone2 = $ProductsArr[$i][4];
      $Phone2Name = $ProductsArr[$i][5];
      $Phone3 = $ProductsArr[$i][6];
      $Phone3Name = $ProductsArr[$i][7];
      $ZaloGroup = $ProductsArr[$i][8];
      $FacebookGroup = $ProductsArr[$i][9];
      $Style = $ProductsArr[$i][10];
      $Bedroom = $ProductsArr[$i][11];
      $Bathroom = $ProductsArr[$i][12];
      $Vintage = $ProductsArr[$i][13];
      $Area = $ProductsArr[$i][14];
      $Address = $ProductsArr[$i][15];
      $Street = $ProductsArr[$i][16];
      $Ward = $ProductsArr[$i][17];
      $Dist = $ProductsArr[$i][18];
      $City = $ProductsArr[$i][19];
      $GoogleMap = $ProductsArr[$i][20];
      $Com = $ProductsArr[$i][21];
      $Vnd = $ProductsArr[$i][22];
      $Usd = $ProductsArr[$i][23];
      $Duration = $ProductsArr[$i][24];
      $LatestUpdate = $ProductsArr[$i][25];
      $Status = $ProductsArr[$i][26];
      $ElectricFee = $ProductsArr[$i][27];
      $WaterFee = $ProductsArr[$i][28];
      $NetworkFee = $ProductsArr[$i][29];
      $TVCabFee = $ProductsArr[$i][30];
      $ParkingFee = $ProductsArr[$i][31];
      $DepositFee = $ProductsArr[$i][32];
      $ServiceFee = $ProductsArr[$i][33];
      $Utilities = $ProductsArr[$i][34];
      $UtilitiesLink = $ProductsArr[$i][35];
      $Furnitures = $ProductsArr[$i][36];
      $VideoLinkYouTube = $ProductsArr[$i][37];
      $PostTitleEn = $ProductsArr[$i][38];
      $PostTitleVi = $ProductsArr[$i][39];
      $Category1 = $ProductsArr[$i][40];
      $Category2 = $ProductsArr[$i][41];
      $Category3 = $ProductsArr[$i][42];
      $PostContent = $ProductsArr[$i][43];
      $PostBySaler = $ProductsArr[$i][44];
      $PhotoPath = $ProductsArr[$i][45];
      $PhotoThumbnail = $ProductsArr[$i][46];


      $sql = "UPDATE `bds` SET `HostCode`='$HostCode',`Phone1`='$Phone1',`Phone1Name`='$Phone1Name',`Phone2`='$Phone2',`Phone2Name`='$Phone2Name',`Phone3`='$Phone3',`Phone3Name`='$Phone3Name',`ZaloGroup`='$ZaloGroup',`FacebookGroup`='$FacebookGroup',`Style`='$Style',`Bedroom`='$Bedroom',`Bathroom`='$Bathroom',`Vintage`='$Vintage',`Area`='$Area',`Address`='$Address',`Street`='$Street',`Ward`='$Ward',`Dist`='$Dist',`City`='$City',`GoogleMap`='$GoogleMap',`Com`='$Com',`Vnd`='$Vnd',`Usd`='$Usd',`Duration`='$Duration',`LatestUpdate`='$LatestUpdate',`Status`='$Status',`ElectricFee`='$ElectricFee',`WaterFee`='$WaterFee',`NetworkFee`='$NetworkFee',`TVCabFee`='$TVCabFee',`ParkingFee`='$ParkingFee',`DepositFee`='$DepositFee',`ServiceFee`='$ServiceFee',`Utilities`='$Utilities',`UtilitiesLink`='$UtilitiesLink',`Furnitures`='$Furnitures',`VideoLinkYouTube`='$VideoLinkYouTube',`PostTitleEn`='$PostTitleEn',`PostTitleVi`='$PostTitleVi',`Category1`='$Category1',`Category2`='$Category2',`Category3`='$Category3',`PostContent`='$PostContent',`PostBySaler`='$PostBySaler',`PhotoPath`='$PhotoPath',`PhotoThumbnail`='$PhotoThumbnail' WHERE `Code`='$Code';";
      array_push($kqStr, $sql);

      $check = $this->conn->query($sql);
      if ($check === TRUE) {
        array_push($addArr, "success");
      } else {
        array_push($failAddArr, "fail" . $Code);
      }

      /* $sql = "INSERT INTO `bds`(`Code`) VALUES ('$CodeArr[$i]')";
      $check = $this->conn->query($sql);
      if ($check === TRUE) {
        array_push($addArr, $CodeArr[$i]);
      } else {
        array_push($failAddArr, $CodeArr[$i]);
      } */
    }
    $resultArr = array("method" => "update", "strSql" => $kqStr, "added" => $addArr, "failedAdd" => $failAddArr);
    return  $resultArr;
  }

  public function select()
  {
    # code...
    //return array("trave" => "ok");
    $kqArr = [];
    $product = array();
    $sql = "SELECT * FROM bds;";
    $result = $this->conn->query($sql);

    if ($result->num_rows > 0) {

      // output data of each row
      while ($row = $result->fetch_assoc()) {
        //echo "Code: " . $row["Code"];
        $product["Code"] = $row["Code"];
        $product["HostCode"] = $row["HostCode"];
        $product["Phone1"] = $row["Phone1"];
        $product["Phone1Name"] = $row["Phone1Name"];
        $product["Phone2"] = $row["Phone2"];
        $product["Phone2Name"] = $row["Phone2Name"];
        $product["Phone3"] = $row["Phone3"];
        $product["Phone3Name"] = $row["Phone3Name"];
        $product["ZaloGroup"] = $row["ZaloGroup"];
        $product["FacebookGroup"] = $row["FacebookGroup"];
        $product["Style"] = $row["Style"];
        $product["Bedroom"] = $row["Bedroom"];
        $product["Bathroom"] = $row["Bathroom"];
        $product["Vintage"] = $row["Vintage"];
        $product["Area"] = $row["Area"];
        $product["Address"] = $row["Address"];
        $product["Street"] = $row["Street"];
        $product["Ward"] = $row["Ward"];
        $product["Dist"] = $row["Dist"];
        $product["City"] = $row["City"];
        $product["GoogleMap"] = $row["GoogleMap"];
        $product["Com"] = $row["Com"];
        $product["Vnd"] = $row["Vnd"];
        $product["Usd"] = $row["Usd"];
        $product["Duration"] = $row["Duration"];
        $product["LatestUpdate"] = $row["LatestUpdate"];
        $product["Status"] = $row["Status"];
        $product["ElectricFee"] = $row["ElectricFee"];
        $product["WaterFee"] = $row["WaterFee"];
        $product["NetworkFee"] = $row["NetworkFee"];
        $product["TVCabFee"] = $row["TVCabFee"];
        $product["ParkingFee"] = $row["ParkingFee"];
        $product["DepositFee"] = $row["DepositFee"];
        $product["ServiceFee"] = $row["ServiceFee"];
        $product["Utilities"] = $row["Utilities"];
        $product["UtilitiesLink"] = $row["UtilitiesLink"];
        $product["Furnitures"] = $row["Furnitures"];
        $product["VideoLinkYouTube"] = $row["VideoLinkYouTube"];
        $product["PostTitleEn"] = $row["PostTitleEn"];
        $product["PostTitleVi"] = $row["PostTitleVi"];
        $product["Category1"] = $row["Category1"];
        $product["Category2"] = $row["Category2"];
        $product["Category3"] = $row["Category3"];
        $product["PostContent"] = $row["PostContent"];
        $product["PostBySaler"] = $row["PostBySaler"];
        $product["PhotoPath"] = $row["PhotoPath"];
        $product["PhotoThumbnail"] = $row["PhotoThumbnail"];
        //`Category3`='$Category3',`PostContent`='$PostContent',`PostBySaler`='$PostBySaler',`PhotoPath`='$PhotoPath',`PhotoThumbnail`='$PhotoThumbnail' WHERE `Code`='$Code';";
        array_push($kqArr, $product);
      }
    } else {
      return array("error" => "loi select");
    }
    return $kqArr;
  }
}

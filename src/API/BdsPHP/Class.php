<?php
class VnGate
{
  private $servername = "localhost";
  private $username = "u701203596_vngate";
  private $password = "Nguyen12@";
  private $dbname = "u701203596_vngate";
  private $mysqli;

  public function Gene()
  {
    $Post = array("Code" => "B0001", "Price" => "1,2 ty VND", "HostCode" => "P01", "Phone1" => "0907852444", "Name1" => "Huy", "Phone2" => "0907852443", "Name2" => "Hong", "Phone3" => "0907889999", "Name3" => "Lan", "DayUpdate" => "22/01/2022", "DayDuration" => "22/01/2022", "Content" => "Nhaf pho lien ke", "TypeBds" => "Nha Pho", "PhotoMain" => "xxx", "PhotoList" => "xxx", "Ward" => "xxx", "Dist" => "xxx", "City" => "xxx", "Country" => "xxx", "CurrentStatus" => "xxx",);
    return json_encode($Post);
  }

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
      //$numRow = $this->CheckCodeAndAdd($Code);
      //array_push($checkCodeArr, $numRow);
      /* update */
      array_push($sqlStrArr, $sql);
      $this->mysqli->query($sql);
      /* $fixbug = array("fixbug", $sql, 3, 4);
      return $fixbug; */
      array_push($numEffectArr, $this->mysqli->affected_rows);
      $check = $this->mysqli->query($sql);
      if ($check === TRUE) {
        array_push($addArr, "success");
      } else {
        array_push($failAddArr, "fail" . $Code . " -> " . $sql);
      }
    }
  }
}

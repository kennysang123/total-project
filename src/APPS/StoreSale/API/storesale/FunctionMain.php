<?php
class  FunctionMain
{
  private $servername = "localhost";
  private $username = "u701203596_vngate";
  private $password = "Nguyen12@";
  private $dbname = "u701203596_vngate";
  private $conn1;

  /* public function __construct()
    {
        echo "bds";
    } */

  // Biến lưu trữ kết nối
  public $cn = NULL;

  // Hàm kết nối
  public function connectDB()
  {
    //$this->cn = mysqli_connect($this->hostname, $this->username, $this->password, $this->dbname);
    $this->conn1 = mysqli_connect($this->servername, $this->username, $this->password, $this->dbname);
    mysqli_set_charset($this->conn1, "utf8");
  }

  // Hàm ngắt kết nối
  public function closeConnectDB()
  {
    if ($this->conn1) {
      mysqli_close($this->conn1);
    }
  }



  //ham lay can ho public

  public function getAdmin($searchTextRaw)
  {

    $searchText = $searchTextRaw;

    $sql = "SELECT * FROM StoreSaleAdmin 
    WHERE subDomain LIKE '%$searchText%'
    ORDER BY id ASC"; //ASC | DESC
    //echo $sql;
    $this->connectDB();
    if ($this->conn1) {
      $query = mysqli_query($this->conn1, $sql);
      if ($query) {
        if (true) {
          // Lấy nhiều dữ liệu gán vào mảng
          while ($row = mysqli_fetch_assoc($query)) {
            $data[] = $row;
          }

          echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
      }
    } else {
      $error = ["error" => "error db dev"];
      echo json_encode($error);
    }
    $this->closeConnectDB();
  }


  public function getProduct($searchTextRaw)
  {

    $searchText = $searchTextRaw;

    $sql = "SELECT * FROM StoreSale 
    WHERE productCode LIKE '%$searchText%'  OR prodcutCategory LIKE '%$searchText%'
    ORDER BY id ASC"; //ASC | DESC
    //echo $sql;
    $this->connectDB();
    if ($this->conn1) {
      $query = mysqli_query($this->conn1, $sql);
      if ($query) {
        if (true) {
          // Lấy nhiều dữ liệu gán vào mảng
          while ($row = mysqli_fetch_assoc($query)) {
            $data[] = $row;
          }

          echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
      }
    } else {
      $error = ["error" => "error db dev"];
      echo json_encode($error);
    }
    $this->closeConnectDB();
  }

  //ham lay photo
  public function getPhotos($code)
  {
    // homeviet.top/api/AparmentsAPI/outMain.php?sub=getPhotos/H0001
    // house.homeviet.top/chdv/H0001/photos/4.jpg
    //$inStr = $value;
    //$inStr = json_decode($inStr, true); //return a array
    //$code = $inStr["code"];
    $nameMax = "0";
    $listname = [];
    foreach (glob("../../Store/vaynu/$code" . '/*.jpg') as $file) {
      //$list[] = substr($file, strrpos($file, "/") + 1);
      // /ftp://u701203596.homeviet.top@31.220.110.150/public_html/Store/vaynu/MS0001
      $name = substr($file, strrpos($file, "/") + 1);
      $listname[] =  $name;
    }
    //var_dump($listname);
    $result = array("list" => $listname, "status" => "ok");
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
  }
}
// homeviet.top/api/AparmentsAPI/outMain.php?sub=getHouse/ok
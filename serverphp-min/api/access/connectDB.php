<?php
class DB
{
  private $user = "epiz_30640174";
  private $pass = "0fEaJMS1PZ94Bb";
  private $domain = "sql100.epizy.com";
  private $dbname = "epiz_30640174_w211";
  public $conn;

  /* private $first_name;
    private $last_name;
    private $age; */

  /* public function __construct($user, $pass, $domain, $dbname)
    {
        $this->user = $user;
        $this->pass = $pass;
        $this->domain = $domain;
        $this->dbname = $dbname;
    } */

  /* public function __construct($first_name, $last_name, $age)
    {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->age = $age;
    } */
  public function connectDB()
  {
    //return $this->user;
    // Create connection
    $this->conn = new mysqli($this->domain, $this->user, $this->pass);

    // Check connection
    if ($this->conn->connect_error) {
      //return die("Connection failed: " . $this->conn->connect_error);
      return false;
    }
    //return "Connected successfully";
    return true;
  }

  public function closeConnectToDB()
  {
    if ($this->conn) {
      mysqli_close($this->conn);
    }
  }

  public function insertMultiToDB($CodeArr)
  {
  }

  public function AlreadyRow($Code)
  {
    //$arrData = [];
    $sql = "SELECT `Code` FROM `bds` WHERE `Code`= '$Code';"; // "SELECT Code FROM bds WHERE Code = $Code";
    echo $sql;

    $query = mysqli_query($this->conn, $sql);
    //echo $this->conn;

    if ($query) {
      echo "da ok";
      while ($row = mysqli_fetch_assoc($query)) {
        $data[] = $row;
        echo json_encode($data);
      }
    }
  }

  // Hàm lấy dữ liệu
  public function fetch_assoc($sql = null, $type)
  {
    if ($this->cn) {
      $query = mysqli_query($this->cn, $sql);
      if ($query) {
        if ($type == 0) {
          // Lấy nhiều dữ liệu gán vào mảng
          while ($row = mysqli_fetch_assoc($query)) {
            $data[] = $row;
          }
          return $data;
        } else if ($type == 1) {
          // Lấy một hàng dữ liệu gán vào biến
          $data = mysqli_fetch_assoc($query);
          return $data;
        }
      }
    }
  }

  function insertCodeToDB($CodeArr2)
  {
    $CodeArr = $CodeArr2;
    $CodeArr = ["D2N0005", "D2N0006", "D2N0007"];
    $arrSkip = [];
    $arrAdd = [];
    for ($i =  0; $i < count($CodeArr); $i++) {
      //$check = $this->AlreadyRow($CodeArr[$i]);
      if ($this->AlreadyRow($CodeArr[$i])) {
        array_push($arrSkip, $CodeArr[$i]);
      } else {
        array_push($arrAdd, $CodeArr[$i]);
      }
    }
    $arrResult = array("Skip" => $arrSkip, "Add" => $arrAdd);
    return $arrResult;
  }


  /* Select data */
  public function selectData($sqlString = null, $typeManyOrOne)
  {
    if ($this->conn) {
      $query = mysqli_query($this->conn, $sqlString);
      if ($query) {
        if ($typeManyOrOne == "Many") {
          // Lấy nhiều dữ liệu gán vào mảng
          while ($row = mysqli_fetch_assoc($query)) {
            $data[] = $row;
          }
          return $data;
        } else if ($typeManyOrOne == "One") {
          // Lấy một hàng dữ liệu gán vào biến
          $data = mysqli_fetch_assoc($query);
          return $data;
        }
      }
    }
  }

  public function readRow($rowId)
  {
    return $this->$rowId;
  }

  /* public function getFirstName()
    {
        return $this->first_name;
    }

    public function getLastName()
    {
        return $this->last_name;
    }

    public function getAge()
    {
        return $this->age;
    } */
}

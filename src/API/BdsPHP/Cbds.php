<?php
class  Cbds
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
  public function connect()
  {
    //$this->cn = mysqli_connect($this->hostname, $this->username, $this->password, $this->dbname);
    $this->conn1 = mysqli_connect($this->hostname, $this->username, $this->password, $this->dbname);
    mysqli_set_charset($this->conn1, "utf8");
  }

  // Hàm ngắt kết nối
  public function close()
  {
    if ($this->conn1) {
      mysqli_close($this->conn1);
    }
  }

  public function insert()
  {
    $this->connect();
    if ($this->conn1) {
      echo "ket noi ok";
    } else {
      $error = ["error" => "ket noi msql loi."];
      echo json_encode($error);
    }
    $this->close();
  }
  //----------select all ----------------------
  public function SelectAll($value)
  {
    //$sql = "SELECT * FROM `BdsVngate`;";
    $sql = "SELECT * FROM BdsVngate WHERE Content LIKE '%$value%';";
    $this->connect();
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
      $error = ["error" => "ket noi msql loi."];
      echo json_encode($error);
    }
    $this->close();
  }
  // Hàm lấy dữ liệu
  public function fetch_assoc($sql = null, $isRow)
  {
    $this->connect();
    if ($this->conn1) {
      $query = mysqli_query($this->conn1, $sql);
      if ($query) {
        if ($isRow == 0) {
          // Lấy nhiều dữ liệu gán vào mảng
          while ($row = mysqli_fetch_assoc($query)) {
            $data[] = $row;
          }
          echo json_encode($data);
          //return $data;
        } else if ($isRow == 1) {
          // Lấy một hàng dữ liệu gán vào biến
          $data = mysqli_fetch_assoc($query);
          return $data;
        }
      }
      $this->close();
    }
  }
  //------- insert or update--------------------------
  public function InsertOrUpdate($props)
  {
    $data = json_decode($props);
    $data->pass = "null";
    $props2 = json_encode($data, JSON_UNESCAPED_UNICODE);
    $sql = "INSERT INTO `BdsVngate`(`Code`, `Content`) VALUES ('$data->code','$props2');";

    $this->connect();
    if ($this->conn1) {
      mysqli_query($this->conn1, $sql);
      $arr = ["props" => $props, "sql" => $sql, "status" => "insert thanh cong."];
      echo json_encode($arr);
    } else {
      $error = ["error" => "ket noi msql loi."];
      echo json_encode($error);
    }
    $this->close();
  }
  //--------------
}

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
  /* 
  Lay doanh so cac thang trong nam cua 1 nhan vien
  */
  public function getDoanhSoNam()
  {
    //select * from DungDB_DoanhSoHangNgay where ngayThang between '2023-7-01' and '2023-7-03' and mSNV like 'NV001'; 
    $this->connectDB();
    $dataOut = [];
    for ($i = 1; $i <= 12; $i++) {
      $sql = "SELECT SUM(doanhSo) AS doanhSoThang from DungDB_DoanhSoHangNgay WHERE ngayThang BETWEEN '2023-$i-01' AND '2023-$i-31' AND mSNV LIKE 'NV001'";
      if ($this->conn1) {
        $query = mysqli_query($this->conn1, $sql);
        if ($query) {
          if (true) {
            // Lấy nhiều dữ liệu gán vào mảng
            while ($row = mysqli_fetch_assoc($query)) {
              //array_push($dataOut, $row);
              array_push($dataOut, $row);
            }
          }
        }
      } else {
        $error = ["error" => "error db dev"];
        echo json_encode($error);
      }
    }
    echo json_encode($dataOut, JSON_UNESCAPED_UNICODE);
    $this->closeConnectDB();
  }
  // Hàm kết nối
  public function getDoanhSoByCode()
  {
    //select * from DungDB_DoanhSoHangNgay where ngayThang between '2023-7-01' and '2023-7-03' and mSNV like 'NV001'; 
    $sql = "SELECT * FROM DungDB_DoanhSoHangNgay WHERE ngayThang BETWEEN '2023-7-01' AND '2023-7-31' AND mSNV LIKE 'NV001'";
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
}

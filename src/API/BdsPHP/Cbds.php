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
    $sql = "SELECT * FROM BdsVngate WHERE Content LIKE '%$value%' ORDER BY Id DESC;";
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
  //----------Rent select all ----------------------
  public function rent_select_duration_lessthan_20($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $dateNow = $inStr["dateNow"];
    //var_dump($inStr);
    $sql = "SELECT id,code,typer,street,dist,city,project,utilities,duration,dayUpdate,content,price,area,bath,bed,ownerr,codeHost,DATEDIFF(duration,'$dateNow') AS daysOfDuration,DATEDIFF(dayUpdate,'2022-12-24') AS daysOfUpdate FROM RentVnGate WHERE DATEDIFF(duration,'2022-12-24') < 20 ORDER BY daysOfDuration DESC;";
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
  public function check_code($code)
  {
    $sql = "SELECT code FROM RentVnGate WHERE code = '$code';";
    $this->connect();
    if ($this->conn1) {
      $query = mysqli_query($this->conn1, $sql);
      if ($query) {
        if (true) {
          // Lấy nhiều dữ liệu gán vào mảng
          while ($row = mysqli_fetch_assoc($query)) {
            $data[] = $row;
          }
          if ($data == null) {
            echo "chua co, da them moi";
            return true;
          } else {
            echo "co roi, ko them.";
            return false;
          }
        }
      }
    } else {
      $error = ["error" => "ket noi msql loi."];
      echo json_encode($error);
    }
    $this->close();
  }

  public function rent_insert_new_id($jsonStr)
  {
    $jsonStr2 = json_decode($jsonStr, true); //return a array
    //{"code":"R0007","typer":"Studio","street":"Ngo Tat To Str","dist":"Binh Thanh Dist","city":"HCMC","project":"","utilities":"","duration":"2023-01-03","dayUpdate":"2022-12-27","content":"Free fee all except electricity 4k/kwh, water 100k/person. Fully furnished, 3rd floor, stairs.","price":"6000","area":"25","bath":"1","bed":"1","ownerr":"+84888260793 NANA HOUSE Bình Thạnh 197 ngô tất tố lầu 3","codeHost":""}
    $code = $jsonStr2["code"];
    $typer = $jsonStr2["typer"];
    $street = $jsonStr2["street"];
    $dist = $jsonStr2["dist"];
    $city = $jsonStr2["city"];
    $project = $jsonStr2["project"];
    $utilities = $jsonStr2["utilities"];
    $duration = $jsonStr2["duration"];
    $dayUpdate = $jsonStr2["dayUpdate"];
    $content = $jsonStr2["content"];
    $price = $jsonStr2["price"];
    $area = $jsonStr2["area"];
    $bath = $jsonStr2["bath"];
    $bed = $jsonStr2["bed"];
    $ownerr = $jsonStr2["ownerr"];
    $codeHost = $jsonStr2["codeHost"];
    $isTrue = $this->check_code($code);
    if ($isTrue) {
      $sql = "INSERT INTO RentVnGate (code, typer, street, dist, city, project, utilities, duration, dayUpdate, content, price, area, bath, bed, ownerr, codeHost) VALUES ('$code','$typer','$street','$dist','$city','$project','$utilities','$duration','$dayUpdate','$content','$price','$area','$bath','$bed','$ownerr','$codeHost');";
      $this->connect();
      if ($this->conn1) {
        $query = mysqli_query($this->conn1, $sql);
        if ($query) {
          echo "insert thanh cong";
        }
      } else {
        $error = ["error" => "ket noi msql loi."];
        echo json_encode($error);
      }
      $this->close();
    }
  }

  public function rent_select_with_search($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $searchStr = $inStr["searchStr"];
    $dateNow = $inStr["dateNow"];
    //var_dump($inStr);
    //$sql = "SELECT id,code,typer,street,dist,city,project,utilities,duration,dayUpdate,content,price,area,bath,bed,codeHost FROM RentVnGate WHERE  code LIKE '%$searchStr%' OR  dist LIKE '%$searchStr%' OR typer LIKE '%$searchStr%' OR street LIKE '%$searchStr%' OR city LIKE '%$searchStr%' OR project LIKE '%$searchStr%' OR utilities LIKE '%$searchStr%' OR content LIKE '%$searchStr%' ORDER BY code DESC;";
    $sql = "SELECT id,code,typer,street,dist,city,project,utilities,duration,dayUpdate,content,price,area,bath,bed,ownerr,codeHost,DATEDIFF(duration,'$dateNow') AS daysOfDuration,DATEDIFF('$dateNow',dayUpdate) AS daysOfUpdate FROM RentVnGate WHERE  code LIKE '%$searchStr%' OR  dist LIKE '%$searchStr%' OR typer LIKE '%$searchStr%' OR street LIKE '%$searchStr%' OR city LIKE '%$searchStr%' OR project LIKE '%$searchStr%' OR utilities LIKE '%$searchStr%' OR content LIKE '%$searchStr%' ORDER BY daysOfUpdate ASC;"; //DESC
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

  public function rent_select_post_with_update_min($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $dateNow = $inStr["dateNow"];
    //var_dump($inStr);
    //id,code,type,street,dist,city,project,utilities,duration,dayUpdate 	content,price,area,bath,bed,ownerr,codeHost 	
    $sql = "SELECT id,code,typer,street,dist,city,project,utilities,duration,dayUpdate,content,price,area,bath,bed,ownerr,codeHost,DATEDIFF(duration,'$dateNow') AS daysOfDuration,DATEDIFF('$dateNow',dayUpdate) AS daysOfUpdate FROM RentVnGate ORDER BY daysOfUpdate ASC;"; //DESC
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
  public function rent_select_post_with_new_code($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $dateNow = $inStr["dateNow"];
    //var_dump($inStr);
    //id,code,type,street,dist,city,project,utilities,duration,dayUpdate 	content,price,area,bath,bed,ownerr,codeHost 	
    $sql = "SELECT id,code,typer,street,dist,city,project,utilities,duration,dayUpdate,content,price,area,bath,bed,ownerr,codeHost,DATEDIFF(duration,'$dateNow') AS daysOfDuration,DATEDIFF('$dateNow',dayUpdate) AS daysOfUpdate FROM RentVnGate ORDER BY id DESC;"; //DESC
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

  public function rent_get_number_photo_by_code($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $code = $inStr["code"];
    $nameMax = "0";
    foreach (glob("../../MEDIA/HINH_RENT_VNGATE/$code/Photos" . '/*.*') as $file) {
      //$list[] = substr($file, strrpos($file, "/") + 1);
      $name = substr($file, strrpos($file, "/") + 1);
      $name = str_replace(".jpg", "", $name);
      $name = (int)$name;
      if ($name > 0) {
        $name > $nameMax && $nameMax = $name;
      }
    }
    $re = ["photoMax" => $nameMax];
    echo json_encode($re, JSON_UNESCAPED_UNICODE);
  }
  public function rent_get_photo_listname_by_code($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $code = $inStr["code"];
    $nameMax = "0";
    $listname = [];
    foreach (glob("../../MEDIA/HINH_RENT_VNGATE/$code/Photos" . '/*.jpg') as $file) {
      //$list[] = substr($file, strrpos($file, "/") + 1);
      $name = substr($file, strrpos($file, "/") + 1);
      $listname[] =  $name;
    }
    //var_dump($listname);
    //$re = ["photoMax" => $nameMax];
    $result = array("list" => $listname, "status" => "ok");
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
  }

  //--------------bds-----------------------------
  public function bds_select_with_search_order_by_code($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $searchStr = $inStr["searchStr"];
    $dateNow = $inStr["dateNow"];
    //var_dump($inStr);
    //$sql = "SELECT id,code,typer,street,dist,city,project,utilities,duration,dayUpdate,content,price,area,bath,bed,codeHost FROM RentVnGate WHERE  code LIKE '%$searchStr%' OR  dist LIKE '%$searchStr%' OR typer LIKE '%$searchStr%' OR street LIKE '%$searchStr%' OR city LIKE '%$searchStr%' OR project LIKE '%$searchStr%' OR utilities LIKE '%$searchStr%' OR content LIKE '%$searchStr%' ORDER BY code DESC;";
    $sql = "SELECT id,code,typer,street,dist,city,project,utilities,duration,dayUpdate,content,price,area,bath,bed,codeHost,DATEDIFF(duration,'$dateNow') AS daysOfDuration,DATEDIFF('$dateNow',dayUpdate) AS daysOfUpdate FROM BdsVnGate WHERE  code LIKE '%$searchStr%' OR  dist LIKE '%$searchStr%' OR typer LIKE '%$searchStr%' OR street LIKE '%$searchStr%' OR city LIKE '%$searchStr%' OR project LIKE '%$searchStr%' OR utilities LIKE '%$searchStr%' OR content LIKE '%$searchStr%' ORDER BY id DESC;"; //DESC ASC
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
  public function bds_select_price_range_order_by_code($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $priceMin = $inStr["priceMin"];
    $priceMax = $inStr["priceMax"];
    $dateNow = $inStr["dateNow"];
    //var_dump($inStr);
    //$sql = "SELECT id,code,typer,street,dist,city,project,utilities,duration,dayUpdate,content,price,area,bath,bed,codeHost FROM RentVnGate WHERE  code LIKE '%$searchStr%' OR  dist LIKE '%$searchStr%' OR typer LIKE '%$searchStr%' OR street LIKE '%$searchStr%' OR city LIKE '%$searchStr%' OR project LIKE '%$searchStr%' OR utilities LIKE '%$searchStr%' OR content LIKE '%$searchStr%' ORDER BY code DESC;";
    $sql = "SELECT id,code,typer,street,dist,city,project,utilities,duration,dayUpdate,content,price,area,bath,bed,ownerr,codeHost,DATEDIFF(duration,'$dateNow') AS daysOfDuration,DATEDIFF('$dateNow',dayUpdate) AS daysOfUpdate FROM BdsVnGate WHERE price BETWEEN $priceMin AND $priceMax ORDER BY id DESC;"; //DESC ASC
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
  public function bds_insert_new_id($jsonStr)
  {
    $jsonStr2 = json_decode($jsonStr, true); //return a array
    //{"code":"R0007","typer":"Studio","street":"Ngo Tat To Str","dist":"Binh Thanh Dist","city":"HCMC","project":"","utilities":"","duration":"2023-01-03","dayUpdate":"2022-12-27","content":"Free fee all except electricity 4k/kwh, water 100k/person. Fully furnished, 3rd floor, stairs.","price":"6000","area":"25","bath":"1","bed":"1","ownerr":"+84888260793 NANA HOUSE Bình Thạnh 197 ngô tất tố lầu 3","codeHost":""}
    $code = $jsonStr2["code"];
    $typer = $jsonStr2["typer"];
    $street = $jsonStr2["street"];
    $dist = $jsonStr2["dist"];
    $city = $jsonStr2["city"];
    $project = $jsonStr2["project"];
    $utilities = $jsonStr2["utilities"];
    $duration = $jsonStr2["duration"];
    $dayUpdate = $jsonStr2["dayUpdate"];
    $content = $jsonStr2["content"];
    $price = $jsonStr2["price"];
    $area = $jsonStr2["area"];
    $bath = $jsonStr2["bath"];
    $bed = $jsonStr2["bed"];
    $ownerr = $jsonStr2["ownerr"];
    $codeHost = $jsonStr2["codeHost"];
    $isTrue = $this->check_code($code);
    if ($isTrue) {
      $sql = "INSERT INTO BdsVnGate (code, typer, street, dist, city, project, utilities, duration, dayUpdate, content, price, area, bath, bed, ownerr, codeHost) VALUES ('$code','$typer','$street','$dist','$city','$project','$utilities','$duration','$dayUpdate','$content','$price','$area','$bath','$bed','$ownerr','$codeHost');";
      $this->connect();
      if ($this->conn1) {
        $query = mysqli_query($this->conn1, $sql);
        if ($query) {
          echo "insert thanh cong";
        }
      } else {
        $error = ["error" => "ket noi msql loi."];
        echo json_encode($error);
      }
      $this->close();
    }
  }
  public function bds_get_number_photo_by_code($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $code = $inStr["code"];
    $nameMax = "0";
    foreach (glob("../../MEDIA/HINH_BDS_VNGATE/$code/Photos" . '/*.*') as $file) {
      //$list[] = substr($file, strrpos($file, "/") + 1);
      $name = substr($file, strrpos($file, "/") + 1);
      $name = str_replace(".jpg", "", $name);
      $name = (int)$name;
      if ($name > 0) {
        $name > $nameMax && $nameMax = $name;
      }
    }
    $re = ["photoMax" => $nameMax];
    echo json_encode($re, JSON_UNESCAPED_UNICODE);
  }

  public function bds_get_photo_listname_by_code($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $code = $inStr["code"];
    $nameMax = "0";
    $listname = [];
    foreach (glob("../../MEDIA/HINH_BDS_VNGATE/$code/Photos" . '/*.jpg') as $file) {
      //$list[] = substr($file, strrpos($file, "/") + 1);
      $name = substr($file, strrpos($file, "/") + 1);
      $listname[] =  $name;
    }
    //var_dump($listname);
    //$re = ["photoMax" => $nameMax];
    $result = array("list" => $listname, "status" => "ok");
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
  }
  //-----------------ketdoi-------------------------
  public function ketdoi_get_photo_listname_by_code($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $code = $inStr["code"];
    $nameMax = "0";
    $listname = [];
    foreach (glob("../../MEDIA/HINH_KETDOI_VNGATE/$code/Photos" . '/*.jpg') as $file) {
      //$list[] = substr($file, strrpos($file, "/") + 1);
      $name = substr($file, strrpos($file, "/") + 1);
      $listname[] =  $name;
    }
    //var_dump($listname);
    //$re = ["photoMax" => $nameMax];
    $result = array("list" => $listname, "status" => "ketdoi" . $code);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
  }
  public function ketdoi_select_with_search_order_by_code($value)
  {
    $inStr = $value;
    $inStr = json_decode($inStr, true); //return a array
    $searchStr = $inStr["searchStr"];
    $dateNow = $inStr["dateNow"];
    /* 
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
    */
    $sql = "SELECT id,code,namex,sex,birthday,age,verify,dist,city,country,toila,timnguoi,facebook,telegram,whatsapp,twitter,instagram,linex FROM KetDoiVnGate WHERE  code LIKE '%$searchStr%' OR  dist LIKE '%$searchStr%' OR city LIKE '%$searchStr%' OR namex LIKE '%$searchStr%' OR country LIKE '%$searchStr%' ORDER BY id DESC;"; //DESC ASC
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

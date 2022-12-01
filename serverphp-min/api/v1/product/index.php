<?php
header("Access-Control-Allow-Origin: *");

require_once("../../access/DB.php");
require_once("../../access/functions.php");

//$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; // lay full url
//$method = $_SERVER['REQUEST_METHOD']; // request method

$data = json_decode(file_get_contents('php://input'), true); // return a array
//$CodeStr = $data["Code"]; // nhan chuoi code tu client dang vd: D2N0005,D2N0006
//$CodeStr = "D2N0005,D2N0006,D2N0007,D2N0008,D2N0009,D2N0010,D2N0011,D2N0012";
$Method = "";
$PrivateKey = $data["PrivateKey"];
if ($PrivateKey == "home") {
  $Method = $data["Method"];
}

function load()
{
}


switch ($Method) {
  case "GET":
    /* $arr = array("a" => "ok", "b" => "ok2");
    echo json_encode($arr); */
    $litmitSql = $data["limitSql"];
    $pageNumber = $data["pageNumber"];
    $DB = new DB();
    $check = $DB->connect();
    if ($check) {
      $resultArr = $DB->select($litmitSql, $pageNumber);
      /* $mau = array($resultArr, $data, 3, 4, 5);
      echo json_encode($mau); */
      echo json_encode($resultArr);
    }
    break;
  case "POST":
    echo "{1:2}";

    $CodeStr = $data["Code"];
    $CodeArr = strToArray($CodeStr); // tach chuoi dua vao dau phay thanh array phan tu
    $DB = new DB(); //tao class moi
    //mo ket noi
    $check = $DB->connect();
    if ($check) {
      $resultArr = $DB->insert($CodeArr); // them code vao db, neu co roi thi bo qua, tra ve mang skip, add, faild add
      //array_push($resultArr, $actual_link, $method);
      echo json_encode($resultArr);
    }
    //dong ket noi
    $DB->close();
    break;
  case "PUT":
    $CodeStr = $data["Code"];
    $DB = new DB(); //tao class moi
    $DB2 = new Connect();
    $resultArr = $DB2->Update($CodeStr);
    echo json_encode($resultArr);
    /* 
    //mo ket noi
    $check = $DB->connect();
    if ($check) {
      $resultArr = $DB->update($CodeStr); // them code vao db, neu co roi thi bo qua, tra ve mang skip, add, faild add
      //array_push($resultArr, $actual_link, $method);
      echo json_encode($resultArr);
    } */


    break;
  default:
    $s = array("lienket" => "thatbai", "lienket2" => "thatbainot");
    echo json_encode($s);
}

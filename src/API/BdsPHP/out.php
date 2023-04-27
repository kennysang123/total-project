<?php
header("Access-Control-Allow-Origin: *");
require_once "./Class.php";
include_once "./Cbds.php";
$db = new VnGate();
$bds = new Cbds();

$post = $db->Gene();



if (isset($_GET["sub"])) {
    $api = $_GET["sub"];
    $api = rtrim($api, "/");
    $api2 = explode("/", $api);
    $method = $api2[0];
    $param = $api2[1];
    $rentSelectDuration = $bds->$method($param); // doc du lieu 
    //`https://vngate.top/API/BdsPHP/out.php?sub=${requestMethod}/${requestParam}/`
    //`https://vngate.top/API/BdsPHP/out.php?sub=vntech_select_with_search_order_by_code/{"searchStr":"","dateNow":"2023-03-11"}/`
} else if ($_GET["pageupdate"] == "rent") {
    $data = json_decode(file_get_contents('php://input'), true); // return a array
    $jsonStr = $data["dataStr"];
    $key = $data["PrivateKey"];
    if ($key == "home") {
        $re = $bds->rent_insert_new_id($jsonStr);
    }
} else if ($_GET["pageupdate"] == "bds") {
    $data = json_decode(file_get_contents('php://input'), true); // return a array
    $jsonStr = $data["dataStr"];
    $key = $data["PrivateKey"];
    if ($key == "home") {
        $re = $bds->bds_insert_new_id($jsonStr);
    }
}




/* echo "hehe";
echo  "<pre>" . $api . "</pre>";
var_dump($api2); */
//--------------

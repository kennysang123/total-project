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
    $rentSelectDuration = $bds->$method($param);
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

<?php
header("Access-Control-Allow-Origin: *");
require_once "./FunctionMain.php";
$FunctionMain = new FunctionMain();

// vngate.top/API/DungDB/outMain.php

$connect = $FunctionMain->connectDB();


/* 
Phương pháp truy vấn:
//`https://vngate.top/API/BdsPHP/out.php?sub=${requestMethod}/${requestParam}/`
    //`https://vngate.top/API/BdsPHP/out.php?sub=vntech_select_with_search_order_by_code/{"searchStr":"","dateNow":"2023-03-11"}/`

    https://homeviet.top/api/Webapp/outMain.php?sub=getProduct/1

*/

if (isset($_GET["sub"])) {
    $api = $_GET["sub"]; //lay gia tri bien trong url
    $api = rtrim($api, "/"); // bo ky tu / cuoi chuoi
    $api2 = explode("/", $api); // tach chuoi dua vao ky tu /
    $method = $api2[0];
    $param = $api2[1];
    $ok = $FunctionMain->$method($param); // doc du lieu 
}

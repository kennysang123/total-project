<?php
header("Access-Control-Allow-Origin: *");
require_once "./Class.php";
include_once "./Cbds.php";
$db = new VnGate();
$bds = new Cbds();

$post = $db->Gene();

$data = json_decode(file_get_contents('php://input'), true); // return a array
//---nhan string opject
$d2 = $data["dataUp"];
$d3 = json_decode($d2);


$dk = $d3->method;
$searchValue = $d3->searchValue;

switch ($dk) {
    case 'iu':
        /* code for insert or update data */
        $bds->InsertOrUpdate($d2);
        break;
    case 'selectall':
        /* code for insert or update data */
        $bds->SelectAll($searchValue);
        break;

    default:
        # code...
        break;
}


/* $result = [];
for ($i = 0; $i < 100; $i++) {
    array_push($result, json_decode($post));
}
$sql = "SELECT * FROM BdsVngate WHERE Content LIKE '%$code%';"; */

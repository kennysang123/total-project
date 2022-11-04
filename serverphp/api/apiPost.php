<?php
header("Access-Control-Allow-Origin: *");

$data = json_decode(file_get_contents('php://input'), true); // return a array
//$data = json_encode($data);
$response = array("CodeNhan" => $data["Code"], "TrangThai"  => "thanh cong");
echo json_encode($response);

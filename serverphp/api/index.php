<?php
include_once("./access/connectDB.php");

$DB = new DB();
$user = $DB->connectDB();
echo $user;

$row = $DB->readRow(12);
$loadData = $DB->selectData("ds", "Many");

/* $json = array("a" => 1, "b" => 2);
echo json_encode($json); */

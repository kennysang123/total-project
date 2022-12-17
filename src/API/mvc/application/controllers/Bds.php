<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Bds extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }
    public function index()
    {
        $this->load->view('first_view');
    }
    public function loadPost()
    {
        $this->addData->insert(1, 2);


        $Post = array("Code" => "B0001", "Price" => "1,2 ty VND", "HostCode" => "P01", "Phone1" => "0907852444", "Name1" => "Huy", "Phone2" => "0907852443", "Name2" => "Hong", "Phone3" => "0907889999", "Name3" => "Lan", "DayUpdate" => "22/01/2022", "DayDuration" => "22/01/2022", "Content" => "Nhaf pho lien ke", "TypeBds" => "Nha Pho", "PhotoMain" => "xxx", "PhotoList" => "xxx", "Ward" => "xxx", "Dist" => "xxx", "City" => "xxx", "Country" => "xxx", "CurrentStatus" => "xxx",);
        $result = [];
        for ($i = 0; $i < 100; $i++) {
            array_push($result, $Post);
        }
        $result = json_encode($result);
        echo $result;
    }
}

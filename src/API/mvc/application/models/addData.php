<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class addData extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }
    public function insert()

    {
        $arr = ["gia" => 1, "so" => 2];
        $this->db->insert("DBS", $arr);
    }
}

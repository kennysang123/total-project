<?php
function strToArray($str)
{
    // format of str: D1,D2,D3
    $str_arr = explode(",", $str); // return a array
    for ($i = 0; $i < count($str_arr); $i++) {
        $str_arr[$i] = trim($str_arr[$i]); //trim space before and after
    }
    return $str_arr;
}

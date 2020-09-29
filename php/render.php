<?php

include "conn.php";

//解决跨域
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');

$result = $conn->query("select * from taobaogoods");
$arr = Array();//定义空数组
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i] = $result->fetch_assoc();
}

echo json_encode($arr);



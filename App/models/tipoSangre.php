<?php
header('Content-Type: application/json');
include('../config/connect.php');

$consulta="SELECT id_tipo,tipo_sangre FROM sangre ";
$query=mysqli_query($conn,$consulta);
$array=array();

while($arr=mysqli_fetch_array($query)){
    $array[]=$arr;
}
echo json_encode($array);
?>
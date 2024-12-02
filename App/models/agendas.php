<?php
include('../config/connect.php');
include('../config/seguridad.php');

$RH=$_SESSION['RH'];

$agenda="SELECT es.nome as especialidad,m.nome as medico, c.id_agenda,c.data_inicio,c.data_fin from agenda c
join medico m on m.id_medico=c.id_me
join medico_especialidad me on me.id_medico=m.id_medico
join especialidad es on es.id_especialidad=me.id_especialidad
join user p on p.id_user=c.id_user
where p.RH='$RH'";

$query=mysqli_query($conn,$agenda);
$array=array();

while($arr=mysqli_fetch_array($query)){
    $array[]=array(
        'id' => $arr['id_agenda'],
        'title'=>$arr['especialidad'].' con '.$arr['medico'],
        'start'=>$arr['data_inicio'],
        'end'=>$arr['data_fin']
    );
}
echo json_encode($array);
?>


<?php

include('../config/connect.php');
include('../config/seguridad.php');

$RH=$_SESSION["RH"];
$id_especialidad=htmlspecialchars($_POST['esp']);
$id_medico=htmlspecialchars($_POST['med']);
$datainicio=htmlspecialchars($_POST['data']);
$horainicio=$_POST['hora'].":00:00";
$horafinal=htmlspecialchars(intval($_POST['hora'])+1);
$horafin=$horafinal.":00:00";

$datainicial=$datainicio." ".$horainicio;
$datafinal=$datainicio." ".$horafin;

$i=0;

$consultadata="SELECT data_inicio,id_me FROM agenda where data_inicio='$datainicial' and id_me='$id_medico'";
$querydata=mysqli_query($conn,$consultadata);

while($row=mysqli_fetch_array($querydata)){
    $i++;
}

if($i>0){
    echo "<script>Swal.fire({
        icon: 'error',
        title: 'Lamentamos.',
        text: 'O médico está ocupado nessa hora e data.'
      });</script> ";
}else{
 
$consultaid="SELECT id_user FROM user where RH='$RH'";
$queryRH=mysqli_query($conn,$consultaid);
$ced='';
while($raw=mysqli_fetch_array($queryRH)){
    $ced=$raw['id_user'];
}

$ingresaragenda="INSERT into agenda (id_me,data_inicio,id_user,data_fin) values($id_medico,'$datainicial',$ced,'$datafinal')";
$query=mysqli_query($conn,$ingresaragenda);

if($query){
    echo "<script>Swal.fire({
        icon: 'success',
        title: 'Agendamento confirmado.'
      }); 
      $('#modalagenda').modal('hide');</script> ";
}else{
    echo "<script>Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro no servidor.'
      })</script>";
}
   
}

?>
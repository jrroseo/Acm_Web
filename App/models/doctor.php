<?php
include('../config/connect.php');

$medico=htmlspecialchars($_POST['medico']);
$consulta="SELECT me.id_medico,m.nome 
FROM medico_especialidad me 
join especialidad e on e.id_especialidad=me.id_especialidad 
join medico m on m.id_medico=me.id_medico 
where me.id_especialidad='$medico'";
$query=mysqli_query($conn,$consulta);
$cadena="<label>Selecione o(a) Médico</label>
<select id='med' name='med'>
<option selected='true' disabled>Escolha o médico</option>";
while($arr=mysqli_fetch_array($query)){
    $cadena=$cadena.'<option value='.$arr[0].'>'.($arr[1]).'</option>';
}
echo $cadena."</select>";
?>
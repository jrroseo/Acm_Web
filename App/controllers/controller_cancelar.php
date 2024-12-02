<?php

include('../config/connect.php');
include('../config/seguridad.php');

$id=htmlspecialchars($_POST['id']);

$eliminardata="DELETE from agenda where id_agenda=$id";
$querydata=mysqli_query($conn,$eliminardata);

if($querydata){
    echo "<script>Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Agedamento Cancelado.'
      });  </script> ";
}else{
    echo "<script>Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro no Cancelamento'
      })</script>";
}

?>
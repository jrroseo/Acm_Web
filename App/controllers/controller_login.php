<?php
   include('../config/connect.php');
   if (isset($_POST['accion'])){ 
    switch ($_POST['accion']){
        //casos de registros
        case 'editar_registro':
            editar_registro();
            break; 

            case 'eliminar_registro';
            eliminar_registro();
    
            break;
            case 'acceso_user';
            acceso_user();
            break;
		}

	}
    function editar_registro() {
		$conn=mysqli_connect("localhost","root","","u772710190_agenda");
		extract($_POST);
		$agenda="UPDATE user SET  nome_user = '$nome', edad = '$edad', email = '$email', telefone = '$telefone',
		password ='$password', RH = '$RH', rol = '$rol' WHERE id_user = '$id_user' ";
		mysqli_query($conn, $agenda);
		header('Location: ../views/updatePatientProfile.php');

}

function eliminar_registro() {
    $conn=mysqli_connect("localhost","root","","u772710190_agenda");
    extract($_POST);
    $id_user= $_POST['id_user'];
    $agenda= "DELETE FROM user WHERE id_user= $id_user";
    mysqli_query($conn, $agenda);
    header('Location: ../views/.php');

}

function acceso_user() {
    $RH=$_POST['RH'];
    $password=$_POST['password'];
    session_start();
    $_SESSION['RH']=$RH;
    $conn=mysqli_connect("localhost","root","","u772710190_agenda");
    $agenda= "SELECT * FROM user WHERE RH='$RH' AND password='$password'";
    $resultado=mysqli_query($conn, $agenda);
    $filas=mysqli_fetch_array($resultado);

    if($filas['rol'] == 1){ //admin
        header('Location: ../views/admin/admin-dashboard.php');
    }else if($filas['rol'] == 2){//user
        header('Location: ../views/index.php');
    }else{
	
		header('location:../views/login.php?mensagem=falha');

	}

        
    }
  
    ?>







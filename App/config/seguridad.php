<?php 
session_start();
 if (!isset($_SESSION['RH']) ){
    header("Location: ../../index.php");
}
?>
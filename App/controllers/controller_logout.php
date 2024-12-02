<?php
session_start();
unset($_SESSION["RH"]);
session_destroy();
header("Location: ../../index.php");
?>
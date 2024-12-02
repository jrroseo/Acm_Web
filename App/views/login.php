<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- ===== CSS ===== -->
    <link rel="stylesheet" href="../../public/assets/css/styles.css">
    <link rel="stylesheet" href="../../node_modules/bootstrap/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!-- ===== BOX ICONS ===== -->
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <title>A.C.M-web</title>
</head>

<body>
<?php 
	if(isset($_GET['mensagem'])){
		if($_GET['mensagem']=="falha"){
	
      
            echo "<script>";
            echo " Swal.fire({
            icon: 'error',
            title: 'Senha ou usuário incorreto!',
            text: 'Verifique e tente novamente.',                          
            });";    
        echo "</script>";
         
		}
	}
	?>
    <div class="container">
        <div class="login__content">
        <div class="container-fluid">
            <!-- Login Tab Content -->
            <div class="account-content">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-7 col-lg-6 login-left">
                        <img src="../../public/assets/img/w3.png" class="img-fluid" alt="Doccure Login">
                    </div>
					<div id="logconexion">
                    <form  action="../controllers/controller_login.php" method="POST" autocomplete="off" class="login__form">
					<div id="login">
                        <label class="login__label">ENTRE COM LOGIN.</label>
                        <div>
                            <div class="login__inputs">
                                <div>
                                    <label for="input-usuario" class="login__label">USÚARIO</label>
                                    <input type="text" name="RH" id="RH"  placeholder="Digite Seu Rh" class="login__input">
                                </div>
                                <div>
                                    <label for="input-pass" class="login__label">SENHA</label>
                                    <div class="login__box">
                                    <input type="password" name="password" id="password" placeholder="Digite sua Senha" class="login__input">
                                        <i class="ri-eye-off-line login__eye" id="input-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="login__buttons">
                            <input type="hidden" name="accion" value="acceso_user">
                                <input type="submit" class="login__button" value="ENTRAR">
                            </div>
                        </div>
						</div>
                    </form>
					</div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <?php include("layout/footer.php") ?>
    <!-- js placed at the end of the document so the pages load faster -->
  
  <script src="../../node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
  <script src="../../public/assets/js/codigo.js"></script>
</body>
    
</body>

</html>
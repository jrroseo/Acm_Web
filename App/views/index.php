<?php
include('../config/connect.php');
include('../config/seguridad.php');
?>
<?php
include_once 'layout/header.php';
include_once 'layout/nav.php';
?>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content">
    <div class="container-fluid">
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Registro Hospitalar: N° <?php echo $_SESSION['RH']; ?></h3>
        </div>
      </div>
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-success">
            <div class="inner">
              <h3><i class="fas fa-edit"></i></h3>

              <p></p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
            <a href="agendar.php" class="small-box-footer">MARCAR CONSULTA<br><i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-danger">
            <div class="inner">
              <h3><i class="fas fa-trash-alt"></i></h3>

            </div>
            <div class="icon">
              <i class="ion ion-pie-graph"></i>
            </div>
            <a href="cancelar.php" class="small-box-footer">CANCELAR CONSULTA<br><i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
      </div>
      <!-- /.row -->

  </section>
  <!-- Main content -->

  <!-- /.content -->
</div>
<!-- /.content-wrapper -->
<?php
include_once 'layout/footer.php';
?>
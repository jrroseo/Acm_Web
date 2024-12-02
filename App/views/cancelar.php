<?php
    include_once '../config/connect.php';
    include_once '../config/seguridad.php';
    include_once 'layout/header.php';
    include_once 'layout/nav.php';
    ?>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link href='../../node_modules/fullcalendar/main.css' rel='stylesheet' />
    <script src='../../public/assets/js/agendar.js'></script>
    <script src='../../node_modules/fullcalendar/main.js'></script>
    <script src='../../node_modules/fullcalendar/locales/pt-br.js'></script>
    <script src="https://kit.fontawesome.com/0273d57df4.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src='https://cdn.jsdelivr.net/npm/moment@2.27.0/min/moment.min.js'></script>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section>
        <div class="container-fluid">
            <div class="card card-primary">
                
                <div id="CalendarioWeb" class="CalendarioWeb"></div>
                 <!-- Modal -->
    <div class="modal fade" id="informacion" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Descrição da Consulta</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                    Especialidade / Médico(a):
                        <div id="titulo"></div>
                        Data e Horário da Agenda:
                        <div id="dataI"></div>
                        Fim:
                        <div id="dataF"></div>
                        <input type="button" id="Eliminar" class="btn btn-warning" Value="Eliminar">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="resultado" id="resultado"></div>
    
    </div>
</div>
    </section>
    <!-- Main content -->
    
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  
<?php
include_once 'layout/footer.php';
?>
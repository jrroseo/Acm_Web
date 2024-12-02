<?php
include('../config/connect.php');
include('../config/seguridad.php');

?>
<?php 
include_once 'layout/header.php';
        include_once 'layout/nav.php';
    ?>
<head>

<!-- JavaScript Bundle with Popper -->
<script src="../../node_modules/bootstrap/js/bootstrap.min.js"></script>
<script src='../../node_modules/fullcalendar/main.js'></script>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="../../public/assets/js/adminlte.min.js"></script>
<script src='../../public/assets/js/agendar.js'></script>
<script src='../../node_modules/sweetalert2/dist/sweetalert2.min.js'></script>
<script src="https://kit.fontawesome.com/0273d57df4.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section>
            <div class="content">
                <div class="container-fluid">
                    <div class="col-md-9">
                    <div id="myDiv" class="hidden">

                            <div class="card-body">
                                <label for="">Selecione a Especialidade</label>
                                <select name="especialidad" id="especialidad"> </select>

                                <div name="doctor" id="doctor"> </div>

                                
                            </div>
                            <div class="mostrardata" id="mostrardata">
                                    <button id='data_s' class='btn btn-secondary data_s'>Selecione a data </button>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
        <div id="calendar"></div>
    </div>
          
    <!-- Modal -->
    <div class="modal fade" id="modalagenda" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">HORARÍOS DAS CONSULDAS</h4>
        </div>
      <div class="modal-body">
                        <input type="hidden" readonly name="espec" id="espec">
                        <input type="hidden" readonly name="medi" id="medi">
                        <input type="hidden" readonly name='inicio' id='inicio'>
                        <label><b>Selecione um Horário:</b></label>
                        <select id="mySelect">
                            <option value="">Selecione o Horário...</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="13:30">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                        </select>        
      </div>
      
<div class="modal-footer">
<input type="hidden" name='hora' id='hora'>
<button type="submit" id="registrar" class="btn btn-primary" >Registrar Horário</button>
          
        </div>
      </div>
      
    </div>
  </div>
    <div class="resultado" id="resultado"></div>

    <!-- /Modal -->
    
    <script>
        
        const select = document.getElementById('mySelect');
        const input = document.getElementById('hora');
        select.addEventListener('change', () => {
            input.value = select.value;
        });

        var data = new Date();
        var actual = (data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + (data.getDate()));
        var calendarEl = document.getElementById('calendar');
        var inf = document.getElementById('titulo');
        var dataInicio = document.getElementById('dataI');
        var dataFin = document.getElementById('dataF');

        $("#data_s").on("click", function() {
            
//Esconder div
    var myDiv = document.getElementById('myDiv');

    // Verifica se a div está visível ou não
    if (myDiv.classList.contains('hidden')) {
        myDiv.classList.remove('hidden');
        myDiv.classList.add('visible');
        this.textContent = 'Mostrar Div'; // Muda o texto do botão
    } else {
        myDiv.classList.remove('visible');
        myDiv.classList.add('hidden');
        this.textContent = 'Esconder Div'; // Muda o texto do botão
    }

            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                locale: 'pt-br',
                dateClick: function(info) {

                    if (Date.parse(info.dateStr) < Date.parse(actual) || Date.parse(info.dateStr) === Date.parse(actual)) {
                        Swal.fire({
                            icon: "error",
                            title: "Atenção!",
                            text: "Os dados não podem ser menores ou iguais aos atuais"
                        });
                    } else {
                        $('#event_entry_modal').modal('show');
                        $('#modalagenda').modal('show');
                        $('#medi').val($('#med').val());
                        $('#espec').val($('#especialidad').val());
                        $('#inicio').val(info.dateStr);
                    }
                },
                
                events: '../models/agendas.php'
            });
            calendar.render();
        });
        
    </script>



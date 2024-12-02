
$(document).ready(function(){
    let dropdown=$('#especialidad');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>especialidad</option>');
    dropdown.prop('selectedIndex',0);
    var url="../../App/models/especialidad.php";
    $.getJSON(url,function(data){
        $.each(data,function(i,especialidad){
            dropdown.append($('<option></option>').attr('value',especialidad.id_especialidad).text(especialidad.nome));
        });
    });
    dropdown.change(function(){
        doctores();
    })
});

$(document).ready(function(){
    let doc=$("#doctor");
    doc.change(function(){
        visibleButton();
    })
});

function visibleButton () {
    var buttonToShow = document.getElementById ("data_s");
    buttonToShow.style.visibility = "visible";
    } 

    function doctores(){
        $(document).ready(function(){
           $.ajax({
               type:"POST",
               url:"../../App/models/doctor.php",
               data:"medico="+$("#especialidad").val(),
               success:function(r){
                   $('#doctor').html(r);
                }
           })
       });
       }

$(document).ready(function(){
    $('#registrar').on("click",function(){
        var hora=$('#hora').val();
        var med=$('#medi').val();
        var esp=$('#espec').val();
        var data=$('#inicio').val();

        if(med===null){
            Swal.fire({
                icon:"error",
                title:"Atenção!",
                text: 'Você deve selecionar um médico' 
            });

        }else if(hora<7 || hora>19 ){
            Swal.fire({
                icon:"error",
                title:"Atenção!",
                text: 'O Horário deve estar entre 07:00 e 18:00' 
            });
        
        }else{
            $.ajax({
                url:"../../App/controllers/controller_agendar.php",
                type:"POST",
                data:{ 
                    esp:esp,
                    med:med,
                    data:data,
                    hora:hora
                },
                success:function(resp){
                    $("#resultado").html(resp);
                    $('#modalagenda').on('shown.bs.modal', function () {
                        $('#myInput').trigger('focus')
                      })
                    var calendar = new FullCalendar.Calendar(calendarEl, {
                        initialView: 'dayGridMonth',
                        locale:'pt-br',
                        dateClick: function(info) {
                          
                            if(Date.parse(info.dateStr)<Date.parse(actual) || Date.parse(info.dateStr)===Date.parse(actual) ){
                                Swal.fire({
                                    icon:"error",
                                    title:"Atenção!",
                                    text:"A data não podem ser menor ou igual a atual"
                                });
                              }else{
                          
                          $('#modalagenda').modal('show');
                          $('#medi').val($('#med').val());
                          $('#espec').val($('#especialidad').val());
                          $('#inicio').val(info.dateStr);     
                        }

                        },
                        eventClick:function(info){
                            
                            $("#informacion").modal('show');
                            
                            inf.innerHTML=info.event.title;
                            dataInicio.innerHTML=info.event.start;
                            

                                        },
                                        event:function(info){
                            
                                            $("#informa").val();
                                            
                                            inf.innerHTML=info.event.title;
                                            dataInicio.innerHTML=info.event.start;
                                            
                
                                                        },
                        events:'../../App/models/agendas.php'
                      });
                      calendar.render();
                 },
                 error:function(err,msg){
                     alert(msg);
                 }
            });
        } 
    });
});
document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Muda o texto do botão com base no estado do modo escuro
    if (document.body.classList.contains('dark-mode')) {
        this.innerHTML = '<i class="fa fa-sun-o"></i>';
    } else {
        this.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

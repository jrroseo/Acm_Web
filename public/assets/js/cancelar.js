var data=new Date();
var actual=(data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()));

var calendarEl = document.getElementById('CalendarioWeb');
var inf=document.getElementById('titulo');
var dataInicio=document.getElementById('dataI');
var dataFin=document.getElementById('dataF');
var dataClick;
let id;

var calendar;

var calendar = new FullCalendar.Calendar(calendarEl, {
       initialView: 'dayGridMonth',
       locale:'pt-br',
 eventClick:function(info){
  dataClick=moment(info.event.start).format("YYYY-MM-DD");
  
  if(Date.parse(dataClick)==Date.parse(actual) || Date.parse(actual)>Date.parse(dataClick)){           
    Swal.fire({
        icon:"error",
        title:"Atenção!..",
        text:"Você não pode cancelar com data anterior ou atual"
    });

}else{
    
    $("#informacion").modal('show');
    inf.innerHTML=info.event.title;
    dataInicio.innerHTML=info.event.start;
    dataFin.innerHTML=info.event.end;   

    $("#Eliminar").on('click',function(event){
        event.preventDefault();
        Swal.fire({
            title:'Tem certeza do cancelamento?',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Não Cancelar',
            confirmButtonText: 'Sim, Cancelar!'
        }).then((result)=>{
            if(result.value){
               id=info.event.id;
               $.ajax({
        url:"../../app/controllers/controller_cancelar.php",
        type:"POST",
        data:{
            id:id,
        },
        success:function(resp){
            $("#resultado").html(resp);
          $('#informacion').modal('hide'); 
          recarga();
        },
        error:function(err,msg){
            alert(msg);
        }
        
      });
            }
        });
      });

    }

 },
 events:'../../app/models/agendas.php'
     });
 calendar.render();

function recarga(){
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale:'pt-br',
  eventClick:function(info){
   dataClick=moment(info.event.start).format("YYYY-MM-DD");
   
   if(Date.parse(dataClick)==Date.parse(actual) || Date.parse(actual)>Date.parse(dataClick)){           
     Swal.fire({
         icon:"error",
         title:"Atenção!..",
         text:"Você não pode cancelar com data anterior ou atual"
     });
 
 }else{
    document.getElementById('executeFunction').addEventListener('click', function() {
        // Call your function here
        myFunction();
        // Optionally close the modal after executing the function
        $('#informacion').modal('hide');
        inf.innerHTML=info.event.title;
     dataInicio.innerHTML=info.event.start;
     dataFin.innerHTML=info.event.end;
    });
 
      
 
     $("#Eliminar").on('click',function(event){
   event.preventDefault();
   Swal.fire({
       title:'Tem certeza do cancelamento?',
       icon:'warning',
       showCancelButton:true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       cancelButtonText: 'Não Cancelar',
       confirmButtonText: 'Sim, Cancelar!'
   }).then((result)=>{
       if(result.value){
          id=info.event.id;
          $.ajax({
   url:"../../app/controllers/controller_cancelar.php",
   type:"POST",
   data:{
       id:id,
   },
   success:function(resp){
       $("#resultado").html(resp);
       $("#informacion").modal('hide');
       recarga();
   },
   error:function(err,msg){
       alert(msg);
   }
   
 });
       }
   });
 });
     }
 
  },
  events:'../../app/models/agendas.php'
      });
  calendar.render();
    
}


document.addEventListener('DOMContentLoaded', function() {

    Swal.fire({
    icon:"info",
    title:"Cancelar Agendamento",
    text:"Para Cancelar o Agendamento clique em um deles"    
});

});

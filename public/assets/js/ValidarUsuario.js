$(document).ready(function(){
    var modal2=document.getElementById('modelId');
    $('#RH').on("change",function(){
        var RH=$(this).val();
       
        if(!(/^\d{10}$/.test(RH))){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'RH deben ser 10 digitos'
              });
        }else{
            $.ajax({
                url:"./App/controllers/comprobarRH.php",
                type:"POST",
                data:{ RH:RH},
                success:function(respuesta){
                   $("#resultado").html(respuesta);
                },
                error:function(err,msg){
                    alert(msg);
                }
            })
        }
})
});
$(document).ready(function(){
    let dropdown=$('#sangre');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>Escoge el tipo</option>');
    dropdown.prop('selectedIndex',0);
    var url="./App/models/tipoSangre.php";
    $.getJSON(url,function(data){
        $.each(data,function(i,sangre){
            dropdown.append($('<option></option>').attr('value',sangre.id_tipo).text(sangre.tipo_sangre));
        })
    })
})
$(document).ready(function(){
    $('#registrar').on("click",function(){
    var ced=$('#ced').val();
    var usuario=$('#usuario').val();
    var sangre=$('#sangre').val();
    var idade=$('#idade').val();
    var correo=$('#correo').val();

if( ced==null || usuario==null|| sangre==null|| idade==null || correo==null){
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No puede haber campos vacios'
  });
    }else if(!(/^\d{10}$/.test(ced))){
        Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'la RH es de 10 digitos' 
});
    }else if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo))){
        Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'El correo tiene que ser: xxxx@xxxx.com' 
});
    }else if(idade<18 || idade >140){
        Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Tu idade tiene que estar entre 18 y 140' 
        });
    }else{
$.ajax({
    url:"./App/controllers/registro.php",
    type:"POST",
    data:{ 
        ced:ced,
        usuario:usuario,
        sangre:sangre,
        idade:idade,
        correo:correo
    },
    success:function(resp){
       $("#resultado2").html(resp);
       setTimeout (function(){window.location.reload(); },5000);
    },
    error:function(err,msg){
        alert(msg);
    }
});

}

});
});

function limpiar(){
    $('#ced').val("");

}


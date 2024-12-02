const cadForm = document.getElementById("cad-usuario-form");
const editForm = document.getElementById("edit-usuario-form");
const msgAlertaErroCad = document.getElementById("msgAlertaErroCad");
const msgAlertaErroEdit = document.getElementById("msgAlertaErroEdit");
const msgAlerta = document.getElementById("msgAlerta");
const cadModal = new bootstrap.Modal(document.getElementById("cadUsuarioModal"));

$(document).ready(function() {
   $('#listar-agendamento').DataTable({
       "processing": true,
       "serverSide": true,
       "ajax": "view/listar_agendamentos.php",
       "language": {
       "url": "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json"
       }
      
   });
});

cadForm.addEventListener("submit", async (e) => {
   e.preventDefault();

   if(document.getElementById("id_user").value === ""){
      msgAlertaErroCad.innerHTML = "<div class='alert alert-danger' role='alert'>Selecione um usuário!</div>";
   } else if(document.getElementById("nome_user").value === ""){
      msgAlertaErroCad.innerHTML = "<div class='alert alert-danger' role='alert'>Necessário preencher o campo nome_user!</div>";
   } else if(document.getElementById("data").value === ""){
      msgAlertaErroCad.innerHTML = "<div class='alert alert-danger' role='alert'>Necessário preencher o campo data!</div>";
   } else if(document.getElementById("descricao").value === ""){
      msgAlertaErroCad.innerHTML = "<div class='alert alert-danger' role='alert'>Necessário preencher o campo descrição!</div>";
   } else if(document.getElementById("local").value === ""){
      msgAlertaErroCad.innerHTML = "<div class='alert alert-danger' role='alert'>Necessário preencher o campo local!</div>";
   } else if(document.getElementById("contato").value === ""){
      msgAlertaErroCad.innerHTML = "<div class='alert alert-danger' role='alert'>Necessário preencher o campo contato!</div>";
   } else {

   const dadosForm = new FormData(cadForm);
   dadosForm.append("add", 1);

   document.getElementById("cad-usuario-btn").value = "Salvando...";
   
const dados = await fetch("model/cadastrar.php", {
      method:"POST",
      body: dadosForm,
   });

   //console.log(dados);

const resposta = await dados.json();

if(resposta['erro']){
   msgAlertaErroCad.innerHTML = resposta['msg'];
   
}else{
   msgAlerta.innerHTML = resposta['msg'];
   cadForm.reset();
   cadModal.hide();
}

$("#listar-agendamento").DataTable().ajax.reload();

   }

   document.getElementById("cad-usuario-btn").value = "Cadastrar";
});

async function visAgendas(id_agenda){
	const dados = await fetch('../../App/controllers/listar_usuarios.php?id_agenda=' + id_agenda)
   const resposta = await dados.json();
   const novaData = new Date(resposta['dados'].data);
   const dataComIntl = new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
   });

if(resposta['erro']){
   msgAlerta.innerHTML = resposta['msg'];
   }else{

      const visModal = new bootstrap.Modal(document.getElementById("visAgendasModal"));
      visModal.show();

      document.getElementById("idAgendamento").innerHTML = resposta['dados'].id_agenda;
      document.getElementById("nomeAgendamento").innerHTML = resposta['dados'].especialidad;
      document.getElementById("descricaoAgendamento").innerHTML = resposta['dados'].medico;
      document.getElementById("dataAgendamento").innerHTML = dataComIntl.format(data_inicio);
      
   }
}

const usuario = document.getElementById("id_user");
if (usuario) {
    listarUsuarios();
}

async function listarUsuarios() {
    const dados = await fetch('../../../App/controllers/listar_usuarios.php');
    const resposta = await dados.json();
    //console.log(resposta);

    if (resposta['id_user']) {
        document.getElementById("msgAlertaUsuario").innerHTML = "";

        var opcoes = '<option value="">Selecione</option>';
        for (var i = 0; i < resposta.dados.length; i++) {
            opcoes += '<option value="' + resposta.dados[i]['id_user'] + '">' + resposta.dados[i]['nome_user'] + '</option>';
        }
        usuario.innerHTML = opcoes;
    } else {
        document.getElementById("msgAlertaUsuario").innerHTML = resposta['msg'];
    }
}

async function editarAgendamento(id_agenda) {
   msgAlertaErroEdit.innerHTML = "";

   const dados = await fetch('../../../App/controllers/visualizar.php?id_agenda=' + id_agenda);
   const resposta = await dados.json();
   //console.log(resposta);

   if (resposta['erro']) {
       msgAlerta.innerHTML = resposta['msg'];
   } else {
       const editModal = new bootstrap.Modal(document.getElementById("editUsuarioModal"));
       editModal.show();
       document.getElementById("editid").value = resposta['dados'].id_agenda;
       document.getElementById("editnome_user").value = resposta['dados'].nome_user;
       document.getElementById("editdata").value = resposta['dados'].data;
       document.getElementById("editdescricao").value = resposta['dados'].descricao;
       document.getElementById("editlocal").value = resposta['dados'].local;
       document.getElementById("editcontato").value = resposta['dados'].contato;
       if(resposta['dados'].status == 0) {
         document.getElementById("editativo").value = resposta['dados'].status;
         document.getElementById("editativo").checked = true;
       }else{
       document.getElementById("editinativo").value = resposta['dados'].status;
       document.getElementById("editinativo").checked = true;
       }
   }
}

editForm.addEventListener("submit", async (e) => {
   e.preventDefault();

   document.getElementById("edit-usuario-btn").value = "Salvando...";

   const dadosForm = new FormData(editForm);
   //console.log(dadosForm);
   /*for (var dadosFormEdit of dadosForm.entries()){
       console.log(dadosFormEdit[0] + " - " + dadosFormEdit[1]);
   }*/

   const dados = await fetch("../../App/controllers/editar.php", {
       method: "POST",
       body: dadosForm
   });

   const resposta = await dados.json();
   //console.log(resposta);

   if (resposta['erro']) {
       msgAlertaErroEdit.innerHTML = resposta['msg'];
   } else {
       msgAlertaErroEdit.innerHTML = resposta['msg'];
       listarDataTables = $('#listar-agendamento').DataTable();
       listarDataTables.draw();
   }

   document.getElementById("edit-usuario-btn").value = "Salvar";
});

async function deletarAgendamento(id_agenda) {

   var confirmar = confirm("Tem certeza que deseja excluir o registro selecionado?");

   if(confirmar == true){
       const dados = await fetch('../../App/controllers/deletar.php?id_agenda=' + id_agenda);

       const resposta = await dados.json();
       if (resposta['erro']) {
           msgAlerta.innerHTML = resposta['msg'];
       } else {
           msgAlerta.innerHTML = resposta['msg'];
           listarDataTables = $('#listar-agendamento').DataTable();
           listarDataTables.draw();
       }
   }    

}

const contato = document.getElementById('contato') // Seletor do campo de telefone

    contato.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
    contato.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

    const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    contato.value = valor // Insere o(s) valor(es) no campo
}
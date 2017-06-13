


$(document).ready(function(){
	$("div.container").on("click", "#listar", function(){
		$("#tabela2").empty(); //limpando a tabela
		$.ajax({
			type: 'GET',         //Definição do método HTTP usado
			dataType: 'json',    // Tipo de retorno
			url: 'controller.php?controlador=usuarios&acao=findAll',
			success: function(dados){
				alert("Conseguimos");
				for(var i=0;i<dados.length;i++){
					//Adicionando registros retornados na tabela
					$('tabela').append('<tr><td>'+dados[i].email+'</td><td><span class="label label warning">Delete</span></td></tr>');
				}
			},
			error: function(){
				alert("Não foi possível encontrar os dados.");
			}
		})
	})
})

// JavaScript/jQuery
var totalTarefas = 0;

$(document).ready(function () {
  // Quando o formulário é enviado
  $("form").submit(function (event) {
    event.preventDefault();

    // Adiciona a nova tarefa na lista
    var novaTarefa = $("#addTarefa");
    adicionarTarefaNaLista(novaTarefa.val());
    // Atualiza as estatísticas
    atualizarEstatisticas();
  });

  // Quando uma tarefa é marcada ou desmarcada como concluída
  $("#listaTarefas").on("click", ".nao-concluida, .concluida", function () {
    var tarefaCell = $(this).closest("tr").find(".tarefa");
    // Alterna entre as classes "concluida" e "nao-concluida"
    tarefaCell.toggleClass("concluida");
    tarefaCell.toggleClass("nao-concluida");
    // Atualiza as estatísticas
    atualizarEstatisticas();
  });

  // Quando um botão de apagar é clicado
  $("#listaTarefas").on("click", ".apagar", function () {
    // Remove a linha da tabela
    $(this).closest("tr").remove();
    // Atualiza o total de tarefas
    totalTarefas = totalTarefas - 1;
    // Atualiza as estatísticas
    atualizarEstatisticas();
  });

  // Função para adicionar uma nova tarefa na lista
  function adicionarTarefaNaLista(novaTarefa) {
    var novaLinha =
      "<tr><td class='tarefa nao-concluida'>" +
      novaTarefa +
      "</td><td class='nao-concluida'><img src='imagens/verificar.png' alt='Concluida' /></td><td class='apagar'><img src='imagens/excluir.png' alt='Apagar' /></td></tr>";

    $("#listaTarefas tbody").append(novaLinha);
    $("#addTarefa").val("");
    totalTarefas++;
  }

  // Função para atualizar as estatísticas
  function atualizarEstatisticas() {
    var tarefasConcluidas = $(".tarefa.concluida").length;
    var totalNaoConcluidas = totalTarefas - tarefasConcluidas;

    $("#totalTarefas").text(totalTarefas);
    $("#realizadas").text(tarefasConcluidas);
    $("#naoRealizadas").text(totalNaoConcluidas);
  }
});

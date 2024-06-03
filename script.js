function enviarNota() {
    var nome = document.getElementById("nome").value.trim();
    var matricula = document.getElementById("matricula").value.trim();
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    if (!nome || !matricula || isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("As notas devem estar entre 0 e 10.");
        return;
    }

    var media = (nota1 + nota2) / 2;
    var situacao = media >= 5 ? "Aprovado" : "Reprovado";
    var situacaoClass = situacao === "Aprovado" ? "aprovado" : "reprovado";
    
    var tabela = document.getElementById("corpo-tabela");
    
    var novaLinha = tabela.insertRow(-1);
    var colunaNome = novaLinha.insertCell(0);
    var colunaMatricula = novaLinha.insertCell(1);
    var colunaNota1 = novaLinha.insertCell(2);
    var colunaNota2 = novaLinha.insertCell(3);
    var colunaMedia = novaLinha.insertCell(4);
    var colunaSituacao = novaLinha.insertCell(5);
    
    colunaNome.innerHTML = nome;
    colunaMatricula.innerHTML = matricula;
    colunaNota1.innerHTML = nota1.toFixed(2);
    colunaNota2.innerHTML = nota2.toFixed(2);
    colunaMedia.innerHTML = media.toFixed(2);
    colunaSituacao.innerHTML = situacao;
    colunaSituacao.className = situacaoClass;
    
    limparCamposFormulario();
}
  
function limparCamposFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}
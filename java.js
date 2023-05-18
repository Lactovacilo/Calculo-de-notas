var btnAritmetica = document.getElementById("botaoAritmetica")
var btnPonderada = document.getElementById("botaoPonderada")

var tableAritmetica = document.getElementById("resultsAritmetica")
var tablePonderada = document.getElementById("resultsPonderada")

function conditionPassou(sm){
    if (sm >= 7) {
        return "Passou"
    } else if (sm > 5 && sm < 7) {
        return "Ficou de exame"
    } else {
        return "Reprovado"
    }
}

btnAritmetica.addEventListener("click", function(){
    nome = document.getElementById("nome").value

    nota1 = parseInt(document.getElementById("nota1").value)
    nota2 = parseInt(document.getElementById("nota2").value)
    nota3 = parseInt(document.getElementById("nota3").value)
    nota4 = parseInt(document.getElementById("nota4").value)
    nota5 = parseInt(document.getElementById("nota5").value)

    let soma = (nota1 + nota2 + nota3 + nota4 + nota5)
    let total = soma/5

    tableAritmetica.innerHTML += `
    <tr>
        <td>${nome}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${nota3}</td>
        <td>${nota4}</td>
        <td>${nota5}</td>
        <td>${total}</td>
        <td>${conditionPassou(total)}</td>
    </tr>`

})

btnPonderada.addEventListener("click", function(){
    nome = document.getElementById("nome").value

    nota1 = parseInt(document.getElementById("nota1").value)
    nota2 = parseInt(document.getElementById("nota2").value)
    nota3 = parseInt(document.getElementById("nota3").value)
    nota4 = parseInt(document.getElementById("nota4").value)
    nota5 = parseInt(document.getElementById("nota5").value)

    pesoNota1 = parseInt(document.getElementById("pesoNota1").value)
    pesoNota2 = parseInt(document.getElementById("pesoNota2").value)
    pesoNota3 = parseInt(document.getElementById("pesoNota3").value)
    pesoNota4 = parseInt(document.getElementById("pesoNota4").value)
    pesoNota5 = parseInt(document.getElementById("pesoNota5").value)

    let soma = nota1*pesoNota1 + nota2*pesoNota2 + nota3*pesoNota3 + nota4*pesoNota4 + nota5*pesoNota5
    let divisao = pesoNota1 + pesoNota2 + pesoNota3 + pesoNota4 + pesoNota5

    let total = soma * 10 / divisao

    total = Math.round(total) / 10

    tablePonderada.innerHTML += `
    <tr>
        <td>${nome}</td>
        <td>${nota1}</td>
        <td>${pesoNota1}</td>
        <td>${nota2}</td>
        <td>${pesoNota2}</td>
        <td>${nota3}</td>
        <td>${pesoNota3}</td>
        <td>${nota4}</td>
        <td>${pesoNota4}</td>
        <td>${nota5}</td>
        <td>${pesoNota5}</td>
        <td>${total}</td>
        <td>${conditionPassou(total)}</td>
    </tr>`

})
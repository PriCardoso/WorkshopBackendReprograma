//Desafio Reprograma - Priscila Ap. B. Cardoso

//Entrada valor 1 - Valor da hora

var valorHora = document.querySelector("#valor-hora");

//Entrada valor 2 - Horas do Projeto

var horasProjeto = document.querySelector("#horas-projeto");

//Clicando em Calcular Projeto

//Conta

function calcular ()
    {

        var valorProjeto = (valorHora.valueAsNumber * horasProjeto.valueAsNumber).toFixed(2)

    //Mostrando o Resultdo

    var resposta = document.querySelector("#resposta");

    resposta.textContent = "O valor do seu projeto é de R$ " + valorProjeto.replace(".",",") + ".";
    }
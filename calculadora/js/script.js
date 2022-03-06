//CALCULADORA REPROGRAMA

//ENTRADA DE DADOS 1 = SALARIO ===== <input id="ganho-mes" type="number" value="0" />
var valorMes = document.querySelector("#ganho-mes");
//ENTRADA DE DADOS 2 = HORAS TRABALHADAS ===== <input id="horas-dia" type="number" value="0" />
var horasDia = document.querySelector("#horas-dia");

//CLICAR EM CALCULAR ===== <button onclick="calcularValorHora()">Calcular</button>

//CONTA 

function calcularValorHora() {
    
    var quantidadeHoras = horasDia.valueAsNumber * 22;
    var valorHora = (valorMes.valueAsNumber / quantidadeHoras).toFixed(2);

//MOSTRAR RESULTADO ===== <span class="resposta">R$ 0,00</span><small>/hora</small>
    var respostaSalario = document.querySelector("#resposta");

    respostaSalario.textContent = "R$ " + valorHora.replace(".", ",");
}

 //SEGUIR COM O DESAFIO
 alert("Clique no OK no final da página para prosseguir com o desafio")

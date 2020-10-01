// Menu Calculadoras
const tabMenu = document.querySelectorAll('li a');
const tabContent = document.querySelectorAll('section');

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}

// Calculadora porcentagem
var capturando = "";
function capturar () {
    dado = document.getElementById('dado').value;
    base = document.getElementById('base').value;
    resultado = dado * 100 / base;
    document.getElementById('valorDigitado').innerHTML = resultado.toFixed(2) + '%';
}

function myFunction() {
  var x = document.getElementById("idade").value;
  document.getElementById("demo").innerHTML = x;
}

// Calculadora idade
function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
	var x = document.getElementById("idade").value;
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +x.slice(0, 4),
        mes_aniversario = +x.slice(5, 7),
        dia_aniversario = +x.slice(8, 10),

        quantos_meses = mes_atual - mes_aniversario;  
        quantos_anos = ano_atual - ano_aniversario;

    if (quantos_anos === 0) {
        quantos_anos--;
    }
    return document.getElementById('valorDigitado2').innerHTML = quantos_meses + " meses";

    elseif (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario)
    return document.getElementById('valorDigitado2').innerHTML = quantos_anos < 0 ? 0 : quantos_anos + " anos";
}

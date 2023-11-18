var f = 32;
var c = 273.15;
var k = 255.372;

var temperatura = prompt("Digite o valor da temperatura: ");
var escolhaTemp = prompt("Esse valor esta em C, F ou K: ");

var resuCParaF = (temperatura * 9) / 5 + f;
var resulCParaK = temperatura + k;
var resulFParaK = ((temperatura - f) * 5) / 9 + k;
var resulFParaC = ((temperatura - f) * 5) / 9;
var resulKParaF = ((temperatura - c) * 9) / 5 + f;
var resulKParaC = temperatura - c;

if (escolhaTemp === "C") {
  alert(
    "Valor em Fahrenheit: " + resuCParaF + "\nValor em Kelvin: " + resulCParaK
  );
} else if (escolhaTemp === "F") {
  alert(
    "Valor em Celsius: " + resulFParaC + "\nValor em Kelvin: " + resulFParaK
  );
} else if (escolhaTemp === "K") {
  alert(
    "Valor em Celsius: " + resulKParaC + "\nValor em Fahrenreit: " + resulKParaF
  );
} else {
  alert("Você escolheu uma temperatura invalida! Escolha entre C, F ou K.");
}

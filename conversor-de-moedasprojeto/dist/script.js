var cotacaoDoDolar = 5.32;
var cotacaoDoEuro = 5.27;
var cotacaoBitcoin = 0.0000055;

var nome = prompt("Digite o seu nome: ");
var valorEmDolar = prompt("Digite um valor em Dolar: ");
var valorEmEuro = prompt("Digite em valor em Euro: ");

var valorEmRealDolar = valorEmDolar * cotacaoDoDolar;
var valorEmRealEuro = valorEmEuro * cotacaoDoEuro;
var valorEmBitcoin = valorEmRealDolar * cotacaoBitcoin;
valorEmRealDolar.toFixed(2);
valorEmRealEuro = valorEmRealEuro.toFixed(2);

alert(
  "Boa tarde " +
    nome +
    ".\nValor do dolar em Real: R$ " +
    valorEmRealDolar +
    "\nValor do Euro em Real: R$" +
    valorEmRealEuro +
    "\nEsse valor conertido para Bitcoins ficaria: " +
    valorEmBitcoin
);
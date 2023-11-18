var maximoTentativas = 10;
var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
var iterator = 0;
  
while(chute != numeroSecreto){ 
  if(iterator != 0){
    alert('Você já fez ' + iterator + ' tentativas!');
  }
  
  var chute = prompt('Digite um número entre 1 e 1000');
    
  if (chute == numeroSecreto){
    alert('Acertou!');
  } else if (chute > numeroSecreto){
    alert('O número secreto é menor que ' + chute);
  } else if (chute < numeroSecreto){
    alert('O número secreto é maior que ' + chute);
  }
  iterator += 1;
  if(iterator === maximoTentativas){
    alert('Você atingiu o número máximo de tentativas. O número secreto era: ' + numeroSecreto);
    break;
  }
}
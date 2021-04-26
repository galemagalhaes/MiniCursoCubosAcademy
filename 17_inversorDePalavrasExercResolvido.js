//Inversor de frase - exercício resolvido e comentado


//SEPARAÇÃO DAS PALAVRAS
const texto = "Eu gosto da Cubos Academy"
let palavra = ""; //a variável recebe uma string vazia porque precisa ser definida, senão vai imprimir 'undefined', essa variável vai receber os caracteres durante a passagem do 'for'
const novaFrase = []; //a variável recebe um array vazio

for(let i = 0; i < texto.length; i++) {
  if(texto [i] === " ") {
    novaFrase.push(palavra);
    //o espaço em branco (" ") é a condição para a ação de empurrar os caracteres da variável 'palavra' para dentro do outro array 'novaFrase'. Só entra no 'if' se achar o espaço, senão vai para 'palavra'
    palavra = ""; //resetar 'palavra' depois do push
    continue; // para iniciar a ação de novo, percorrer o array e formar a palavra seguinte
  }

  palavra += texto[i]; //o operador aqui concatena a string, aqui ficam só as letras, os epsços entram no 'if'
}

novaFrase.push(palavra);// quando acaba de executar o 'for', o que sobrou em 'palavra' vai ser empurrado para 'novaFrase'
console.log(novaFrase)

//INVERSÃO
const fraseInvertida = [];
//o 'for' vai ser percorrido do fim para o inicio; o '-1' é porque o indice começa em 0, 
//então precisa subitrair 1 da ultima posição para ter o número do índice, no caso
//a posição 5 tem o índice 4  
for(let i = novaFrase.length - 1; i >= 0; i--) {
  fraseInvertida.push(novaFrase[i]);
}
console.log(fraseInvertida)
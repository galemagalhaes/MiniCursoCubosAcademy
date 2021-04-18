//laço for: 
//deve ser usado quando se sabe quantas vezes será percorrido o array, quantas vezes vai repetir o for. 
//caso não saiba, melhor usar o laço while, exemplo, procurar um item em um array, 
//sem saber quantas vezes vai precisar repetir a varredura.

const listaDeCompras = ["arroz", "feijão", "batata", "macarrão"]
//o laço for contem os mesmos itens do while, mas todos em uma mesma linha na seguinte ordem:
//(a- criação e atribuição de variável; b- condição para aplicação do for; c- contador)
for (let indice = 0; indice < listaDeCompras.length; indice++){
  console.log(listaDeCompras[indice]);
}

//**** atalho para comentar varias linhas de uma vez, selecione as linhas, segure a tecla ctrl + /
//Operadores lógicos
//verificar se uma criança tem idade e altura adequada para usar um brinquedo do parque
//altura mínima 1,40; idade mínima 12
const pessoa = {
    nome: "Glaucia",
    idade: 12,
    altura: 1.39,
    temPassaporte: true
}

//caso 1 - altura mínima E idade mínima
if (pessoa.idade >= 12 && pessoa.altura >= 1.40){
    console.log("A criança pode usar o brinquedo")
} else {
    console.log("A criança NÃO pode usar o brinquedo")
}

  
//outra forma de resolver o caso 1
if (pessoa.idade >= 12){
    if(pessoa.altura >= 1.40){
      console.log(`${pessoa.nome} pode brincar`);
    } else {
      console.log(`${pessoa.nome} não pode brincar porque não tem a altura mínima`);
    } 
} else {
        console.log(`${pessoa.nome} não pode brincar porque não tem a idade mínima`);
}

// altura mínima OU idade mínima

if (pessoa.idade >= 12 || pessoa.altura >= 1.40){
    console.log(`${pessoa.nome} pode brincar`)
} else {
    console.log(`${pessoa.nome} pode brincar`)
}

//Negação
//tem ou não tem passaporte
if (pessoa.temPassaporte){
    console.log(`${pessoa.nome} pode viajar`)
} else {
    console.log(`${pessoa.nome} não pode viajar`)
}

//usando a negação !
if (!pessoa.temPassaporte){
  console.log("BARRADO") //se a condição é verdadeira, ou seja, se tem passaporte, não aparece mensagem
}
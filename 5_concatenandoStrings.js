const pessoa = {
    nome: "Glaucia",
    idade: 37,
    altura: 1.75,
    peso: 80
};
    
  
if (pessoa.idade < 18){
    console.log(pessoa.nome + " é menor de idade") // maneira comun de concatenar usando sinal de +
} else if (pessoa.idade < 60) {
    console.log(`${pessoa.nome} é adulto`) //`${}` é uma das maneiras de concatenar strings
} else {
    console.log(`${pessoa.nome} é um idoso de ${pessoa.idade} anos`) //`${}` chama-se string template
}
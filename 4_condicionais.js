//Condicionais

//PARTE 1 
const pessoa = {
    nome: "Glaucia",
    idade: 37,
    altura: 1.75,
    peso: 80
};
  
//comparador >=
if (pessoa.idade >= 18){
    console.log("É maior de idade.")
} else {
    console.log("É menor de idade.")
}

//comparador <=
if (pessoa.idade <= 18){
    console.log("Entrou no if.")
} else {
    console.log("Entrou no else.")
}

//comparador >
if (pessoa.idade > 18){
    console.log("Entrou no if.")
} else {
    console.log("Entrou no else.")
}
  
//comparador <
if (pessoa.idade < 18){
    console.log("Entrou no if.")
} else {
    console.log("Entrou no else.")
}

//comparador == (igual)(compara conteúdo)
if (pessoa.idade == 18){
    console.log("Entrou no if.")
} else {
    console.log("Entrou no else.")
}
  
//comparador != (diferente)(compara conteúdo)
if (pessoa.idade != 18){
    console.log("Entrou no if.")
} else {
    console.log("Entrou no else.")
}
  
//comparador === (estritamente igual / identico)(compara conteúdo e tipo)
if (pessoa.idade === 18){
    console.log("Entrou no if.")
} else {
    console.log("Entrou no else.")
}
  
//comparador !== (estritamente diferente / não identico)(compara conteúdo e tipo)
if (pessoa.idade !== 18){
    console.log("Entrou no if.")
} else {
    console.log("Entrou no else.")
}

//PARTE 2

if (pessoa.idade < 18){
    console.log("A pessoa é menor de idade.")
} else if (pessoa.idade < 60){
    console.log("A pessoa é adulta.")
} else {
    console.log("A pessoa é idosa")
}
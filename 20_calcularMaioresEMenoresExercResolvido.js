//Função para calcular o % de menores e maiores de idade

const pessoas = [
  {
    nome: "Glaucia",
    idade: 37
  },
  {
    nome: "Alexandre",
    idade: 42
  },
  {
    nome: "Matheus",
    idade: 14
  },
  {
    nome: "Amanda",
    idade: 12
  }
];


function criarRelatorio(lista) {
  let maiores = 0;
  let menores = 0;

  for(let item of lista){
    const idade = item.idade;
    if(idade >= 18) {
      maiores++;
    } else {
      menores++;
    }
  
  }
  const resposta = {
    qtdMaiores: maiores,
    qtdMenores: menores,
    percMaiores: `${maiores/pessoas.length*100}%`,
    percMenores: `${menores/pessoas.length*100}%`
  };

 console.log(resposta)
}

criarRelatorio(pessoas)
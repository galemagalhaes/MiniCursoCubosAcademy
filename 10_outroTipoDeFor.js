//laço for mais simples, sem usar um indice

const listaDeCompras = ["arroz", "feijão", "batata", "macarrão"]
//(cria uma variável, que vai conter os itens DE (of) um array (listaDeCompras))
//nesse caso ele irá imprimir todos os itens do array
for (let item of listaDeCompras) {
  console.log(item);
}
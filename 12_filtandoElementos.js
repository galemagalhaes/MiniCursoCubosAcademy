//Filtrar elementos de um array
//nomeDoArray.push("item") = coloca mais um item ao final do array**
//nomeDoArray.pop() = retira o último item de um array**

const lista = ["arroz", "batata", "amora"];

//criar um array vazio []
const resultado = [];

//variável item será cada item do array
for (let item of lista) {

//'item' entra no array e na proxima iteração [0] "transforma" a string em um array e busca seu indice 0
//em seguida verifica se o que tem nesse indice é a letra "a"
    if (item [0] === "a" || item[0] === "A") {

//se o if for true, vai "empurrar" para o array resutado os itens cuja primeira letra é 'a'
        resultado.push(item);
}
}
console.log(resultado)
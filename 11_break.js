//usando a palavra reservada break
//quando encontrar o item especificado o laço for para de fazer a varredura, sem ir até o final do array

const listaDeCompras = ["arroz", "feijão", "batata", "macarrão"]

for (let item of listaDeCompras) {
    console.log("Verificando item: " + item); 
        if (item === "batata") {
            console.log("Batata está na lista!");
            break;
        }
    
}
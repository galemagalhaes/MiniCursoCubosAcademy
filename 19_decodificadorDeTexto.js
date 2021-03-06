function solucao(textoCodificado) {

  const dicionario = {
    "###" : "C",
    "##@" : "U",
    "#@#" : "B",
    "#@@" : "A",
    "@##" : "D",
    "@#@" : "E",
    "@@#" : "M",
    "@@@" : "Y",
  };

  let resposta = "";
  for(i = 0; i < textoCodificado.length; i+=3) {
    const pedaco = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2];

    resposta += dicionario[pedaco];
  }
  console.log(resposta);
}

solucao("#@@####@@@##@#@@@#@@@")
solucao("#####@#@#@#@")
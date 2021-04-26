// A função deve imprimir um valor de desconto de acordo com algumas regras
//o cupom deve ser RANGOBARATO;
//deve ser usado entre 12h e 13:59h;
//compras abaixo de 100 reais, desconto de 10%;
//compras de 100 reais ou acima, desconto de 20%.

function imprimirValorDesconto(valorDaCompra, hora, cupom){
  let valorDesconto;
  if(cupom === "RANGOBARATO") {
    if(hora >= 12 && hora < 14) {
      if(valorDaCompra >= 100) {
        valorDesconto = valorDaCompra * 20/100;
      } else{
        valorDesconto = valorDaCompra * 10/100
      }
      console.log(`O valor do desconto é ${valorDesconto}`);
      //acrescentei a impressão do valor de pagamento da compra com desconto
      console.log(`O valor a ser pago é ${valorDaCompra - valorDesconto}`)
    } else {
      console.log("Cupom não aceito neste horário")
    }
  } else {
    console.log("Este cupom não é aplicável");
  }
}
 //o formato do horário não está configurado para receber minutos

 imprimirValorDesconto(25, 12, "RANGOBARATO");
 imprimirValorDesconto(125, 14, "RANGOBARATO");
 imprimirValorDesconto(250, 12, "RANGOsnBARATO");
 imprimirValorDesconto(100, 12, "RANGOBARATO");
 imprimirValorDesconto(120, 13, "RANGOBARATO");
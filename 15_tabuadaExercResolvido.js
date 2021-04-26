//Exercício da tabuada

function tabuada(n) {
  for(let i = 1; i <= 10; i++){
    //string tamplate não precisa de + como sinal de concatenação
    console.log(`${n} x ${i} = ${i * n}`); // tudo que está fora da chave {} é texto

    //console.log(`${n}`+ " x "+ `${i}` + " = " + i * n); 
    //também funciona, mas não está bem escrito!!!
  }
}
tabuada(1);
tabuada(2);
tabuada(3);
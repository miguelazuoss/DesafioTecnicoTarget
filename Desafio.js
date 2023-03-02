// Resoluções dos Desafios da Target em JavaScript

function desafio1() {
    let SOMA = 0;
    for (let i = 1; i <= 13; i+=1) {
      SOMA += i;
    }
    return (`A resposta do desafio 1 é: ${SOMA}`);
  }
  
  console.log(desafio1()); // A resposta do desafio 1 é: 91

  function desafio2(numero) {
    let valorAnterior = 0;
    let valorAtual = 1;
    let valorSeguinte = valorAnterior + valorAtual;
  
    for (let i = 1; i <= numero; i+=1) {
      if (valorAtual === numero) {
        return `A resposta do desafio 2 é que: ${numero} pertence à sequência de Fibonacci`;
      }
      valorAnterior = valorAtual;
      valorAtual = valorSeguinte;
      valorSeguinte = valorAnterior + valorAtual;
    }
    return `A resposta do desafio 2 é que: ${numero} não pertence à sequência de Fibonacci`;
  }

  console.log(desafio2(5)); 
  // Informe o numero que deseja consultar na função acima, o Output como 5 de exemplo é "A resposta do desafio 2 é que: 5 pertence à sequência de Fibonacci"

  function desafio5(string) {
    let stringInvertida = "";
    for (let i = string.length - 1; i >= 0; i-=1) {
      stringInvertida += string[i];
    }
    return `A resposta do desafio 5 é: ${stringInvertida}`;
  }
  
  console.log(desafio5("Target")); 
  // Informe a string que deseja inverter no console acima, o Output com o "Target" de exemplo é "A resposta do desafio 5 é: tegraT"
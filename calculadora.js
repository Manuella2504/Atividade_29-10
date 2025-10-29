// calculadora.js

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida');
  }
  return a / b;
}

function potencia(base, expoente) {
  return Math.pow(base, expoente);
}

function raizQuadrada(numero) {
  if (numero < 0) {
    throw new Error('Não é possível calcular raiz quadrada de número negativo');
  }
  return Math.sqrt(numero);
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  potencia,
  raizQuadrada
};

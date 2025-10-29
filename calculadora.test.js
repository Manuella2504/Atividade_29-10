// calculadora.test.js

const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  potencia,
  raizQuadrada
} = require('./calculadora');

describe('Testes da Calculadora', () => {
  
  describe('Função somar', () => {
    test('deve somar dois números positivos', () => {
      expect(somar(2, 3)).toBe(5);
    });

    test('deve somar números negativos', () => {
      expect(somar(-5, -3)).toBe(-8);
    });

    test('deve somar zero', () => {
      expect(somar(5, 0)).toBe(5);
    });
  });

  describe('Função subtrair', () => {
    test('deve subtrair dois números positivos', () => {
      expect(subtrair(10, 4)).toBe(6);
    });

    test('deve subtrair números negativos', () => {
      expect(subtrair(-5, -3)).toBe(-2);
    });

    test('deve retornar negativo quando subtraendo é maior', () => {
      expect(subtrair(3, 10)).toBe(-7);
    });
  });

  describe('Função multiplicar', () => {
    test('deve multiplicar dois números positivos', () => {
      expect(multiplicar(4, 5)).toBe(20);
    });

    test('deve multiplicar por zero', () => {
      expect(multiplicar(5, 0)).toBe(0);
    });

    test('deve multiplicar números negativos', () => {
      expect(multiplicar(-3, -4)).toBe(12);
    });
  });

  describe('Função dividir', () => {
    test('deve dividir dois números positivos', () => {
      expect(dividir(10, 2)).toBe(5);
    });

    test('deve dividir número por ele mesmo', () => {
      expect(dividir(7, 7)).toBe(1);
    });

    test('deve lançar erro ao dividir por zero', () => {
      expect(() => dividir(10, 0)).toThrow('Divisão por zero não é permitida');
    });
  });

  describe('Função potencia', () => {
    test('deve calcular potência de números positivos', () => {
      expect(potencia(2, 3)).toBe(8);
    });

    test('deve calcular potência com expoente zero', () => {
      expect(potencia(5, 0)).toBe(1);
    });

    test('deve calcular potência negativa', () => {
      expect(potencia(2, -1)).toBe(0.5);
    });
  });

  describe('Função raizQuadrada', () => {
    test('deve calcular raiz quadrada de número positivo', () => {
      expect(raizQuadrada(16)).toBe(4);
    });

    test('deve calcular raiz quadrada de zero', () => {
      expect(raizQuadrada(0)).toBe(0);
    });

    test('deve lançar erro para número negativo', () => {
      expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular raiz quadrada de número negativo');
    });
  });

});

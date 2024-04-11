const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(productDetails).toBeInstanceOf(Function);
    // Teste se o retorno da função é um array.
    expect(productDetails('Sabonete', 'Hidratante')).toBeInstanceOf(Array);
    // // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Sabão', 'Detergente')).toHaveLength(2);
    // // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Cloro', 'Sapólio')).toBeInstanceOf(Object);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Desinfetante', 'Alvejante')[0]).not.toEqual(productDetails('Desinfetante', 'Alvejante')[1]);
    // Teste se os dois productIds terminam com 123.
    expect((productDetails('Sabão', 'Detergente')[0].details.productId).endsWith('123')).toBeTruthy();
    expect((productDetails('Sabão', 'Detergente')[1].details.productId).endsWith('123')).toBeTruthy();
})
});
// Source - .toBeInstanceOf() method https://jestjs.io/pt-BR/docs/expect#tobeinstanceofclass
// Source - endsWith() method https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
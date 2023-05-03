const multiply = require('./math');

test('multiplicação de dois números', () => {
  const result1 = multiply(2, 3);
 
  console.log('2x3 : Resultado 1:', result1); // Imprime o resultado da multiplicação
  expect(result1).toBe(6);

  const result2 = multiply(5, 0);
  
  console.log('5x0 : Resultado 2:', result2); // Imprime o resultado da multiplicação
  expect(result2).toBe(0);

  const result3 = multiply(-4, 2);
  
  console.log(' -4x2 : Resultado 3:', result3); // Imprime o resultado da multiplicação
  expect(result3).toBe(-8);
});

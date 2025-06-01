// Strings Extra 3 - Arrow Functions

// Tarefa: Utilize arrow functions para calcular a hipotenusa e gerar a mensagem do resultado.
// 1. Crie uma função chamada `calcularHipotenusa` que receba dois números (ladoA e ladoB) e retorne o comprimento da hipotenusa com 2 casas decimais.
// A fórmula de cálculo da hipotenusa é: c = √(a² + b²)

// Função para calcular a hipotenusa
const calcularHipotenusa = (ladoA: number, ladoB: number): string =>
    Math.sqrt(ladoA ** 2 + ladoB ** 2).toFixed(2);

const hipotenusa1 = calcularHipotenusa(9, 12);
console.log(hipotenusa1); //15.00

const hipotenusa2 = calcularHipotenusa(10, 10);
console.log(hipotenusa2); //14.14

// Comando para rodar este arquivo: npx tsx src/extra3.ts
// Comando para verificar o TypeScript: npx eslint src/extra3.ts
// Comando para testar todos os arquivos: npm test

// Strings Extra 1

// Complete o código abaixo das funções para cumprir com o resultado esperado. Utilize os métodos para strings. Veja: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

let frase =
    'Palavras são, na minha nada humilde opinião, nossa fonte inesgotável de mgia.';

function calcularComprimento(texto: string): number {
    return texto.length;
}

function contarPalavras(texto: string): number {
    return texto.split(' ').length;
}

function contemTrecho(texto: string, palavra: string): boolean {
    return texto.includes(palavra);
}

function substituirTrecho(antigo: string, novo: string): void {
    frase = frase.replace(antigo, novo);
}

console.log(`Comprimento da frase: ${calcularComprimento(frase)}`); //77
console.log(`A frase contem: ${contarPalavras(frase)} palavras`); // 12
console.log(
    `A frase contem a palavra "magia"? ${contemTrecho(frase, 'magia')}`
); // false

console.log('\n------- Corrigindo a palavra "magia"');
substituirTrecho('mgia', 'magia');
console.log('Frase corrigida: ' + frase); // true

console.log(
    `A frase contem a palavra "magia"? ${contemTrecho(frase, 'magia')}`
);

// Comando para rodar este arquivo: npx tsx src/extra1.ts
// Comando para verificar o TypeScript: npx eslint src/extra1.ts
// Comando para testar todos os arquivos: npm test

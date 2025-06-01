// Strings Extra 2
// Crie funções chamadas getFrase() e getAutor() que retornam respectivamente a frase e o autor de um objeto do tipo Ditado.

type Ditado = {
    frase: string;
    autor: string;
};

const ditadoStarWars: Ditado = {
    frase: 'Palavras são, na minha nada humilde opinião, nossa fonte inesgotável de magia.',
    autor: 'Dumbledore',
};

const ditadoPequenoPrincipe: Ditado = {
    frase: 'Tu te tornas eternamente responsável por aquilo que cativas.',
    autor: ' Antoine de Saint-Exupéry',
};

// Adicione seu código aqui 👇 






console.log('Frase: ' + getFrase(ditadoStarWars));
console.log(' - Autor: ' + getAutor(ditadoStarWars));
console.log('Frase: ' + getFrase(ditadoPequenoPrincipe));
console.log(' - Autor: ' + getAutor(ditadoPequenoPrincipe));

// Comando para rodar este arquivo: npx tsx src/extra2.ts
// Comando para verificar o TypeScript: npx eslint src/extra2.ts
// Comando para testar todos os arquivos: npm test

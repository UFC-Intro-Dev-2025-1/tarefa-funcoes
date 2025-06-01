import { execSync } from 'child_process';
import * as fs from 'fs';

let passed = 0;
const total = 4;

console.log(
    '\n\n---------------------------\n\n🔍 Iniciando verificação da atividade...\n'
);

// Valida o TypeScript
try {
    const outputLinter = execSync('npx eslint . --ext .ts').toString();

    if (outputLinter.includes('problem') || outputLinter.includes('error')) {
        console.log('❌ Verifique o TypeScript no código.');
        console.log(outputLinter);
    } else console.log('✅ TypeScript validado!');
} catch (error) {
    console.log(
        '❌ Erros do ESLint:\n',
        error.stdout?.toString() || error.message
    );
}

// Teste 1: Verifica o main.ts
try {
    // testa se roda
    const saidasEsperadas = [
        '30.50',
        '5.75',
        'R$',
        'Arroz',
        'Feijão',
        'Macarrão',
    ];
    const output = execSync('npm run build').toString();
    if (saidasEsperadas.some((saida) => output.toString().includes(saida))) {
        passed++;
        console.log('✅ main.ts: Saída em texto do código é a esperada.');
    } else {
        console.log(
            '❌ main.ts: Saída em texto do código não é a esperada: \nSer ou não ser, eis a questão.'
        );
    }
} catch (e) {
    console.log('❌ main.ts: Erro: ' + e.message);
}

// Teste 2: Verifica o extra1.ts
try {
    // testa primeiro se roda
    const saidaEsperadaExtra1 =
        'A frase contem: 12 palavras\n' +
        'A frase contem a palavra "magia"? false\n\n' +
        '------- Corrigindo a palavra "magia"\n' +
        'Frase corrigida: Palavras são, na minha nada humilde opinião, nossa fonte inesgotável de magia.\n' +
        'A frase contem a palavra "magia"? true';

    const output = execSync('npx tsx src/extra1.ts').toString();

    if (output.toString().includes(saidaEsperadaExtra1)) {
        passed++;
        console.log('✅ extra1.ts: Saída em texto do código é a esperada.');
    } else {
        console.log('❌ extra1.ts: Saída em texto do código não é a esperada.');
    }
} catch (e) {
    console.log('❌ extra1.ts: Erro: ' + e.message);
}

// Teste 3: Verifica o extra2.ts
try {
    // testa primeiro se roda
    const saidaEsperadaExtra2 =
        'Frase: Palavras são, na minha nada humilde opinião, nossa fonte inesgotável de magia.\n' +
        ' - Autor: Dumbledore\n' +
        'Frase: Tu te tornas eternamente responsável por aquilo que cativas.\n' +
        ' - Autor:  Antoine de Saint-Exupéry';

    const output = execSync('npx tsx src/extra2.ts').toString();
    if (output.toString().includes(saidaEsperadaExtra2)) {
        passed++;
        console.log('✅ extra2.ts: Saída em texto do código é a esperada.');
    } else {
        console.log('❌ extra2.ts: Saída em texto do código não é a esperada.');
    }
} catch (e) {
    console.log('❌ extra2.ts: Erro: ' + e.message);
}

// Teste 4: Verifica o extra3.ts
try {
    // testa se o arquivo possui símbolo de arrowfunction
    const elementoArrowFunction = '=>';
    const conteudo = fs.readFileSync('src/extra3.ts', 'utf-8');

    // testa se roda, depois testa a saída
    const saidaEsperadaExtra3 = '15.00\n14.14';
    const output = execSync('npx tsx src/extra3.ts').toString();

    if (output.toString().search(saidaEsperadaExtra3) >= 0) {
        if (conteudo.includes(elementoArrowFunction)) {
            passed++;
            console.log('✅ extra3.ts: Saída em texto do código é a esperada.');
        } else {
            console.log('❌ extra3.ts: Código não usa ArrowFunction.');
        }
    } else {
        console.log('❌ extra3.ts: Saída em texto do código não é a esperada.');
    }
} catch (e) {
    console.log('❌ extra3.ts: Erro: ' + e.message);
}

// Resultado final
console.log(
    `\n\n🎯 Resultado: ${passed}/${total} testes passaram.` +
        '\n\n---------------------------\n\n'
);

// Código de saída para GitHub Classroom
process.exit(passed === total ? 0 : 1);

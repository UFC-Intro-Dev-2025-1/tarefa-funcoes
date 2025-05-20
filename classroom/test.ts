import { execSync } from 'child_process';

let passed = 0;
const total = 4;

console.log(
    '\n\n---------------------------\n\n🔍 Iniciando verificação da atividade...\n'
);

// Teste 1: Verifica o main.ts
try {
    // testa primeiro se roda
    const saidaEsperada = 'Ser ou não ser, eis a questão';
    const output = execSync('npm run build').toString();
    if (output.toString().includes(saidaEsperada)) {
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
        'Comprimento do trecho: 18\n' +
        'Índice do trecho: 25\n' +
        'Frase revisada: Eu não gosto de spoilers';

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
        'Se um triângulo tem lados de 9 e 12, então a hipotenusa mede 15.';

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
    // testa primeiro se roda
    const saidaEsperadaExtra3 = /Eu não gosto de (.+?)\./i;
    const output = execSync('npx tsx src/extra3.ts').toString();
    if (output.toString().search(saidaEsperadaExtra3) >= 0) {
        passed++;
        console.log('✅ extra3.ts: Saída em texto do código é a esperada.');
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

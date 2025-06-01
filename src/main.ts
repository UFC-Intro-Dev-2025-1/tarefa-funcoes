// Sistema de Caixa de Mercantil

// Variáveis para armazenar os itens, o total e a quantidade de itens
let itensRecibo = ''; // String para armazenar os itens do recibo, 1 por linha
let valorTotal = 0.0; // Número para armazenar o valor total
let quantidadeItens = 0; // Número para armazenar a quantidade de itens

// Função para adicionar um item ao recibo
function adicionarItem(nome: string, preco: number): void {
    itensRecibo += `- ${nome}: R$${preco.toFixed(2)}\n`; // Adiciona o item à string
    valorTotal += preco; // Soma o preço ao valor total
    quantidadeItens++; // Incrementa a quantidade de itens
}

// Função para reiniciar a compra
function reiniciarCompra(): void {
    itensRecibo = ''; // Reseta os itens do recibo
    valorTotal = 0.0; // Reseta o valor total
    quantidadeItens = 0; // Reseta a quantidade de itens
    console.log('Compra reiniciada. Todos os itens foram removidos.');
}

// Função para exibir o recibo
function exibirRecibo(): void {
    console.log('Recibo:');
    console.log(itensRecibo || 'Nenhum item no recibo.'); // Exibe os itens ou mensagem padrão
    console.log(`Quantidade de itens: ${quantidadeItens}`); // Exibe a quantidade de itens
    console.log(`Total: R$${valorTotal.toFixed(2)}`); // Exibe o valor total
}

// Exemplo de uso:
// Adicionar itens ao recibo
adicionarItem('Arroz', 20.5);
adicionarItem('Feijão', 10.0);
exibirRecibo();

// Reiniciar a compra
reiniciarCompra();
adicionarItem('Macarrão', 5.75);
exibirRecibo();

// para rodar o código, use o comando:
// npm run build

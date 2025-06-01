// Sistema de Caixa de Mercantil
// Criar funções adicinarItem, exibirRecibo e reiniciarCompra para um sistema de Caixa de Mercantil que funciona com as variáveis abaixo. 
// Fique à vontade para montar sua melhor visualização. Não esqueça de elementos básico como o nome dos itens, a soma total e os valores (em reais R$ 1.00).

// Variáveis para armazenar os itens, o total e a quantidade de itens
let itensRecibo = ''; // String para armazenar os itens do recibo, 1 por linha
let valorTotal = 0.0; // Número para armazenar o valor total
let quantidadeItens = 0; // Número para armazenar a quantidade de itens

// adicionar seu código aqui


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

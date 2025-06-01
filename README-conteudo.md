# Funções

<!-- toc -->

-   [Definindo Funções](#definindo-funções)
    -   [Declaração de Função](#declaração-de-função)
    -   [Expressão de Função](#expressão-de-função)
    -   [Função Construtora](#função-construtora)
-   [Chamando Funções](#chamando-funções)
-   [Escopo de Função e Closures](#escopo-de-função-e-closures)
-   [Objeto `arguments`](#objeto-arguments)
-   [Parâmetros de Função](#parâmetros-de-função)
-   [Funções de Seta (Arrow Functions)](#funções-de-seta-arrow-functions)
    -   [Sintaxe](#sintaxe)
    -   [Características](#características)
    -   [Retornando Objetos Literais](#retornando-objetos-literais)
    -   [Exemplos](#exemplos)
-   [Referências](#referências)

<!-- toc -->

## Definindo Funções

Funções são blocos de código reutilizáveis que realizam tarefas específicas.

### Partes de uma função

Uma função é composta por algumas partes principais:

-   Palavra-chave **`function`**: Indica que se está definindo uma função.
-   **Nome da função**: É o nome que será usado para chamar a função.
-   **Parâmetros** (opcionais): São variáveis que recebem valores quando a função é chamada. São listados entre parênteses e separados por vírgulas.
-   **Corpo da função**: É o bloco de código entre chaves { } que define o que a função faz.
-   **Valor de retorno** (opcional): É o valor que a função retorna quando é chamada. Usualmente, é definido usando a palavra-chave `return`.

Com estas partes, podemos definir uma função de várias maneiras. Veja os tópicos a seguir.

### Declaração de Função

```javascript
// JavaScript
function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}
saudar('Frida')); // esta é a chamada da função, que faz com que ela seja executada
```

```typescript
// TypeScript
function saudar(nome: string): void {
    console.log(`Olá, ${nome}!`);
}
saudar('Frida');

// 'nome:string' significa que temos um parâmetro chamado nome do tipo string
// 'function saudar(...):void' o void significa que a função não tem retorno.
```

> **Nota:** O tipo `void` em TypeScript é usado para indicar que uma função não retorna nenhum valor.

```typescript
// TypeScript - mais um exemplo
// nesse tanto os 2 parâmetros quanto o retorno são do tipo number
function soma(a: number, b: number): number {
    return a + b;
}

const resultado: number = soma(5, 3);
console.log('Resultado da Soma:', resultado);
```

Se nenhum tipo de retorno for definido, o TypeScript tentará inferi-lo por meio dos tipos de variáveis ​​ou expressões retornadas.

### Expressão de Função

Embora a declaração de função acima seja sintaticamente uma declaração, funções também podem ser criadas por uma expressão de função. Tal função pode ser **anônima**: sem nome depois de function. Por exemplo:

```typescript
// TypeScript
const formatarEndereco = function (rua: string, cidade: string): string {
    return `Endereço: ${rua}, ${cidade}`;
};

const endereco = formatarEndereco('Rua José de Alencar', 'Quixadá');
console.log(endereco); // Saída: Endereço: Rua José de Alencar, Quixadá
```

No entanto, um nome pode ser fornecido com uma expressão de função e pode ser utilizado no interior da função para se referir a si mesma, ou em um debugger para identificar a função em stack traces:

```typescript
const fatorial = function fac(n: number): number {
    //console.log(n); // descomente esta linha para acompanhar o n a cada execução
    if (n === 0 || n === 1) return 1;
    else return n * fac(n - 1);
};

console.log(fatorial(3)); // Saída: 6
console.log(fatorial(3));
```

Diferente da função declarada com `function`, não é possível chamar a função de expressão antes da inicialização da função, que é guardada em um variável.

```typescript
console.log(square(5)); // Erro!
var square = function (n) {
  return n * n;
};

```

### Escopo de Função

Funções em JavaScript criam seu próprio escopo. Variáveis declaradas dentro de uma função não são acessíveis fora dela.

```javascript
function exemplo() {
    const mensagem = 'Olá!';
    return mensagem;
}

console.log(exemplo()); // "Olá!"
console.log(mensagem); // Erro: mensagem não está definida
```

No entanto, uma função pode acessar todas variáveis e funções definida fora do escopo onde ela está definida.

```typescript
// TypeScript
const mensagem = 'Olá!';

function exemplo(nome: string): string {
    return mensagem + nome;
}

console.log(exemplo()); // "Olá!"
console.log(mensagem); // Agora não dá mais erro, pois está no mesmo escopo
```

Closures permitem que funções internas acessem variáveis de funções externas mesmo após a execução da função externa.

Quando uma função é definida dentro de outra função, a função interna tem acesso às variáveis da função externa devido ao escopo léxico. Mesmo que a função externa termine sua execução, as variáveis dela permanecem disponíveis para a função interna, porque o JavaScript mantém uma referência ao ambiente onde a função foi criada.

```typescript
// TypeScript
function criarContador(): () => number {
    let contador = 0; // Variável da função externa

    return function incrementar(): number {
        // Função interna (closure)
        contador++; // Acessa a variável da função externa
        return contador;
    };
}

const contador = criarContador(); // cria um closure
console.log(contador()); // Saída: 1
console.log(contador()); // Saída: 2
console.log(contador()); // Saída: 3
```

### Objeto `arguments`

Dentro de uma função, o objeto `arguments` contém todos os argumentos passados para ela.

```javascript
// JavaScript
function somarTodos() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

somarTodos(1, 2, 3); // Retorna 6
```

```javascript
// TypeScript
function somarTodos(...numeros: number[]): number {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total;
}

const resultado = somarTodos(1, 2, 3); // Retorna 6
console.log(resultado);
```

#### Operador `...`

Em TypeScript (e JavaScript), o operador ... é chamado de operador rest ou spread operator, dependendo do contexto em que é usado. Ele tem dois principais usos:

1. Operador **Rest** (para coletar argumentos ou elementos):
   Quando usado em parâmetros de função, ele permite que você colete um número variável de argumentos em um array. Como no exemplo acima, em que `...numeros` coleta todos os argumentos passados para a função em um array chamado numeros. O tipo number[] indica que o operador rest criará um array de números.

2. Operador **Spread** (para espalhar elementos):
   Quando usado em arrays ou objetos, ele permite que você espalhe os elementos ou propriedades. Como no exemplo abaixo:

```typescript
const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5];
console.log(maisNumeros); // Saída: [1, 2, 3, 4, 5]
//Aqui, ...numeros espalha os elementos do array numeros dentro do novo array maisNumeros.
```

### Parâmetros padrão

Funções podem ter parâmetros com valores padrão:

```javascript
// TypeScript
function saudar(nome: string = 'Visitante'): void {
    console.log(`Olá, ${nome}!`);
}

saudar(); // "Olá, Visitante!"
saudar('Lana'); // "Olá, Lana!"
```

### Parâmetros opcionais

Por padrão, o TypeScript assumirá que todos os parâmetros são obrigatórios, mas eles podem ser explicitamente marcados como opcionais.

```typescript
// o operador `?` indica que o parâmetro `c` é optional
function mostrarSoma(a: number, b: number, c?: number): void {
    console.log(a + b + (c || 0));
}

mostrarSoma(1, 2); // 3
mostrarSoma(1, 2, 3); // 6
```

## Funções de Seta (Arrow Functions)

Introduzidas no ES6, as funções de seta oferecem uma sintaxe mais curta:

```javascript
// JavaScript
const somar = (a, b) => a + b;
console.log(somar(1, 2)); //3
```

```typescript
// TypeScript
const somar = (a: number, b: number): number => a + b;
console.log(somar(1, 2)); //3
```

Se a função tiver apenas um parâmetro, os parênteses são opcionais:

```javascript
// JavaScript
const quadrado = (x) => x * x;
console.log(quadrado(3)); // Saída: 9
```

```typescript
// TypeScript
const quadrado = (x: number): number => x * x;
console.log(quadrado(3)); // Saída: 9
```

Para arrow functions com múltiplas instruções, utilize chaves e a palavra-chave `return`:

```javascript
// JavaScript
const somar = (a, b) => {
    const resultado = a + b;
    return resultado;
};
```

### Sintaxe

```javascript
(param1, param2, ..., paramN) => expressão
```

Equivalente a:

```javascript
function(param1, param2, ..., paramN) {
  return expressão;
}
```

### Retornando Objetos Literais

Para retornar um objeto literal, envolva-o entre parênteses:

```javascript
// JavaScript
const criarPessoaMaisVelha = (nome, idade) => ({ nome, idade });
```

Sem os parênteses, o JavaScript interpreta as chaves como o início de um bloco de código, não de um objeto.

### Exemplos Função Tradicional vs. Função de Seta

```javascript
// JavaScript

// Função tradicional
function dobrar(a) {
    return a * 2;
}

// Função de seta
const dobrar = (a) => a * 2;
```

```typescript
// TypeScript

// Função tradicional
function dobrar(a: number): number {
    return a * 2;
}

// Função de seta
const dobrarArrow = (a: number): number => a * 2;
```

```javascript
// JavaScript
const processar = (a, b) => {
    const resultado = a + b;
    return resultado * 2;
};
```

```typescript
// TypeScript
const processar = (a: number, b: number): number => {
    const resultado = a + b;
    return resultado * 2;
};
```

### Tipo Alias

Tipos de função podem ser especificados separadamente de funções com aliases de tipo.

Esses tipos são escritos de forma semelhante às funções de seta. Leia mais sobre funções de seta aqui.

```typescript
//TypeScript
type Zerar = (value: number) => number;
const zerarValor: Zerar = (value) => 0;
```

## Referências

[Funções - Guia JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

[Expressões de Função de Seta - Referência JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[Funções em TypeScript - W3Schools](https://www.w3schools.com/typescript/typescript_functions.php)

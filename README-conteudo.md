# Variáveis

<!-- toc -->

  - [Definindo Funções](#definindo-funções)
    - [Declaração de Função](#declaração-de-função)
    - [Expressão de Função](#expressão-de-função)
    - [Função Construtora](#função-construtora)
  - [Chamando Funções](#chamando-funções)
  - [Escopo de Função e Closures](#escopo-de-função-e-closures)
  - [Objeto `arguments`](#objeto-arguments)
  - [Parâmetros de Função](#parâmetros-de-função)
  - [Funções de Seta (Arrow Functions)](#funções-de-seta-arrow-functions)
- [Expressões de Função de Seta (Arrow Functions)](#expressões-de-função-de-seta-arrow-functions)
  - [Sintaxe](#sintaxe)
  - [Características](#características)
  - [Retornando Objetos Literais](#retornando-objetos-literais)
  - [Exemplos](#exemplos)
    - [Função Tradicional vs. Função de Seta](#função-tradicional-vs-função-de-seta)
    - [Função de Seta com Múltiplas Instruções](#função-de-seta-com-múltiplas-instruções)
- [Referências](#referências)

<!-- toc -->

## Definindo Funções

Funções são blocos de código reutilizáveis que realizam tarefas específicas. 

### Partes de uma função
Uma função é composta por algumas partes principais:

- Palavra-chave **function**: Indica que se está definindo uma função.
- **Nome da função**: É o nome que será usado para chamar a função.
- **Parâmetros** (opcionais): São variáveis que recebem valores quando a função é chamada. São listados entre parênteses e separados por vírgulas.
- **Corpo da função**: É o bloco de código entre chaves {} que define o que a função faz.
- **Valor de retorno** (opcional): É o valor que a função retorna quando é chamada. Usualmente, é definido usando a palavra-chave return.

Com estas partes, podemos definir uma função de várias maneiras. Veja os tópicos a seguir.

### Declaração de Função

```javascript
// JavaScript
function saudar(nome) {
  return `Olá, ${nome}!`;
}
saudar('Frida'); // esta é a **chamada** da função, que faz com que ela seja executada
```
```typescript
// TypeScript
function saudar(nome: string) {
  return `Olá, ${nome}!`;
}
saudar('Frida');  // esta é a **chamada** da função, que faz com que ela seja executada
```

Funções definidas com `function` podem ser declaradas depois da chamada. Exemplo:
```typescript
// TypeScript
console.log(saudar('Frida')); 

function saudar (nome: string) {
  return `Olá, ${nome}!`;
}
```


### Expressão de Função

Embora a declaração de função acima seja sintaticamente uma declaração, funções também podem ser criadas por uma expressão de função. Tal função pode ser **anônima**: sem nome depois de function. Por exemplo:

```typescript
// TypeScript
const saudar = function(nome: string) {
  return `Olá, ${nome}!`;
};

let saudacao = saudar('Lana');
```

No entanto, um nome pode ser fornecido com uma expressão de função e pode ser utilizado no interior da função para se referir a si mesma, ou em um debugger para identificar a função em stack traces:

```typescript
var fatorial = function fac(n) {
  if (n == 0 || n == 1) return 1;
  else return n * fac(n - 1);
}

console.log(fatorial(3));
```
Diferente da função declara com `function`, não é possível chamar antes da inicialização da função, que é guardada em um variável.
```typescript
console.log(square(5)); // Erro!
var square = function (n) {
  return n * n;
};

```

## Escopo de Função

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
const mensagem = 'Olá!';

function exemplo(nome: string) {
  return mensagem + nome;
}

console.log(exemplo()); // "Olá!"
console.log(mensagem); // Agora não dá mais erro, pois está no mesmo escopo
```


A função definida dentro de outra função também pode acessar todas as variáveis definidas na função hospedeira e outras variáveis ao qual a função hospedeira tem acesso.

```javascript
// JavaScript
// As seguintes variáveis são definidas no escopo global
var num1 = 20,
  num2 = 3,
  nome = "Chamahk";

// Esta função é definida no escopo global
function multiplica() {
  return num1 * num2;
}

multiplica(); // Retorna 60

// Um exemplo de função aninhada
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return nome + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Retorna "Chamahk scored 5"
```

## Recursão
Uma função pode referir-se e chamar a si própria. Há três maneiras de uma função referir-se a si mesma. Vamos tratar as duas mais conhecidas:

1. o nome da função

```javascript
let desliga = function desligaTu() {
  setTimeout(function() {
    console.log('desliga tu');
    desligaTu();
  }, 1000);
};

desliga();
```

2. uma variável no escopo que se refere a função

```javascript
let desliga = function desligaTu() {
  setTimeout(function() {
    console.log('desliga tu');
    desliga();
  }, 1000);
};

desliga();
```

Uma função que chama a si mesma é chamada de função recursiva. Em alguns casos, a recursividade é análoga a um laço. Ambos executam o código várias vezes, e ambos necessitam de uma condição (para evitar um laço infinito, ou melhor, recursão infinita, neste caso).


## Objeto `arguments`

Dentro de uma função, o objeto `arguments` contém todos os argumentos passados para ela.

```javascript
function somarTodos() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

somarTodos(1, 2, 3); // Retorna 6
```

## Parâmetros de Função

Funções podem ter parâmetros com valores padrão:

```javascript
function saudar(nome = 'Visitante') {
  return `Olá, ${nome}!`;
}

saudar(); // "Olá, Visitante!"
```

## Funções de Seta (Arrow Functions)

Introduzidas no ES6, as funções de seta oferecem uma sintaxe mais curta:

```javascript
const somar = (a, b) => a + b;
```

Se a função tiver apenas um parâmetro, os parênteses são opcionais:

```javascript
const quadrado = x => x * x;
```

Para funções com múltiplas instruções, utilize chaves e a palavra-chave `return`:

```javascript
const somar = (a, b) => {
  const resultado = a + b;
  return resultado;
};
```

---

# Expressões de Função de Seta (Arrow Functions)

## Sintaxe

```javascript
(param1, param2, ..., paramN) => expressão
```

Equivalente a:

```javascript
function(param1, param2, ..., paramN) {
  return expressão;
}
```

## Retornando Objetos Literais

Para retornar um objeto literal, envolva-o entre parênteses:

```javascript
const criarPessoa = (nome, idade) => ({ nome, idade });
```

Sem os parênteses, o JavaScript interpreta as chaves como o início de um bloco de código, não de um objeto.

## Exemplos

### Função Tradicional vs. Função de Seta

```javascript
// Função tradicional
function dobrar(a) {
  return a * 2;
}

// Função de seta
const dobrar = a => a * 2;
```

### Função de Seta com Múltiplas Instruções

```javascript
const processar = (a, b) => {
  const resultado = a + b;
  return resultado * 2;
};
```

## Referências

[qxcodefup/arcade](https://github.com/qxcodefup/arcade)

[Funções - Guia JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

[Expressões de Função de Seta - Referência JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

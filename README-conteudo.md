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

## Escopo de Função e Closures

Funções em JavaScript criam seu próprio escopo. Variáveis definidas dentro de uma função não são acessíveis fora dela (usando let e const).

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


Closures permitem que funções internas acessem variáveis de funções externas mesmo após a execução da função externa.

```javascript
function saudacao(nome) {
  return function() {
    console.log(`Olá, ${nome}!`);
  };
}

const saudarMaria = saudacao('Maria');
saudarMaria(); // "Olá, Maria!"
```

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

## Características

- **Sem `this` próprio**: O valor de `this` dentro de uma função de seta é o mesmo do contexto onde a função foi definida.

  ```javascript
  const obj = {
    nome: 'Objeto',
    saudar: () => {
      console.log(`Olá, ${this.nome}`);
    }
  };

  obj.saudar(); // "Olá, undefined"
  ```

- **Não pode ser usada como construtora**: Funções de seta não podem ser usadas com `new`.

- **Sem objeto `arguments`**: Funções de seta não possuem o objeto `arguments`. Utilize parâmetros rest (`...args`) se necessário.

  ```javascript
  const somarTodos = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0);
  };
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

[Funções - Guia JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

[Expressões de Função de Seta - Referência JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

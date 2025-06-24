Variáveis são "contêineres" para armazenar valores de dados. Em JavaScript, você pode declarar variáveis usando `var`, `let` ou `const`.

- `var`: A forma mais antiga de declaração. Possui escopo de função e é "elevada" (hoisted) ao topo de seu escopo. Seu uso é desencorajado em código moderno.
- `let`: Introduzida no ES6, permite declarar variáveis com escopo de bloco (`{}`). Uma variável `let` pode ser reatribuída.
- `const`: Também do ES6 e com escopo de bloco. É usada para declarar constantes, ou seja, variáveis cujo valor não pode ser reatribuído após a inicialização.

O JavaScript possui uma tipagem dinâmica, o que significa que uma mesma variável pode armazenar valores de tipos diferentes ao longo do tempo. Existem vários tipos de dados primitivos e um tipo complexo principal:

-   **String**: Representa dados textuais. Ex: `"Olá, mundo!"`.
-   **Number**: Representa tanto números inteiros quanto de ponto flutuante. Ex: `42`, `3.14`.
-   **Boolean**: Representa um valor lógico, `true` ou `false`.
-   **null**: Representa a ausência intencional de qualquer valor de objeto. É um valor atribuído.
-   **undefined**: Indica que uma variável foi declarada, mas ainda não teve um valor atribuído.
-   **Symbol**: Um valor primitivo único e imutável, frequentemente usado como chave de propriedade de objeto.
-   **Object**: Uma coleção de pares chave-valor. Quase tudo em JavaScript que não é um tipo primitivo é um objeto.

```javascript
let nome = "Alice"; // String
const idade = 30; // Number
let ehEstudante = true; // Boolean
let cor = null; // null
let sobrenome; // undefined

// O valor de uma 'const' não pode ser alterado.
// A linha abaixo causaria um erro:
// idade = 31; // TypeError: Assignment to constant variable.

// Mas se a constante for um objeto, suas propriedades podem ser alteradas.
const pessoa = {
  nome: "Bob"
};
pessoa.nome = "Charlie"; // Isso é permitido!
console.log(pessoa.nome); // Saída: "Charlie"
```

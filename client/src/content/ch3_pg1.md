Um array é uma variável especial que pode conter mais de um valor por vez. É uma estrutura de dados fundamental para armazenar uma lista de itens. Em JavaScript, arrays são, na verdade, um tipo especial de objeto, com chaves numéricas (índices) e uma propriedade `length`.

Você pode criar um array usando literais `[]` (a forma mais comum) ou o construtor `Array`. Os elementos de um array são acessados por seu índice, começando em `0`.

Arrays em JavaScript são extremamente versáteis e vêm com uma grande variedade de métodos úteis para adicionar, remover e manipular seus elementos, como `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `map()`, `filter()`, `reduce()`, e muitos outros.

```javascript
// Criando um array
let carros = ["Saab", "Volvo", "BMW"];

// Acessando um elemento pelo seu índice
console.log(carros[0]); // Saída: "Saab"

// Adicionando um novo elemento ao final do array
cars.push("Audi");

// Verificando o novo tamanho do array
console.log(cars.length); // Saída: 4

// Removendo o último elemento
let carroRemovido = cars.pop();
console.log(carroRemovido); // Saída: "Audi"
console.log(cars); // Saída: ["Saab", "Volvo", "BMW"]
```

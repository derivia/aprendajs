Uma função é um bloco de código projetado para executar uma tarefa específica. Uma função é executada quando "algo" a invoca (chama). Funções são um dos blocos de construção fundamentais em JavaScript. Elas permitem que o código seja reutilizável, organizado e mais fácil de depurar.

Funções são definidas com a palavra-chave `function`, seguida por um nome, parênteses `()` que podem conter parâmetros, e chaves `{}` que envolvem o corpo da função.

O JavaScript também suporta **arrow functions** (funções de seta), introduzidas no ES6, que fornecem uma sintaxe mais concisa e têm um comportamento diferente com a palavra-chave `this`. Elas são especialmente úteis para funções curtas e anônimas.

```javascript
// Declaração de função tradicional
function cumprimentar(nome) {
  return "Olá, " + nome + "!";
}

// Função de seta (Arrow Function)
const somar = (a, b) => a + b;

// Chamando as funções
console.log(cumprimentar("Mundo")); // "Olá, Mundo!"
console.log(somar(5, 3)); // 8

// Arrow function com corpo de bloco
const subtrair = (a, b) => {
  // Funções podem ter lógica mais complexa
  const resultado = a - b;
  return resultado;
};
console.log(subtrair(10, 4)); // 6
```

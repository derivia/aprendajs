O JavaScript inclui operadores para realizar diversas operações em valores e variáveis. Eles são os símbolos que "operam" sobre os operandos (valores e variáveis).

-   **Operadores Aritméticos**: `+` (adição), `-` (subtração), `*` (multiplicação), `/` (divisão), `%` (módulo/resto da divisão), `**` (exponenciação).
-   **Operadores de Atribuição**: `=` (atribuição), `+=` (adição e atribuição), `-=` (subtração e atribuição), `*=` (multiplicação e atribuição).
-   **Operadores de Comparação**: `==` (igual a), `===` (estritamente igual a), `!=` (diferente de), `!==` (estritamente diferente de), `>` (maior que), `<` (menor que), `>=` (maior ou igual a), `<=` (menor ou igual a).
-   **Operadores Lógicos**: `&&` (E lógico), `||` (OU lógico), `!` (NÃO lógico).
-   **Operadores Unários**: `++` (incremento), `--` (decremento), `typeof` (retorna o tipo do operando).

A diferença entre `==` e `===` é uma fonte comum de bugs. O operador `==` tenta converter os operandos para um tipo comum antes de comparar (coerção de tipo), enquanto `===` não faz conversão e compara tanto o valor quanto o tipo. É uma boa prática usar sempre `===` para evitar comportamentos inesperados.

```javascript
let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x > y); // true

let a = "5";
let b = 5;

console.log(a == b); // true, porque o JavaScript converte a string "5" para um número
console.log(a === b); // false, porque o tipo é diferente (string vs number)
```

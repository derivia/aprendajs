Escopo determina a acessibilidade (visibilidade) das variáveis. Entender o escopo é crucial para escrever um código robusto e sem bugs, pois controla quais partes do seu código têm acesso a quais variáveis. O JavaScript possui três tipos principais de escopo:

-   **Escopo Global**: Variáveis declaradas fora de qualquer função tornam-se globais. Elas podem ser acessadas e modificadas de qualquer lugar no programa. O uso excessivo de variáveis globais é considerado uma má prática, pois pode levar a conflitos de nomes e código difícil de manter.

-   **Escopo de Função**: Variáveis declaradas com `var` dentro de uma função são acessíveis apenas dentro dessa função. Cada função cria um novo escopo.

-   **Escopo de Bloco**: Variáveis declaradas com `let` e `const` dentro de um bloco (`{...}`) são acessíveis apenas dentro daquele bloco. Isso inclui blocos em laços `for`, condicionais `if`, etc. O escopo de bloco ajuda a evitar que variáveis "vazem" para fora do seu contexto pretendido.

```javascript
let variavelGlobal = "Eu sou global";

function minhaFuncao() {
  let variavelDeFuncao = "Eu estou em uma função";
  console.log(variavelGlobal); // Acessível

  if (true) {
    let variavelDeBloco = "Eu sou de bloco (let/const)";
    var outraVariavelDeFuncao = "Eu sou de função (var)";
    console.log(variavelDeBloco); // Acessível
  }

  // console.log(variavelDeBloco); // Erro: variavelDeBloco is not defined
  console.log(outraVariavelDeFuncao); // Acessível, pois 'var' não tem escopo de bloco
}

minhaFuncao();
// console.log(variavelDeFuncao); // Erro: variavelDeFuncao is not defined
```

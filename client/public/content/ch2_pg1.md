Declarações condicionais são usadas para executar diferentes ações com base em diferentes condições. As principais declarações condicionais em JavaScript são `if`, `else if` e `else`.

A estrutura `if...else` é o pilar do controle de fluxo em muitas linguagens. Ela permite que seu programa tome decisões e siga por caminhos diferentes.

Você também pode usar a declaração `switch` para ramificações complexas de múltiplos caminhos. O `switch` é útil quando você tem uma única expressão ou variável que pode ter muitos valores diferentes e quer executar um bloco de código diferente para cada valor.

```javascript
let hora = new Date().getHours();

// Usando if/else if/else
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

// O mesmo resultado usando switch
let saudacao;
switch (true) {
  case hora < 12:
    saudacao = "Bom dia!";
    break;
  case hora < 18:
    saudacao = "Boa tarde!";
    break;
  default:
    saudacao = "Boa noite!";
}
console.log(saudacao);
```

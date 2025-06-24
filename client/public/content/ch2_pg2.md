Laços (ou loops) são usados em programação para repetir um bloco de código específico até que uma determinada condição seja satisfeita.

-   **`for`**: Repete um bloco de código um número conhecido de vezes. É o mais comum, ideal para quando você sabe exatamente quantas iterações precisa.
-   **`while`**: Repete um bloco de código enquanto uma condição especificada for verdadeira. Perfeito para quando o número de iterações não é conhecido de antemão.
-   **`do...while`**: Semelhante ao `while`, mas executa o bloco de código uma vez *antes* de verificar a condição. Garante pelo menos uma execução.
-   **`for...of`**: Itera sobre objetos iteráveis (como Arrays, Strings). Fornece uma maneira mais simples de acessar cada item de uma coleção.
-   **`for...in`**: Itera sobre as propriedades enumeráveis de um objeto. Útil para inspecionar as chaves de um objeto.

```javascript
// Um simples laço for
for (let i = 0; i < 5; i++) {
  console.log("O número é " + i);
}

// Iterando sobre um array com for...of
const planetas = ["Mercúrio", "Vênus", "Terra"];
for (const planeta of planetas) {
  console.log(planeta);
}

// Iterando sobre as propriedades de um objeto com for...in
const carro = {marca: "Toyota", modelo: "Corolla", ano: 2022};
for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}
```

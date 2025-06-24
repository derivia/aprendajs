ECMAScript 2015, também conhecido como **ES6**, foi uma atualização significativa para o JavaScript, introduzindo muitos recursos que tornam a escrita de código mais fácil e poderosa. Essas adições modernizaram a linguagem e são padrão na maioria dos projetos hoje.

Os principais recursos incluem:
- **`let`** **`const`**: Para declaração de variáveis com escopo de bloco.
- **Arrow Functions**: Uma sintaxe mais curta para funções.
- **Template Literals**: Permitem strings com múltiplas linhas e interpolação de variáveis.
- **Destructuring Assignment**: Uma sintaxe que permite extrair valores de arrays ou objetos em variáveis distintas.
- **Classes**: Uma forma mais clara e simples de criar objetos e lidar com herança.
- **Promises**: Para lidar com operações assíncronas de forma mais elegante.
- **Módulos**: Um sistema nativo para importar e exportar funcionalidades entre arquivos (`import`/`export`).

```javascript
// Template Literals
const nome = "Mundo";
console.log(`Olá, ${nome}!`); // Note o uso de crases (`)

// Destructuring de Objeto
const pessoa = { primeiroNome: 'John', ultimoNome: 'Doe' };
const { primeiroNome, ultimoNome } = pessoa;
console.log(primeiroNome); // John

// Destructuring de Array
const numeros = [10, 20, 30];
const [x, y, z] = numeros;
console.log(y); // 20
```

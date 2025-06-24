JavaScript é, por natureza, uma linguagem de thread única (single-threaded). Isso significa que ele só pode executar uma tarefa de cada vez. Operações assíncronas permitem que seu programa inicie uma tarefa de longa duração (como buscar dados de uma API, ler um arquivo) e continue com outras tarefas sem esperar que a primeira termine. Isso é fundamental para manter a interface do usuário responsiva.

- 
 
**Promises** são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona. Uma Promise pode estar em um de três estados:
- *pending*: estado inicial, nem cumprida nem rejeitada.
- *fulfilled*: significa que a operação foi concluída com sucesso.
- *rejected*: significa que a operação falhou.

-
**`async/await`** é uma "açúcar sintático" (syntactic sugar) construído sobre as Promises, tornando o código assíncrono mais parecido e comportando-se mais como código síncrono. A palavra-chave `async` antes de uma função faz com que ela retorne uma Promise. A palavra-chave `await` pode ser usada dentro de uma função `async` para pausar a execução e esperar que uma Promise seja resolvida.

```javascript
// Uma função que simula uma busca de dados
function buscarDadosSimulados() {
  // Retorna uma Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula uma resposta de sucesso
      const dados = { id: 1, nome: "Produto A" };
      resolve(dados);
      // Para simular um erro, você chamaria reject()
      // reject("Erro ao buscar dados.");
    }, 2000); // Espera 2 segundos
  });
}

async function exibirDados() {
  console.log("Iniciando busca de dados...");
  try {
    // 'await' pausa a função até a Promise ser resolvida
    const dados = await buscarDadosSimulados();
    console.log("Dados recebidos:", dados);
  } catch (error) {
    console.error("A busca de dados falhou:", error);
  }
  console.log("Busca de dados finalizada.");
}

exibirDados();
```

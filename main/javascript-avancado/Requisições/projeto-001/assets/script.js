/*
███████╗██████╗ ███████╗██╗   ██╗██╗███████╗██╗████████╗
██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝██║██╔════╝██║╚══██╔══╝
█████╗  ██████╔╝█████╗   ╚████╔╝ ██║█████╗  ██║   ██║   
██╔══╝  ██╔═══╝ ██╔══╝    ╚██╔╝  ██║██╔══╝  ██║   ██║   
███████╗██║     ███████╗   ██║   ██║██║     ██║   ██║   
╚══════╝╚═╝     ╚══════╝   ╚═╝   ╚═╝╚═╝     ╚═╝   ╚═╝   

🔹 INTRODUÇÃO A REQUISIÇÕES (JAVASCRIPT)

→ O que são requisições?

Requisições (ou "requests") são pedidos que um software faz para se comunicar com outro sistema,
normalmente usando a rede. Em JavaScript, isso é comumente usado para buscar dados de servidores,
APIs ou bancos de dados, sem que a página precise ser recarregada.

→ Por que usamos?

Porque aplicações modernas precisam interagir com servidores constantemente:
- Buscar dados (ex: posts, produtos, usuários)
- Enviar dados (ex: formulários, uploads)
- Atualizar dados (ex: editar perfil)
- Deletar dados (ex: apagar conta)

→ Tipos de métodos HTTP mais usados:

1. GET    → para **buscar** informações
2. POST   → para **enviar/criar** informações
3. PUT    → para **atualizar** informações
4. DELETE → para **remover** informações

→ Como fazemos requisições no JavaScript?

Podemos usar:
- A função nativa `fetch()` (mais moderna e baseada em Promises)
- A biblioteca `axios` (mais poderosa e amigável em alguns casos)
- Antigamente, usava-se `XMLHttpRequest` (hoje obsoleto para novos projetos)

→ Exemplo básico usando `fetch()`:

fetch('https://api.exemplo.com/dados')
  .then(resposta => resposta.json()) // converte resposta para JSON
  .then(dados => {
    console.log(dados); // manipula os dados recebidos
  })
  .catch(erro => {
    console.error('Erro na requisição:', erro);
  });

→ Importante lembrar:
- Toda requisição pode falhar (por isso usamos `.catch()`)
- A resposta do servidor quase sempre precisa ser transformada com `.json()` ou `.text()`
- Requisições são assíncronas (acontecem "em paralelo"), por isso usamos `.then()` ou `async/await`

→ Dica para nunca esquecer:
"Requisições são como cartas que seu código envia para outro computador.
Se a carta for bem escrita e o destinatário responder, você pode usar a resposta como quiser."

*/

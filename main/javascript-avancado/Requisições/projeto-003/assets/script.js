/*
██████╗ ███████╗██╗    ██╗    ██╗    ██╗███████╗██████╗ 
██╔══██╗██╔════╝██║    ██║    ██║    ██║██╔════╝██╔══██╗
██████╔╝█████╗  ██║ █╗ ██║    ██║ █╗ ██║█████╗  ██████╔╝
██╔═══╝ ██╔══╝  ██║███╗██║    ██║███╗██║██╔══╝  ██╔══██╗
██║     ███████╗╚███╔███╔╝    ╚███╔███╔╝███████╗██║  ██║
╚═╝     ╚══════╝ ╚══╝╚══╝      ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝

🔹 COMO A WEB FUNCIONA? (REQUISIÇÃO E RESPOSTA)

🧠 A internet funciona com base em uma **comunicação entre cliente e servidor**,
por meio de **requisições (requests)** e **respostas (responses)**, usando o protocolo HTTP.

→ CLIENTE: Navegador ou aplicação (como seu código JavaScript no navegador).
→ SERVIDOR: Máquina que armazena os dados ou executa ações (ex: API, banco de dados, etc).

📤 REQUEST (REQUISIÇÃO) → é o pedido que o cliente envia para o servidor.
Estrutura básica de uma requisição:
-----------------------------------
🔹 Método HTTP → (GET, POST, PUT, DELETE...)
🔹 URL → endereço do recurso (ex: https://api.site.com/usuarios)
🔹 Cabeçalhos (Headers) → informações adicionais (ex: autenticação, tipo de dado)
🔹 Corpo (Body) → só em métodos como POST ou PUT (enviamos dados em JSON, por exemplo)

📥 RESPONSE (RESPOSTA) → é o que o servidor envia de volta para o cliente.
Estrutura básica da resposta:
-----------------------------
🔹 Código de status (Status Code) → ex: 200 OK, 404 Not Found, 500 Server Error
🔹 Cabeçalhos (Headers) → tipo do conteúdo, tempo de cache, etc.
🔹 Corpo (Body) → os dados em si (ex: um JSON com as informações requisitadas)

💡 Exemplo real:
Você faz:
GET https://api.site.com/usuarios/1

O servidor responde:
200 OK
{
  "id": 1,
  "nome": "Duan",
  "curso": "Análise e Desenvolvimento de Sistemas"
}

🔁 Essa troca é constante em qualquer aplicação web moderna.

→ Analogia para lembrar:
"Enviar uma requisição é como preencher um formulário e entregar no balcão (cliente).
A resposta é como receber um envelope com a informação que você pediu (servidor)."

*/

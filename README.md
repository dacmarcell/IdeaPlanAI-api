# IdeaPlanAI - Transforme suas ideias em projetos com IA

## Aplicação de Gerenciamento de Projetos

Este serviço permite que o usuário envie uma ideia de projeto e receba de volta uma análise detalhada, incluindo:

- **Requisitos funcionais e não funcionais**
- **Estimativa de tempo de construção, separada por tópicos**
- **Recomendações das melhores tecnologias para o projeto**

## Exemplo de Fluxo Operacional

1. **Input do usuário:**

   O usuário descreve seu projeto, por exemplo:

   > "Quero um sistema de gerenciamento de tarefas para equipes, onde os usuários podem criar, editar e excluir tarefas, definir prazos, atribuir membros e ter uma visão do progresso geral com gráficos. Ele precisa ser seguro e capaz de suportar muitos usuários simultâneos."

2. **Processamento do input:**

   O modelo processa a entrada fornecida.

3. **Resposta:**

   A aplicação retorna uma resposta em Markdown, contendo os detalhes solicitados (requisitos, estimativas, tecnologias).

## Modelo Utilizado

- **Nvidia LLaMA Nemotron 70B Instruct**

## Requisitos

- **Node.js v23**

## Como Rodar?

### 1. Instalar as dependências:

Execute o comando abaixo para instalar as dependências:

```bash
npm ci
```

### 2. Iniciar o webservice:

Use o seguinte comando para iniciar o servidor:

```bash
npm start
```

## Variáveis de Ambiente

Configure a variável de ambiente abaixo antes de iniciar a aplicação:

- `NVIDIA_NIM_API_KEY`: Chave de API necessária para acessar o modelo.

## Rotas

### POST `/`

**Content-Type:** `application/json`

Corpo da requisição:

```json
{
  "project": "<SUA-IDEIA-DE-PROJETO>"
}
```

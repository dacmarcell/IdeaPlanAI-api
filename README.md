### IdeaPlanAI - Transforme suas ideias em projetos com IA

Uma ferramenta de IA que auxilia na transformação de ideias em projetos reais, fornecendo análises detalhadas e precisas.

### **Instalação e execução**

**Pré-requisitos**

- Node.js v22 ou v23 (recomendado v23 para desenvolvimento)
- npm (ou yarn, pnpm, bun...)

**Clone o repositório**

```bash
git clone <url>
```

**Instale as dependências**

```bash
cd <proj-folder>
npm ci
```

**Build(necessário para produção caso esteja utilizando o node v22)**

```bash
npm run build
```

### Inicie o servidor

- Desenvolvimento (Node.js v23)

```bash
npm run start:dev
```

- Produção (Node v22 ou v23)

```bash
npm run start:prod
```

### Funcionalidades

- **Análise de requisitos**: Identifica requisitos funcionais e não funcionais.
- **Estimativa de tempo**: Fornece uma estimativa de tempo para cada etapa do projeto.
- **Recomendação de tecnologias**: Sugere as melhores tecnologias para a implementação.

### Exemplo de Fluxo Operacional

1. **Input do usuário:**

   O usuário descreve seu projeto, por exemplo:

   > "Quero um sistema de gerenciamento de tarefas para equipes, onde os usuários podem criar, editar e excluir tarefas, definir prazos, atribuir membros e ter uma visão do progresso geral com gráficos. Ele precisa ser seguro e capaz de suportar muitos usuários simultâneos."

2. **Processamento do input:**

   O modelo processa a entrada fornecida.

3. **Resposta:**

   A aplicação retorna uma resposta em Markdown, contendo os detalhes solicitados (requisitos, estimativas, tecnologias).

### Modelo Utilizado

- **Nvidia LLaMA Nemotron 70B Instruct**

### Variáveis de Ambiente

Configure a variável de ambiente abaixo antes de iniciar a aplicação:

- `NVIDIA_NIM_API_KEY`: Chave de API necessária para acessar o modelo.

### Rotas

#### POST `/`

**Content-Type:** `application/json`

Corpo da requisição:

```json
{
  "project": "<SUA-IDEIA-DE-PROJETO>"
}
```

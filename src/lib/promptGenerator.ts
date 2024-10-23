export class PromptGenerator {
  static generate({ text }: { text: string }) {
    const prompt = `
        Você é um planejador de projetos de software. O usuário fornecerá uma descrição do projeto, e com base nela, você deve fornecer uma resposta completa e detalhada em formato Markdown.
        O projeto é descrito como: "${text}".
        Com base nesta descrição, realize as seguintes tarefas:
        1. Estimativa de Tempo: Dê uma estimativa baseada no tamanho, funcionalidades e complexidade do projeto, considerando design, codificação, testes e boas práticas de desenvolvimento (revisão de código, controle de versão, integração contínua).
        2. Requisitos Funcionais: Liste os principais recursos do sistema, como autenticação, CRUD, relatórios ou dashboards, sendo o mais detalhado possível.
        3. Requisitos Não Funcionais:
          - Desempenho: Quantos usuários simultâneos ou requisições por segundo o sistema deve suportar?
          - Escalabilidade: O sistema precisará suportar aumento de uso?
          - Segurança: Detalhe controle de acesso, encriptação ou conformidade necessária.
          - Manutenibilidade: O código deve ser modular e fácil de manter?
          - Confiabilidade: Qual deve ser a taxa de uptime e como garantir redundância?
        4. Tecnologias Recomendadas: Sugira frameworks, bibliotecas e banco de dados adequados para este projeto.
        5. Desafios Potenciais: Indique possíveis obstáculos como integração com APIs externas, regulamentações ou problemas de escalabilidade.
        Dê uma resposta detalhada e divida em seções claras, para que o usuário entenda todos os aspectos do planejamento.
    `;

    return prompt;
  }
}

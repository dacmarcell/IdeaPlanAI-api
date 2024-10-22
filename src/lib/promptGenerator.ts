export class PromptGenerator {
  static generate(projectDetails: string) {
    const prompt = `
        Você é um planejador de projetos de software. O usuário fornecerá uma descrição do projeto, e com base nela, você deve fornecer uma resposta completa e detalhada. 
        O projeto é descrito como: "${projectDetails}". Com base nesta descrição, realize as seguintes tarefas:
        1. Estimar o tempo de desenvolvimento: Baseie a estimativa no tamanho do projeto, quantidade de funcionalidades, complexidade, e esforços de design, codificação, testes e implementação. Considere também o uso de boas práticas de desenvolvimento, como revisões de código, controle de versão, e integração contínua.
        2. Listar os requisitos funcionais: Estes são os recursos principais que o sistema deve ter, como autenticação de usuários, CRUD (criação, leitura, atualização, e exclusão) de dados, relatórios ou dashboards, etc. Seja o mais detalhado possível com base no que você entendeu da descrição.
        3. Listar os requisitos não funcionais: Estes são aspectos relacionados à qualidade do sistema, como:
            - Desempenho: Quantos usuários simultâneos ou requisições por segundo o sistema deve suportar?
            - Escalabilidade: O sistema precisará se adaptar facilmente a um aumento de uso?
            - Segurança: Existe a necessidade de controle de acesso e proteção de dados? Indique também os tipos de autenticação, encriptação, ou compliance necessários.
            - Manutenibilidade: O código precisa ser modular, fácil de modificar e manter?
            - Confiabilidade: Qual deve ser a taxa de uptime e como a redundância será tratada?
        4. Tecnologias recomendadas: Sugira tecnologias que poderiam ser usadas para implementar este projeto com base nas necessidades descritas, como frameworks, bibliotecas e banco de dados.
        5. Desafios potenciais: Identifique possíveis obstáculos ou complexidades no projeto que podem afetar o desenvolvimento, como integração com APIs externas, regulamentações de segurança, ou problemas com escalabilidade.
        Dê uma resposta detalhada e divida em seções claras para que o usuário possa entender os diferentes aspectos do planejamento. Por favor me retorne essas informações em markdown.
    `;

    return prompt;
  }
}

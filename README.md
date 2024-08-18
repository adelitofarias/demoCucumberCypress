# Projeto de Automação adotando o framework Cypress com Cucumber
---

> Esse é um exemplo de como montar uma estrutura inicial de testes automáticos com o auxílio do [`Cypress.io`](https://github.com/cypress-io/cypress) e do [`cypress-cucumber-preprocessor`](https://github.com/badeball/cypress-cucumber-preprocessor) que dá suporte para a escrita dos cenários com as regras gramaticais do Gherkin.

> [!NOTE]
> Fluxo de Sucesso.

https://github.com/user-attachments/assets/b9827fd0-0e71-4d36-af0d-fc38f0699fdd


## 📖 Sumário
---

1. [Pré-Requisitos](#pre-requisitos)
2. [Políticas de Testes](#politica-de-testes)
3. [Arquitetura do Projeto](#arquitetura-do-projeto)
4. [Camadas da Arquitetura](#camadas-da-arquitetura)
5. [Geração de Massas de Testes](#geracao-de-massas-de-testes)
6. [Como construir um PR](#como-construir-um-pr)
7. [Relatório da Sprint](#relatorio-sprint)

### ✨ Pré-Requisitos
---

<a id="pre-requisitos"></a>

- A IDE escolhida foi o [`VS Code`](https://code.visualstudio.com/download);
- Instale o [`Node.js`](https://nodejs.org/en/download/);
- Seguindo as instruções da documentação do [`Cypress.io`](https://github.com/cypress-io/cypress), do [`cypress-cucumber-preprocessor`](https://github.com/badeball/cypress-cucumber-preprocessor) e do [`cypress-plugin-api`](https://github.com/filiphric/cypress-plugin-api) os instale;
- Baixe este repositório ou faça um git clone;
- Abra o diretório do projeto e execute o comando:
    - `npm install`
- Para acionar os testes em modo headless e cosntruir o relatório em ambiente Windowns, insira o arquivo `cucumber-json-formatter.exe` e execute no diretório do projeto:
    - `npm run run`
    - Para maiores detalhes, consutar: [`json-formatter`](https://github.com/cucumber/json-formatter) 
- Pronto, o projeto será executado em sua máquina e construirá o relatório.

### 🪧 Políticas de Testes
---

<a id="politica-de-testes"></a>

> [!NOTE]
> A metodologia aqui descrita orienta uma abordagem de testes, mas não a limita, devendo ser revista e atualizada para endereçar o contexto particular de cada fase do projeto, cobrindo os processos de gerenciamento de teste e processos dinâmicos de teste.


- A abordagem principal se fundamenta nas práticas de Teste Ágil e Desenvolvimento orientado a Comportamento (BDD). A modelagem dos requisitos de qualidade do sistema será baseada na norma ISO/IEC/IEEE 29119. O esquema a seguir esquematiza o fluxo esquematizado para as atividades da arantia da Qualidade: 

![Fases de Teste](<supportReadme/processo de QA.jpg>)

### ⚙️ Arquitetura do Projeto
---

<a id="arquitetura-do-projeto"></a>
> [!IMPORTANT]
> Estrutura do Projeto Cypress
> Este projeto utiliza o Cypress para testes automatizados, organizado da seguinte maneira:


```
  ├─  cypress/
  │        │
  │        ├── e2e/
  │        │   ├── features/
  │        │   |   ├── api/
  │        │   |   |   ├── account/
  │        │   │   │   │   ├── alternativeFlow/
  │        │   │   │   │   |   └── get.features
  │        │   ├── step_test_definitions/
  │        │   |   ├── api/
  │        │   |   |   ├── account/
  │        │   │   │   │   ├── alternativeFlow/
  │        │   │   │   │   |   └── get.spec.js
  │        ├── fixtures/
  │        |   ├── userData/
  │        |   |   ├── dinamic/
  │        │   │   │   └── user.json
  │        ├── support/
  │        |   ├── api/
  │        |   |   ├── assertions/
  │        |   |   |   ├── account/
  │        │   │   │   |   ├── alternativeFlow/
  │        │   │   │   |   |   └── assertionsGet.js
  │        |   |   ├── requests/
  │        |   |   |   ├── account/
  │        │   │   │   |   ├── alternativeFlow/
  │        │   │   │   |   |   └── requestsGet.js
  │        |   ├── ui/
  │        |   |   ├── locators/
  │        |   |   |   ├── admin/
  │        │   │   │   |   └── admin_locators.js
  │        |   |   ├── pages/
  │        |   |   |   ├── admin/
  │        │   │   │   |   └── admin_pages.js
  │        |   ├── utils/
  │        |   |   |   ├── assertions/
  │        |   |   |   ├── commands/
  │        |   |   |   ├── environment/
  │        |   |   |   ├── users/
  │        |   |   |   └── config.js
  │        |   |   |   └── paths.json
  │        |   |   |   └── util.js
  │        |   |   └── e2e.js
  │        ├── modeling/
  │        |   ├── sprint/
  │        |   |   ├── back/
  │        |   |   |   ├── Service/
  │        |   |   |   |   └──seção/categoria.xmind
  │        |   |   ├── front/
  │        |   |   |   ├── Perfil/
  │        |   |   |   |   └──perfil.xmind
  │        |   |   ├── report/
  │        |   |   |   └──report-sprint.html
  ├── cypress.config.json
  ├── package.json
  └── README.md
```

## 🔍 Camadas da Arquitetura
---

<a id="camadas-da-arquitetura"></a>
> [!TIP]
> A arquitetura a seguir é apresentada com a seguinte diagramação

![Representção Esquemática da Arquitetura](supportReadme/esquemaAutomacao.png)

 - **assertions:** estratégia para executar as assertivas dos parametros retornados pela requisição;
 - **features:** arquivos contendo as definições de BDD em extensão *.feature;
 - **requests:** estratégia apra realização de requisições;
 - **step_definitions:** contém a junção entre a definição do BDD as chamdas dos requests e assertions para efetivação da validação
 - **commands:** Camada que inclui comandos personalizados do Cypress para otimizar a reutilização de código e melhorar a manutenção dos testes. Por exemplo, `generateUserDataAdmin` é um comando para criar dados fictícios para administradores e salvar esses dados em um arquivo de fixture.
 - **pages:** Classes que encapsulam métodos para interagir com a interface do usuário. Cada método reflete uma ação ou conjunto de ações que um usuário pode realizar em uma página, como acessar o site, navegar pelo menu lateral, ou alterar informações da conta.
 - **locators:** Objeto que contém seletores CSS ou XPath usados para localizar e interagir com elementos na página. Cada conjunto de locators é específico para uma função ou usuário, organizados por arquivos para facilitar a manutenção.
 - **fixtures:** Diretório onde as massas de teste são armazenadas. Pode ser dividido em 'dinamic', para dados que são gerados e possivelmente alterados em cada execução, e 'static', para dados que permanecem constantes e são reutilizados entre os testes. Esses dados são utilizados para alimentar os testes com informações necessárias para a execução dos cenários.

## 📝 Geração de Massas de Testes
---

<a id="geracao-de-massas-de-testes"></a>

- ##### Adotamos uma estratégia de geração de massas de testes para garantir que sempre tenhamos dados suficientes e variados para nossos testes.
> Embora este exemplo descreva a geração de massas para "admin", implementamos métodos semelhantes para outros tipos de usuários do sistema.

1. **Criação de Fixture:**
   Utilizamos o arquivo de fixture `userDataAdmin.json` para armazenar modelos de dados que simulam informações de administradores que podem ser usados nos testes. Este arquivo é dinamicamente gerado e armazenado no diretório `/cypress/fixtures/userData/dinamic`.

2. **Especificação de Testes (Spec):**
   No arquivo `gerarMassasAdmin.spec.js`, definimos os cenários de testes utilizando o BDD através do Cucumber. Especificamos a necessidade de gerar perfis de administradores chamando métodos específicos para a geração de dados.

3. **Utils Pages:**
   Dentro do arquivo `utilsPages.js`, implementamos o método `gerarMassasAdmin`, que é responsável por orquestrar a geração de dados, incluindo telefones, CPFs, CEPs, RGs, e CNPJs. Este método realiza a integração com diversas funções utilitárias para assegurar a criação de dados válidos e únicos para cada perfil.

4. **Comandos Customizados (Cypress Commands):**
   O arquivo `commands_admin.js` inclui o comando `generateUserDataAdmin`, que é chamado pelo método `gerarMassasAdmin`. Este comando utiliza a biblioteca Faker para gerar dados fictícios e salva o resultado final no arquivo de fixture `userDataAdmin.json`.

5. **Integração com Cypress Config:**
   No arquivo `cypress.config.js`, garantimos que todas as features relacionadas à geração de massas sejam executadas antes dos demais testes da automação. Isso é feito configurando o `specPattern` para priorizar essas features.

6. **Importação dos Commands:**
   No arquivo `e2e.js`, asseguramos que todos os Commands serão lidos. Isso é feito importando cada command implemenetado, da seguinte forma: `import './utils/commands/pasta_perfil/commands_perfil`

## 🎯 Como construir um PR
---

<a id="como-construir-um-pr"></a>


### 🌟 Importância da Documentação Clara no PR 🌟

> Ao construir um Pull Request (PR), a clareza e a organização são fundamentais para garantir que as mudanças propostas sejam compreendidas e revisadas de maneira eficiente.
>
> Documentar o PR com uma descrição bem estruturada não só facilita a vida dos revisores, mas também serve como um registro valioso para o futuro. Detalhar o contexto, as mudanças, e os passos para testar as novas funcionalidades permite que o time entenda rapidamente o propósito e o impacto do PR, promovendo uma revisão mais eficaz e contribuindo para a manutenção da qualidade do código.
>
> *Essa prática meticulosa na construção do PR reflete o compromisso com a excelência e a responsabilidade no desenvolvimento de software, ajudando a evitar mal-entendidos e a garantir que as novas funcionalidades sejam integradas sem problemas ao código base.*

- ##### Formatação Markdown para o PR:

Markdown

### Adiciona funcionalidade de visualização de produtos e ordenação do maior para o menor
 
#### Contexto
Este PR implementa a funcionalidade de visualização de produtos e a capacidade de ordená-los do maior para o menor preço. Esta melhoria visa facilitar a navegação dos usuários através da lista de produtos, permitindo uma experiência de compra mais eficiente e agradável. Esta funcionalidade foi solicitada no CA AAAA
 
#### Mudanças Principais
- **Backend**:
  - Adição de endpoint para recuperar a lista de produtos com suporte a ordenação por preço.
  
- **Frontend**:
  - Criação de interface para visualização de produtos.
  - Implementação de dropdown para seleção de critérios de ordenação.
  - Ajustes na UI para exibir os produtos ordenados conforme selecionado.
 
 
#### Como Testar
1. Navegue até a página de produtos no frontend.
2. Verifique se a lista de produtos é carregada corretamente.
3. Utilize o dropdown de ordenação para selecionar "Preço: do maior para o menor".
4. Verifique se os produtos são reordenados corretamente conforme o critério selecionado.
5. Realize verificações para diferentes conjuntos de produtos e certifique-se de que a ordenação está funcionando corretamente.
 
#### Screenshots
![Tela de Visualização de Produtos](link-para-imagem-visualizacao-produtos)

 
#### Referências
- TestLink: ATIVOS-25 (ID do cenário no testlink)
- OpenProject: CA AAAA [link do OP]

 
#### Checklist
- [x] Testes escritos e passando
- [x] Documentação atualizada (caso se aplique)
- [x] Screenshots anexado do teste aprovado
- [x] Revisão pelo time de QA


## 📊 Relatório da Sprint
---

<a id="relatorio-sprint"></a>

- ##### Ao fim de cada sprint, todos os teste são executados e um relatório é construído para auxiliar na interpretação da sanidade do projeto.
> O relatório não é carregado no ambiente do git, sendo necessário baaixar para suaa máquina e abrir em um browser.

### Vídeo demonstrativo do Relatório da execução
> [!IMPORTANT]
> Para gerar o report é nescessário executar o seguinte comando no terminal: `node cucumber-html-report.mjs`

https://github.com/user-attachments/assets/f5d08f2f-76bc-4a77-ae54-ce96c31c579e



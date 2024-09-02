# Desafio de Automação de Testes - Luma Store

## 1. Escolha da Ferramenta de Teste

### Ferramenta Escolhida: Cypress

**Motivo da Escolha:**

#### Vantagens:
- Integração direta com JavaScript e Node.js, amplamente usados no desenvolvimento web.
- Interface intuitiva que permite visualizar os testes em tempo real, facilitando a identificação de erros.
- Monitoramento e interceptação de requisições HTTP, útil para verificar o carregamento de páginas e respostas da API.
- Suporte robusto a testes end-to-end, com comandos simplificados para interação com elementos da interface do usuário.
- Suporte a testes assíncronos e esperas automáticas, facilitando a sincronização com o tempo de carregamento dos elementos da página.

### Ferramentas Não Escolhidas:

#### Selenium:
- **Desvantagens:** Configuração mais complexa, requer instalação de drivers específicos para cada navegador. Testes podem ser mais lentos em cenários complexos.

#### Robot Framework:
- **Desvantagens:** Curva de aprendizado mais acentuada, especialmente para quem não está familiarizado com a sintaxe baseada em palavras-chave. Indicado para grandes suítes de testes envolvendo múltiplos tipos de sistemas.

#### Ghost Inspector:
- **Desvantagens:** Ferramenta baseada em nuvem que pode limitar a flexibilidade de customização e integração com pipelines de CI/CD.

## 2. Casos de Uso a Serem Testados

### Caso de Uso 1: Verificar Carregamento da Home Page
**Descrição:** Verificar se a página inicial da Luma Store carrega corretamente.  
**Cenário:** 
- Acessar a página principal (https://magento.softwaretestingboard.com).
- Verificar se os principais elementos da home (menu, banner, rodapé) estão visíveis e carregados.

### Caso de Uso 2: Busca por 'shirt' e Revisão de Resultados
**Descrição:** Buscar por "shirt" e verificar se a página de resultados carrega corretamente.  
**Cenário:**
- Inserir o termo "shirt" no campo de busca.
- Verificar se a página de resultados é carregada e os produtos relacionados são exibidos.  
- **Diferencial 1:** Clicar no último produto sugerido após a busca.
- **Diferencial 4:** Adicionar um comentário em um produto aleatório do catálogo de moda masculina no carrinho.

### Caso de Uso 3: Adicionar Produto no Carrinho
**Descrição:** Selecionar um produto e adicioná-lo ao carrinho.  
**Cenário:**
- Escolher um produto da lista de resultados.
- Adicionar o produto ao carrinho.
- Verificar se o produto foi adicionado com sucesso.
- **Diferencial 3:** Adicionar um produto aleatório do catálogo de moda masculina no carrinho.

### Caso de Uso 4: Realizar Checkout
**Descrição:** Realizar o processo de checkout com o produto adicionado ao carrinho.  
**Cenário:**
- Acessar o carrinho.
- Proceder para o checkout.
- Inserir os dados de pagamento fictícios e finalizar a compra.

## 3. Recursos e Funcionalidades Adicionais Implementados

### Criar Conta na Tela de Login/Cadastro
**Descrição:** Criar uma conta e abordar o captcha.  
**Cenário:**
- Acessar a página de login/cadastro.
- Preencher os dados do usuário.
- Verificar a abordagem para o captcha (mock ou solução alternativa). 

**Observação:** Utilização da biblioteca Faker para criação dos cadastros fictícios.

### Gerar Relatório Automático do Teste
**Descrição:** Utilizar Mochawesome para gerar relatórios detalhados e visualmente atraentes em formato HTML.  
**Benefícios:** Relatórios claros e eficientes, integração fácil com Cypress, personalização de relatórios e compatibilidade com ambientes de CI/CD.

## 4. Tecnologias Usadas

- **Linguagem:** JavaScript
- **Framework de Teste:** Cypress
- **Plugins:** Mochawesome para geração de relatórios
- **Biblioteca para Dados Fictícios:** Faker

## 5. Como Instalar e Usar o Projeto

- Clone o repositório: `git clone https://github.com/itnanunes/qa-coodesh-itna`
- Navegue até o diretório do projeto: `cd luma-store-test`
- Instale as dependências: `npm install`
- Execute os testes: `npx cypress open` para interface gráfica ou `npx cypress run` para execução em linha de comando.
- Gere o relatório: `npx cypress run --reporter mochawesome`.

## 6. .gitignore

Adicionar as seguintes entradas ao `.gitignore` para evitar versionamento de arquivos desnecessários:
- `node_modules/`
- `cypress/videos/`
- `cypress/screenshots/`
- `report/`

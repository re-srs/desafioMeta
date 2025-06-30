# 🧪 Desafio QA Automatizado - Luma Store | Meta + Serasa

Este projeto automatiza testes end-to-end (E2E) da loja Luma Store, disponível em:

🔗 https://magento.softwaretestingboard.com

Desenvolvido como parte do desafio técnico da Meta com Serasa, este projeto cobre funcionalidades-chave da loja virtual usando Cypress e geração de relatório com Allure Report.

---

## 👩‍💻 Autor

Renata Graciano Lobato Melo  
GitHub: [@re-srs](https://github.com/re-srs)  
Repositório: [desafioMeta](https://github.com/re-srs/desafioMeta)

---

## 🛠️ Tecnologias

- ✅ Cypress (Framework de Testes E2E)
- ✅ Allure Report (Relatório interativo)
- ✅ JavaScript
- ✅ Node.js
- ✅ Faker (dados fictícios)

---

## ✅ Casos de uso automatizados

- Verificar se a Home Page carrega corretamente
- Buscar por produtos no menu (ex: "shirt") e validar resultados
- Adicionar produto ao carrinho (fixo e aleatório)
- Realizar checkout como convidado (faltou implementar Login para realizar o checkout)
- Criar conta de usuário com dados aleatórios
- Gerar relatório Allure dos testes

---

## 🤔 Por que Cypress?

O Cypress foi escolhido por ser uma ferramenta moderna, confiável e extremamente eficaz para testes de interface. Suas vantagens incluem:

### ✅ Vantagens

- Execução em navegador real (com debug fácil)
- API clara e moderna
- Relatórios integráveis com Allure
- Ótima comunidade e documentação

### ⚠️ Desvantagens

- Não suporta múltiplas abas
- Foco exclusivo em testes de front-end

---

## ⚙️ Como Executar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/re-srs/desafioMeta.git
```

---

## 📊 Geração de Relatórios com Allure

> ⚠️ **Pré-requisito:** É necessário ter o **Java** instalado e a variável de ambiente `JAVA_HOME` configurada corretamente.Também é necessário instalar o Cypress.

### 2. Instalar os plugins necessários

```bash
npm install -D @shelex/cypress-allure-plugin allure-commandline
```

Configure o plugin no arquivo `cypress/support/e2e.js`:

```js
import '@shelex/cypress-allure-plugin'
```

---

### 3. Ativar gravação dos resultados Allure

Para ativar a gravação dos resultados durante a execução dos testes, utilize a variável de ambiente `allure=true`.

Exemplo (modo gráfico):

```bash
yarn cypress open --env allure=true
```

---

## ▶️ Executando os Testes

### Em modo gráfico (interativo):

```bash
yarn cypress open
```

### Em modo headless (terminal):

```bash
yarn cypress run
```

---

## 📈 Visualizar o relatório Allure

Após executar os testes com `allure=true`, visualize o relatório com o comando:

```bash
yarn allure serve
```

> Isso abrirá automaticamente uma aba no navegador com o relatório interativo dos testes.

---

## 📌 Observações Finais

- Este projeto utiliza dados aleatórios com a biblioteca Faker para simular a criação de contas.
- O fluxo de checkout como usuário logado ainda pode ser expandido.
- Todos os testes focam em validação de interface (UI).
- Decidi fazer o uso nativo do cypress de comandos customizados para encapsular steps ou comportamentos repetitivos
- Lembrando que existem várias maneiras de realizar esse desafio, por exemplo usando Page Objects, ou outras ferramentas como java com Selenium, isso depende da estrutura e padrão de projeto de cada empresa.
- Preferi deixar a funcionalidade de Checkout de fora pois tinha que fazer automação do Login e quebrar o Captcha não é algo muito simples e nem rápido de fazer de acordo com minhas experiências. Já segue como desafio para meus estudos próximos.

---

## 📬 Contato

Para dúvidas ou sugestões, sinta-se à vontade para entrar em contato via [GitHub](https://github.com/re-srs).

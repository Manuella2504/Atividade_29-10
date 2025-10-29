# 🧮 Calculadora com Testes Automatizados

Sistema de calculadora em JavaScript com testes unitários automatizados usando Jest e CI/CD com GitHub Actions.

![Tests](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/workflows/Testes%20Unitários/badge.svg)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Executar Testes](#executar-testes)
- [CI/CD com GitHub Actions](#cicd-com-github-actions)
- [Como Contribuir](#como-contribuir)
- [Autor](#autor)
- [Licença](#licença)

## 🎯 Sobre o Projeto

Este projeto demonstra a implementação de testes unitários automatizados e integração contínua (CI/CD) usando GitHub Actions. A calculadora possui 6 funções matemáticas básicas, todas com tratamento de erros e cobertura completa de testes.

## ⚙️ Funcionalidades

A calculadora possui as seguintes operações:

- ✅ **Somar**: Adição de dois números
- ✅ **Subtrair**: Subtração de dois números
- ✅ **Multiplicar**: Multiplicação de dois números
- ✅ **Dividir**: Divisão com validação de divisão por zero
- ✅ **Potência**: Cálculo de exponenciação
- ✅ **Raiz Quadrada**: Cálculo de raiz quadrada com validação de números negativos

## 🛠️ Tecnologias Utilizadas

- **JavaScript** (Node.js)
- **Jest** - Framework de testes
- **GitHub Actions** - CI/CD
- **NPM** - Gerenciador de pacotes

## 📁 Estrutura do Projeto

```
calculadora-testes-automatizados/
├── .github/
│   └── workflows/
│       └── tests.yml          # Configuração do GitHub Actions
├── .gitignore
├── README.md
├── calculadora.js             # Código fonte da calculadora
├── calculadora.test.js        # Testes unitários
├── package.json               # Configurações e dependências
└── package-lock.json          # Lock das dependências
```

## 🚀 Como Usar

### Pré-requisitos

- Node.js (versão 18.x ou superior)
- NPM ou Yarn
- Git

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/calculadora-testes-automatizados.git
```

2. Entre na pasta do projeto:
```bash
cd calculadora-testes-automatizados
```

3. Instale as dependências:
```bash
npm install
```

### Usando a Calculadora

```javascript
const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  potencia,
  raizQuadrada
} = require('./calculadora');

// Exemplos de uso
console.log(somar(5, 3));           // 8
console.log(subtrair(10, 4));       // 6
console.log(multiplicar(7, 6));     // 42
console.log(dividir(15, 3));        // 5
console.log(potencia(2, 3));        // 8
console.log(raizQuadrada(16));      // 4
```

## 🧪 Executar Testes

### Executar todos os testes:
```bash
npm test
```

### Executar testes em modo watch (desenvolvimento):
```bash
npm run test:watch
```

### Cobertura de Testes

O projeto possui **100% de cobertura de testes**:

- ✅ 18 testes implementados
- ✅ Todos os casos de sucesso testados
- ✅ Todos os casos de erro tratados
- ✅ Validações de edge cases

## 🔄 CI/CD com GitHub Actions

### Workflow Automatizado

O projeto utiliza GitHub Actions para executar testes automaticamente:

**Triggers (Quando executa):**
- ✅ Push para branches `main` e `develop`
- ✅ Pull Requests para branch `main`

**Ambiente de Teste:**
- Ubuntu Latest
- Node.js 18.x e 20.x (matrix strategy)

**Etapas do Workflow:**
1. Checkout do código
2. Configuração do Node.js
3. Instalação de dependências (`npm ci`)
4. Execução dos testes (`npm test`)
5. Upload do relatório de cobertura

### Visualizar Resultados

Acesse a aba **Actions** no GitHub para ver:
- ✅ Status de todos os workflows
- ✅ Logs detalhados de cada etapa
- ✅ Relatórios de cobertura de testes

## 🤝 Como Contribuir

Siga este fluxo para contribuir com o projeto:

### 1. Fork o Projeto

Clique em **Fork** no canto superior direito do GitHub.

### 2. Clone seu Fork

```bash
git clone https://github.com/SEU_USUARIO/calculadora-testes-automatizados.git
cd calculadora-testes-automatizados
```

### 3. Crie uma Branch

```bash
git checkout -b feature/minha-nova-funcionalidade
```

### 4. Faça suas Alterações

Desenvolva sua funcionalidade ou correção.

### 5. Execute os Testes

```bash
npm test
```

Certifique-se de que todos os testes passam e, se adicionar novas funções, **adicione os testes correspondentes**.

### 6. Commit suas Mudanças

```bash
git add .
git commit -m "feat: adicionar nova funcionalidade X"
```

**Padrão de commits:**
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `test:` - Adição ou modificação de testes
- `docs:` - Alterações na documentação
- `refactor:` - Refatoração de código

### 7. Push para o GitHub

```bash
git push origin feature/minha-nova-funcionalidade
```

### 8. Abra um Pull Request

1. Vá até seu fork no GitHub
2. Clique em **Compare & pull request**
3. Descreva suas mudanças
4. Aguarde os testes automatizados passarem ✅
5. Aguarde revisão


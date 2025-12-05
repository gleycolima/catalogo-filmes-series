# 🎬 ReactFlix - Seu Catálogo de Filmes e Séries com CRUD (React+TypeScript)

[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)

> Aplicação web completa para gerenciar meu catálogo pessoal de filmes e séries favoritas com interface moderna, responsiva e operações CRUD totalmente funcionais e integração com JSON Server.

---

# 🎥 Vídeo de Apresentação (AV2)

Demonstração completa do projeto: execução, código, interface e funcionalidades.

🔗 Assista aqui:
👉 https://drive.google.com/file/d/1nY8ZLn5GKnpBbMHThwjSXLhR2xmdcEyR/view?usp=sharing

---

## 📋 Sobre o Projeto

**ReactFlix** é uma aplicação full-stack desenvolvida em **React + TypeScript** que permite:

- ✅ Adicionar, editar e remover filmes e séries
- ✅ Classificar por tipo (filme/série) e status (assistido/não assistido)
- ✅ Avaliar conteúdo com sistema de estrelas (1-5)
- ✅ Persistência de dados em tempo real via JSON Server
- ✅ Interface responsiva e intuitiva com design moderno
- ✅ Componentes reutilizáveis e bem organizados

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Propósito |
|------------|--------|----------|
| **React** | 18.2+ | Framework frontend |
| **TypeScript** | 5.2+ | Tipagem estática |
| **Vite** | 5.0+ | Build tool |
| **JSON Server** | 0.17+ | API local (mock) |
| **Lucide React** | 0.263+ | Ícones |
| **CSS Puro** | - | Estilização |

## 📦 Pré-requisitos

- Node.js v16 ou superior
- npm ou yarn
- Git

## 🚀 Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/catalogo-filmes-series.git
cd catalogo-filmes-series
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o JSON Server (Terminal 1)

```bash
npx json-server --watch db.json --port 3000
```

Você verá:
```
  ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
    JSON Server is running
  ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

  ➜ Local:   http://localhost:3000
```

### 4. Inicie a aplicação React (Terminal 2)

```bash
npm run dev
```

Você verá:
```
  VITE v5.0.0  ready in 123 ms

  ➜  Local:   http://localhost:5173/
```

### 5. Abra no navegador

Acesse: [http://localhost:5173](http://localhost:5173)

## 📁 Estrutura do Projeto

```
catalogo-filmes-series/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Header com estatísticas
│   │   ├── Card.tsx         # Card do filme/série
│   │   └── Form.tsx         # Formulário de entrada
│   ├── pages/
│   │   ├── Home.tsx         # Página principal
│   │   └── List.tsx         # Página de listagem
│   ├── services/
│   │   └── api.ts           # Chamadas à API
│   ├── App.tsx              # Componente raiz
│   ├── App.css              # Estilos globais
│   ├── index.css            # Estilos base
│   └── main.tsx             # Entrada da aplicação
├── public/                  # Arquivos estáticos
├── db.json                  # Banco de dados (JSON Server)
├── package.json             # Dependências do projeto
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
├── .gitignore               # Arquivos ignorados pelo Git
└── README.md                # Este arquivo
```

## 🎯 Funcionalidades - CRUD Completo

### ➕ CREATE - Adicionar Conteúdo
- Preencha o formulário com dados do filme/série
- Selecione tipo (filme ou série)
- Adicione gênero, ano de lançamento e avaliação
- Marque se já assistiu
- Clique em "Adicionar" para salvar

### 🔍 READ - Filtrar e Listar Catálogo
- **Todos**: Exibe toda a coleção
- **Filmes**: Apenas filmes
- **Séries**: Apenas séries
- **Assistidos**: Marcados como assistidos
- **Não Assistidos**: Ainda não assistidos
- Visualize estatísticas em tempo real (total de títulos e assistidos)

### ✏️ UPDATE - Editar Conteúdo
- Clique no ícone de edição (lápis) em qualquer card
- Modifique os dados conforme necessário
- Clique em "Atualizar" para salvar as mudanças
- Clique em "Cancelar" para descartar

### 🗑️ DELETE - Remover Conteúdo
- Clique no ícone de exclusão (lixeira) em qualquer card
- Confirme a exclusão na caixa de diálogo
- Item é removido imediatamente do catálogo

## 💾 Modelo de Dados

### Formato de Item

```typescript
{
  id: number;
  title: string;
  type: 'filme' | 'série';
  genre: string;
  year: number;
  rating: number;      // 1-5 estrelas
  watched: boolean;
}
```

### Exemplo de db.json

```json
{
  "content": [
    {
      "id": 1,
      "title": "Interstelar",
      "type": "filme",
      "genre": "Ficção Científica",
      "year": 2014,
      "rating": 5,
      "watched": true
    },
    {
      "id": 2,
      "title": "Breaking Bad",
      "type": "série",
      "genre": "Drama/Crime",
      "year": 2008,
      "rating": 5,
      "watched": true
    }
  ]
}
```

## 🔗 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/content` | Listar todos os itens |
| GET | `/content/:id` | Buscar item por ID |
| POST | `/content` | Criar novo item |
| PUT | `/content/:id` | Atualizar item completo |
| DELETE | `/content/:id` | Deletar item |

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:
- 📱 Celulares (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktops (1200px+)

## 🎨 Design e Interface

- **Tema**: Dark mode moderno e agradável
- **Paleta**: Roxo/Gradientes profissionais
- **Ícones**: Lucide React
- **Animações**: Transições suaves
- **Acessibilidade**: Contraste adequado e navegação intuitiva

## 🐛 Solução de Problemas

### "Failed to fetch"
- Certifique-se que JSON Server está rodando na porta 3000
- Verifique se `db.json` existe na raiz do projeto

### "Cannot find module"
```bash
npm install
```

### Dados não aparecem
- Recarregue a página (Ctrl+Shift+R)
- Verifique o console do navegador (F12) para erros

### Porta 3000 em uso
```bash
# Windows PowerShell (como Admin)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

## 📚 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build
```

## 🎓 Conceitos Implementados

Este projeto demonstra:
- ✅ React Hooks (useState, useEffect)
- ✅ TypeScript com Interfaces e Types
- ✅ Componentização e reutilização
- ✅ Gerenciamento de estado
- ✅ Chamadas HTTP (Fetch API)
- ✅ CRUD completo (Create, Read, Update, Delete)
- ✅ Boas práticas de código
- ✅ Design responsivo
- ✅ Separação de responsabilidades (Components, Pages, Services)

## 👤 Autor

- GitHub: [Gleyco Lima](https://github.com/gleycolima)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para grandes mudanças:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ⭐ Se Gostou

Se este projeto foi útil para você, considere deixar uma ⭐!

---

<div align="center">

**[⬆ Voltar ao topo](#-reactflix---seu-catálogo-de-filmes-e-séries-com-crud-em-react)**

Desenvolvido por [Gleyco Lima](https://github.com/gleycolima)

ReactFlix - Seu catálogo de filmes e séries com CRUD (React+TypeScript)

</div>

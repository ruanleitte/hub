# Guia de Edição do Site

Este guia explica como editar os diferentes componentes do seu site.

## Estrutura de Diretórios

```
├── client
│   ├── src
│   │   ├── components - Componentes reutilizáveis
│   │   ├── context - Contextos como idioma
│   │   ├── data - Arquivos de dados para o site
│   │   ├── hooks - Hooks personalizados
│   │   ├── layout - Componentes de layout (navbar, footer)
│   │   ├── lib - Funções utilitárias
│   │   └── pages - Páginas do site
│   └── index.html - Arquivo HTML principal
├── server - Backend
└── shared - Schemas compartilhados
```

## Edição de Textos Principais

### Editar Textos de Introdução e Descrições
Todos os textos principais do site estão centralizados em um único arquivo de traduções, o que facilita a manutenção e a consistência em diferentes idiomas.

- **Arquivo**: `client/src/lib/translations.ts`

#### Textos da Home Page
- **Português**: Linha 39
- **Inglês**: Linha 145
- **Espanhol**: Linha 251
```javascript
// Exemplo de edição do texto de introdução em português
intro: 'Com mais de 5 anos de experiência profissional. Formado em Gestão Logística, aprimorei minhas habilidades através de trabalhos comerciais e freelance. Minhas competências incluem HTML, CSS, JavaScript, React e frameworks web modernos.',
```

#### Textos da Página Sobre
- **Português**: Linha 44
- **Inglês**: Linha 150
- **Espanhol**: Linha 256
```javascript
// Exemplo de edição da descrição em português
description: 'Sou um profissional multidisciplinar, combinando experiência em planejamento estratégico e logística com habilidades em desenvolvimento web. Minha trajetória profissional inclui empresas como Mills, Stone e GOL Linhas Aéreas, onde desenvolvi competências em gestão, análise de processos e soluções tecnológicas.',
```

### Editar Nomes das Páginas
Os nomes das páginas que aparecem na navegação também estão localizados no arquivo de traduções:

- **Localização**: `client/src/lib/translations.ts` na seção `common` de cada idioma
  - **Português**: Linhas 13-31
  - **Inglês**: Linhas 119-137
  - **Espanhol**: Linhas 225-243

Exemplo:
```javascript
common: {
  hello: 'Olá',
  home: 'Home',
  about: 'Sobre',
  portfolio: 'Empresas',
  resume: 'Currículo',
  contact: 'Contato',
  // outros textos...
},
```

## Como Editar Páginas

### Home Page
- **Arquivo**: `client/src/pages/home.tsx`
- **O que pode ser editado**:
  - Texto de boas-vindas
  - Imagem principal
  - Seções de destaque

### Página Sobre (About)
- **Arquivo**: `client/src/pages/about.tsx`
- **O que pode ser editado**:
  - Informações pessoais/profissionais
  - Texto biográfico
  - Fotos

### Currículo (Resume)
- **Arquivo**: `client/src/pages/resume-improved.tsx`
- **O que pode ser editado**:
  - Experiências profissionais
  - Formação acadêmica
  - Habilidades
  - Certificações

### Empresas
- **Arquivo**: `client/src/pages/empresas.tsx`
- **O que pode ser editado**:
  - Lista de empresas
  - Informações sobre cada empresa
  - Logos e imagens das empresas

### Contato
- **Arquivo**: `client/src/pages/contact-improved.tsx`
- **O que pode ser editado**:
  - Formulário de contato
  - Informações de contato
  - Links para redes sociais

## Como Editar Componentes Comuns

### Barra de Navegação
- **Arquivo**: `client/src/components/layout/navbar.tsx`
- **O que pode ser editado**:
  - Links de navegação
  - Logo
  - Funcionalidade de idioma

### Rodapé
- **Arquivo**: `client/src/components/layout/footer.tsx`
- **O que pode ser editado**:
  - Informações de copyright
  - Links adicionais
  - Redes sociais

## Como Editar o Conteúdo

### Adicionar ou Remover Empresas
1. Abra o arquivo `client/src/pages/empresas.tsx`
2. Procure a seção que contém a matriz ou objetos de empresas
3. Adicione um novo objeto de empresa ou remova um existente seguindo o mesmo formato

### Modificar Tamanhos de Cards
1. Os tamanhos dos cards são controlados por classes Tailwind CSS
2. Procure por classes como `w-full`, `md:w-1/2`, `lg:w-1/3` etc.
3. Modifique estas classes para alterar a largura dos cards
4. Para altura, procure por classes como `h-auto`, `h-full`, `h-[300px]` etc.

### Atualizar Texto
1. Localize o texto que deseja alterar no arquivo de traduções (`client/src/lib/translations.ts`)
2. Edite o texto diretamente no arquivo, mantendo a estrutura existente
3. Certifique-se de editar o texto em todos os idiomas disponíveis (português, inglês e espanhol)

### Alterar Imagens
1. Adicione novas imagens à pasta `public` ou ao diretório apropriado
2. Atualize os caminhos das imagens nos arquivos de código

## Dicas de Edição
- Sempre teste as alterações localmente antes de fazer deploy
- Mantenha a consistência no design ao fazer mudanças
- Faça backup antes de edições importantes
- Após editar os textos, reinicie o servidor para ver as mudanças aplicadas

## Opções de Deploy
O projeto está configurado para funcionar com diferentes plataformas de hospedagem:
- **Render**: Configuração em `render.yaml` (padrão)
- **Fly.io**: Configuração em `fly.toml`
- **Railway**: Configuração em `railway.json`
- **Koyeb**: Configuração em `koyeb.yaml`
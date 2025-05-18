# Guia de Atualização de Conteúdo (Render)

Este guia explica como atualizar e modificar o conteúdo do seu site hospedado no Render.

## Fluxo de Trabalho para Atualizações

O processo de atualização funciona assim:

1. **Edite os arquivos** - Faça as alterações necessárias no código do projeto
2. **Envie para o GitHub** - Use os comandos git para enviar as mudanças
3. **Deployment automático** - O Render detecta as alterações e atualiza o site automaticamente

## Como Atualizar o Conteúdo

### Método 1: Atualizar através do GitHub (recomendado para pequenas alterações)

1. Acesse seu repositório GitHub
2. Navegue até o arquivo que deseja editar
3. Clique no ícone de lápis para editar o arquivo
4. Faça suas alterações
5. Adicione uma mensagem de commit descrevendo a alteração
6. Clique em "Commit changes"
7. O Render detectará automaticamente as mudanças e fará um novo deploy

### Método 2: Atualizar localmente com Git (recomendado para várias alterações)

1. Clone o repositório para sua máquina local:
   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Faça todas as alterações necessárias nos arquivos

3. Envie as alterações para o GitHub:
   ```
   git add .
   git commit -m "Descrição das alterações"
   git push origin main
   ```

4. O Render detectará as mudanças automaticamente e fará um novo deploy

### Método 3: Atualizar via Replit

1. Faça as alterações diretamente no Replit
2. Use o terminal do Replit para enviar as alterações para o GitHub:
   ```
   git add .
   git commit -m "Descrição das alterações"
   git push origin main
   ```
3. O Render detectará automaticamente as mudanças e fará um novo deploy

## Arquivos Principais para Edição

### Páginas do Site

| Página | Arquivo para Editar | O que pode ser alterado |
|--------|---------------------|-------------------------|
| Home | `client/src/pages/home.tsx` | Textos, imagens, seções de destaque |
| Sobre | `client/src/pages/about.tsx` | Informações pessoais, biografia, fotos |
| Currículo | `client/src/pages/resume-improved.tsx` | Experiências, educação, habilidades |
| Empresas | `client/src/pages/empresas.tsx` | Lista de empresas, informações, logos |
| Contato | `client/src/pages/contact-improved.tsx` | Formulário, informações de contato |

### Componentes Comuns

| Componente | Arquivo para Editar | O que pode ser alterado |
|------------|---------------------|-------------------------|
| Navegação | `client/src/components/layout/navbar.tsx` | Links, logo, idiomas |
| Rodapé | `client/src/components/layout/footer.tsx` | Copyright, links, redes sociais |

## Como Atualizar Elementos Específicos

### Adicionar Nova Experiência Profissional
1. Abra `client/src/pages/resume-improved.tsx`
2. Localize a seção de experiências profissionais
3. Adicione um novo objeto seguindo o mesmo formato das experiências existentes
4. Salve e envie para o GitHub

### Atualizar Foto de Perfil
1. Adicione a nova foto na pasta `client/public`
2. Atualize a referência para a nova imagem nos arquivos que a utilizam
3. Salve e envie para o GitHub

### Adicionar Nova Empresa
1. Abra `client/src/pages/empresas.tsx`
2. Localize o array ou objeto que contém as empresas
3. Adicione uma nova empresa seguindo o mesmo formato
4. Salve e envie para o GitHub

## Verificando o Status do Deploy

1. Acesse o painel do Render (dashboard.render.com)
2. Localize seu site na lista de serviços
3. Verifique o status do deploy mais recente
4. Você pode clicar em "Logs" para ver detalhes caso encontre problemas

## Dicas Importantes

- Sempre verifique o site após as alterações para garantir que tudo está funcionando corretamente
- Para alterações maiores, teste no ambiente de desenvolvimento antes de fazer o deploy
- O processo de deploy no Render geralmente leva alguns minutos para ser concluído
- Não é necessário enviar a pasta `dist` para o GitHub, o Render gera essa pasta automaticamente
- Se encontrar problemas, você pode sempre reverter para uma versão anterior no GitHub
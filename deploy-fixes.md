# Instruções para Deploy no Railway

Para garantir que o projeto funcione corretamente no Railway, siga estas instruções:

## Problema de Path no Servidor

O erro principal que ocorre no Railway está relacionado ao uso de `import.meta.dirname` que não funciona corretamente em ambientes Node.js de produção.

## Solução

Após o build e antes de iniciar o servidor em produção, você precisa fazer as seguintes modificações no arquivo `dist/index.js`:

1. Localize todas as ocorrências de `import.meta.dirname` no arquivo
2. Substitua por `process.cwd()`

Você pode fazer isso manualmente ou usando o comando:

```bash
sed -i 's/import.meta.dirname/process.cwd()/g' dist/index.js
```

## Configurando no Railway

No Railway, você pode configurar um script personalizado em "Settings" > "Start Command":

```
bash -c "sed -i 's/import.meta.dirname/process.cwd()/g' dist/index.js && NODE_ENV=production node dist/index.js"
```

Isso irá substituir todas as ocorrências do caminho problemático antes de iniciar o servidor.

## Variáveis de Ambiente

Certifique-se de configurar as seguintes variáveis de ambiente no Railway:

- NODE_ENV=production
- DATABASE_URL (se estiver usando banco de dados)

## Solução Alternativa

Se a solução acima não funcionar, você pode tentar modificar os scripts diretamente:

1. Faça o build localmente
2. Edite manualmente o arquivo dist/index.js
3. Faça deploy da versão corrigida
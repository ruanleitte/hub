#!/bin/bash

# Script para deploy no Railway
export NODE_ENV=production

# Construindo a aplicação com configurações específicas
npm run build

# Corrigindo problemas no arquivo gerado
sed -i 's/import.meta.dirname/process.cwd()/g' dist/index.js

# Iniciando a aplicação
node dist/index.js
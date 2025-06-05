# Etapa 1: Build
FROM node:18-alpine AS builder

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos necessários
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY tailwind.config.ts ./
COPY postcss.config.mjs ./
COPY eslint.config.mjs ./

# Instala dependências
RUN npm install

# Copia restante dos arquivos do projeto
COPY . .

# Build do projeto
RUN npm run build

# Etapa 2: Produção
FROM node:18-alpine AS runner

# Diretório de trabalho
WORKDIR /app

# Variável obrigatória para produção
ENV NODE_ENV production

# Instala dependências de produção apenas
COPY package*.json ./
RUN npm install --omit=dev

# Copia arquivos gerados do build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

# Porta exposta
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]

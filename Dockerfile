# 1) Build de l’app avec Node
FROM node:18-alpine AS builder

WORKDIR /app

# Copier package.json / package-lock.json et installer
COPY package.json package-lock.json* ./
RUN npm ci

# Copier tout le code et builder
COPY . .
RUN npm run build

# 2) Serve statique via Nginx
FROM nginx:alpine

# Copier le build React dans le dossier public de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# (Optionnel) config SPA pour rerouter 404 → index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


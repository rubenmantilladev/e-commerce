# Stage 1
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx ngcc es2023 browser modeule main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build:prod

# Etapa de produccion
FROM nginx:alpine
COPY --from=builder /app/dist/ecommerce /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

FROM node:20 as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build args - default web server
ARG VITE_WEB_SERVER
ARG VITE_SERVER_SECURE

# Build the React app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

COPY config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM node:20 as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build the React app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=prod /app/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

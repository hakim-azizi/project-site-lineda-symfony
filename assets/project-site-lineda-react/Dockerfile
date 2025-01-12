# Étape 1 : Construire l'application
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application pour production
RUN npm run build

# Étape 2 : Préparer le serveur de production
FROM nginx:alpine

# Copier les fichiers de build dans le serveur nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande de démarrage pour NGINX
CMD ["nginx", "-g", "daemon off;"]

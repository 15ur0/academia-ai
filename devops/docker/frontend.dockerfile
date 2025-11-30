FROM node:20-alpine

WORKDIR /app

COPY frontend-web/package*.json ./
RUN npm install

COPY frontend-web /app

CMD ["npm", "run", "dev"]

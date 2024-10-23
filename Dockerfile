FROM node:22.10.0-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

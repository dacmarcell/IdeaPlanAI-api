FROM node:22.10.0-alpine

ENV NODE_ENV=production
ENV NVIDIA_NIM_API_KEY=$NVIDIA_NIM_API_KEY

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

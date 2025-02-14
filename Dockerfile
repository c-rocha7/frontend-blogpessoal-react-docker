FROM node:22.13.0

WORKDIR /app

COPY package*.json ./

CMD ["yarn", "dev", "--host"]

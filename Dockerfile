FROM node:22.13.0

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host"]

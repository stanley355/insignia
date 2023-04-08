# Install dependencies only when needed
FROM docker.io/node:lts-alpine as deps

WORKDIR /app/backend

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]
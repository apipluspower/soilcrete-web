FROM node:14-alpine

WORKDIR /app

COPY package.json package-lock.json yarn.lock svelte.config.js ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "dev", "--host", "0.0.0.0"]
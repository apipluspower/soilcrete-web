FROM node:14-alpine as builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json svelte.config.js ./

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:14-alpine

COPY --from=builder /app .

EXPOSE 3000

CMD [ "node", "build" ]

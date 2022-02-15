FROM node:14-alpine

RUN npm install -g pnpm

RUN nmp start

WORKDIR /app

# COPY package.json package-lock.json pnpm-lock.yaml svelte.config.js ./



RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "dev", "--host", "0.0.0.0"]
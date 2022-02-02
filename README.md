# SvelteKit (vite) using typescript with Tailwind
## Running the project

to run this project

```bash
yarn install
yarn run dev
```
## build and generate static web

```bash
yarn build
```

## deployment
### DockerFile
by building docker image 
```bash
docker build -t <your image name> . 
``` 
and then, 
```bash
docker run -p 3000:<port> <your image name>
``` 
access to the app will be `http://localhost:<port>`
### Docker Compose
```bash
docker-compose up
```
access to the app will be `http://localhost:80`

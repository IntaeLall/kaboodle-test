FROM node:16.17.0-bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8000

CMD ["node", "dist/src/index.js"]

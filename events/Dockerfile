FROM node:16.17.0-bullseye-slim

 WORKDIR /usr/src/events

 COPY package.json /usr/src/events

 RUN npm install

 COPY . /usr/src/events

 CMD [ "npm", "run", "dev" ]
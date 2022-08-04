FROM node:16

RUN mkdir -p /usr/discord_bot
WORKDIR /usr/discord_bot

COPY ./srcs/* .

RUN npm install

CMD [ "node", "server.js" ]
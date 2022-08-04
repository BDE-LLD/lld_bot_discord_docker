FROM node:16

RUN mkdir -p /usr/discord_bot
WORKDIR /usr/discord_bot

COPY ./srcs ./

RUN npm install --location=global npm@latest
RUN npm install

CMD [ "node", "main.js" ]
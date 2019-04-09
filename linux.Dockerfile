FROM node:8.15.1-alpine
COPY package.json /
RUN npm install

ENV BOT_API_KEY = _
ENV API_AUTH = _
ENV API_HOST = _
ENV API_PORT = _

COPY bin /bin
COPY lib /lib
COPY config /config
ENTRYPOINT [ "node", "/bin/wcbot.js" ]
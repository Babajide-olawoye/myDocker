FROM node:19-alpine

COPY package.json /app/
COPY src /app/

#where to store the directory in container
WORKDIR /app 

RUN npm install

CMD ["node.js", "server.js"]
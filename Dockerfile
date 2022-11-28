FROM node:11.10-alpine

WORKDIR /home/next-test/

COPY package*.json ./

RUN npm cache clean --force \
  && npm install -g node-gyp \
  && npm install --unsafe-perm=true

#ENV NODE_ENV production
ENV PORT 4344
EXPOSE 4344

CMD [ "npm", "start"]

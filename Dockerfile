FROM node:14.17-alpine

MAINTAINER oklabel-team

#RUN apk add --no-cache libc6-compat

RUN apk add --no-cache make gcc g++ python

WORKDIR /home/next-test/

COPY package*.json ./

RUN npm cache clean --force \
  && npm install -g node-gyp \
  && npm install --unsafe-perm=true

COPY . .

#ENV NODE_ENV production
ENV PORT 4344
EXPOSE 4344

CMD [ "npm", "start"]

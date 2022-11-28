FROM node:11.10-alpine

WORKDIR /home/source/

COPY package*.json ./

RUN npm cache clean --force \
  && npm install

#ENV NODE_ENV production
ENV PORT 4344
EXPOSE 4344

CMD [ "npm", "start"]

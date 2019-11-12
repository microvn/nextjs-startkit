FROM node:11.10-alpine

#RUN apk add --no-cache libc6-compat

#RUN apk add --no-cache make gcc g++ python

WORKDIR /home/source/luxury/cms

COPY package*.json ./

RUN npm cache clean --force \
  && npm install

#ENV NODE_ENV production
ENV PORT 4433
EXPOSE 4433

#RUN ls 

CMD [ "npm", "start"]

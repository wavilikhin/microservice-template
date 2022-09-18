FROM node:18.9.0 as deps
WORKDIR /opt/app
COPY package*.json yarn.lock /opt/app/
COPY prisma ./prisma/
RUN yarn
# RUN apt-get -qy update && apt-get -qy install openssl
COPY . .

FROM deps as builder
RUN yarn build
RUN yarn prisma generate

FROM builder as runner
EXPOSE 3000
ENV NODE_ENV production
CMD ["node", "./dist/main.js"]
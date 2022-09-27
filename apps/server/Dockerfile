FROM node:18.9.0 as deps
WORKDIR /opt/app/server
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

FROM deps as builder
RUN yarn build

FROM builder as runner
EXPOSE 3000
ENV NODE_ENV production
CMD ["node", "./dist/main.js"]
FROM node:18-alpine3.16 as deps
WORKDIR /opt/app
RUN apk add dumb-init
COPY package*.json yarn.lock /opt/app/
RUN yarn
COPY . .

FROM deps as builder
RUN npm run build
RUN npm prune --production

FROM builder as runner
EXPOSE 3000
ENV NODE_ENV production
CMD ["dumb-init","node", "./dist/main.js"]
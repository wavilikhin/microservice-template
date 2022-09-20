FROM node:18.9.0 as deps
# RUN apk add --no-cache libc6-compat
WORKDIR /opt/app
COPY package*.json yarn.lock /opt/app/
COPY prisma ./prisma/
RUN yarn
COPY . .

FROM deps as builder
RUN yarn build

FROM builder as runner
EXPOSE ${PORT}
ENV NODE_ENV production
CMD ["node", "./dist/src/main.js"]
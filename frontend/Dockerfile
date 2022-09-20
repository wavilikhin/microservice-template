FROM node:18.9.0 AS deps
WORKDIR /opt/app/frontend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18.9.0 AS builder
WORKDIR /opt/app/frontend
COPY --from=deps /opt/app/frontend/node_modules ./node_modules
COPY . .
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline

FROM node:18.9.0
ENV NODE_ENV production
WORKDIR /opt/app/frontend
COPY --from=builder  /opt/app/frontend/package.json /opt/app/frontend/yarn.lock ./
COPY --from=builder  /opt/app/frontend/node_modules ./node_modules
COPY --from=builder  /opt/app/frontend/public ./public
COPY --from=builder  /opt/app/frontend/.next ./.next
COPY --from=builder  /opt/app/frontend/next.config.js  ./

EXPOSE 3000

CMD [ "yarn", "start" ]
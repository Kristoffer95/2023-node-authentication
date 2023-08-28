# Can check node version in https://hub.docker.com/_/node
FROM node:18.17-alpine3.18 as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY prisma ./prisma
RUN npx prisma generate

COPY . .

RUN npm run build

FROM node:18.17-alpine3.18 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json .

RUN npm ci --only=production

COPY prisma ./prisma

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]
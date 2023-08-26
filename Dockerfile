# Can check node version in https://hub.docker.com/_/node
FROM node:18.17-alpine3.18 as development

WORKDIR /usr/src/app

COPY package*.json .
COPY prisma ./prisma

RUN npm install

COPY . .

RUN npx prisma generate
# RUN npm run prisma:studio

RUN npm run build

FROM node:18.17-alpine3.18 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json .
COPY prisma ./prisma


RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]
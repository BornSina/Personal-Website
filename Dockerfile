FROM node:16-alpine as builder

WORKDIR /app

COPY public src next.config.js package.json package-lock.json tsconfig.json ./

RUN npm ci && npm run build

# <---------- Production Build Stage ---------->

FROM node:16-alpine as production

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]

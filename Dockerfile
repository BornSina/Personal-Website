FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN npm ci && npm run build

# <---------- Production Build Stage ---------->

FROM node:16-alpine as production

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "start"]

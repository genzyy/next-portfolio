FROM node:16-alpine
RUN apk add --no-cache python3 make g++ nodejs npm
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
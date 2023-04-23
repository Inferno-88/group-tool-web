# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build

# Run stage
FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=build /app/build ./public
COPY package*.json ./
RUN npm install --only=production
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "public"]
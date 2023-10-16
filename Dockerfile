FROM node as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
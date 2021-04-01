FROM node:15
WORKDIR /usr/src/rock-school-api
COPY ./package.json .
RUN npm install
COPY ./dist ./dist
EXPOSE 5200
CMD [ "npm run build", "npm start --watch" ]
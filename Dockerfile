FROM node:14.15.0-alpine3.10
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY . .
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent# start app
CMD ["npm", "start"]
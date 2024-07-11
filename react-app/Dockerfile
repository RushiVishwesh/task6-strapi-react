FROM node:9.5
WORKDIR /src/app
COPY . .
RUN npm install
RUN npm install -g react-scripts@1.1.1
RUN npm run build
CMD ["npm", "start"]

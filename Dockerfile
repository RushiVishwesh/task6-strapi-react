FROM node:18-alpine

ENV HOST=0.0.0.0
ENV PORT=1337
ENV APP_KEYS="toBeModified1,toBeModified2"
ENV API_TOKEN_SALT=tobemodified
ENV ADMIN_JWT_SECRET=tobemodified
ENV TRANSFER_TOKEN_SALT=tobemodified
ENV JWT_SECRET=tobemodified

WORKDIR /src/app
COPY . .
RUN npm install --production
RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]

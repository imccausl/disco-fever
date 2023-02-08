FROM node:17

WORKDIR /usr/src/app

EXPOSE 3000

COPY ./my-app .

WORKDIR /usr/src/app/my-app


RUN yarn install
CMD ['yarn', 'dev']

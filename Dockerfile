#FROM node:10-alpine as build-step
#ENV PROXY_PASS=""
#WORKDIR /vsu-front
#COPY . .
#RUN npm install
#RUN npm run build
#
#FROM nginx:alpine
#COPY /config/nginx.conf /etc/nginx/
#COPY --from=build-step /vsu-front/dist/ui /usr/share/nginx/html






#FROM node:10 as build-step
#WORKDIR /vsu-front
#COPY . .
#RUN npm install
#RUN npm run build
#
#FROM nginx:alpine
#
#ENV PROXY_PASS=""
#COPY configure.sh /
##COPY dist/ui/ www/ui
#COPY --from=build-step /vsu-front/dist/ui www/ui
#COPY config/nginx.conf etc/nginx/nginx.conf
#CMD ./configure.sh






## STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.19.0-alpine
ENV NGINX_HOST=""
COPY configure.sh /
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/ui /usr/share/nginx/html
CMD ./configure.sh


#FROM node:10
#
#WORKDIR /usr/src/app/app-ui
#
##COPY package*.json ./
#COPY * ./
#
#RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
#
#EXPOSE 4201
#
#CMD ["npm", "start"]


#CMD ["npm", "install"]
#RUN npm run build --prod
#COPY configure.sh /
#COPY dist/ui/ www/ui
#COPY config/nginx.conf etc/nginx/nginx.conf
#COPY docs www/docs
#COPY media www/media
#CMD ./configure.sh
#RUN ["chmod", "+x", "./configure.sh"]
#WORKDIR /dist/ui

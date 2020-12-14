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

FROM node:10-alpine as build-step
WORKDIR /vsu-front
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine

ENV PROXY_PASS=""
COPY configure.sh /
#COPY dist/ui/ www/ui
COPY --from=build-step /vsu-front/dist/ui www/ui
COPY config/nginx.conf etc/nginx/nginx.conf
CMD ./configure.sh

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

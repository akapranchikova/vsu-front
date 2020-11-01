FROM node:10-alpine as build-step
ENV PROXY_PASS=""
CMD ["npm", "install"]
RUN npm run build --prod
COPY configure.sh /
#COPY dist/ui/ www/ui
#COPY config/nginx.conf etc/nginx/nginx.conf
#COPY docs www/docs
#COPY media www/media
#CMD ./configure.sh
RUN ["chmod", "+x", "./configure.sh"]
WORKDIR /dist/ui

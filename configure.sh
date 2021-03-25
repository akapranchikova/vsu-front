#! /bin/sh
echo "NGINX_HOST"
sed -i 's#NGINX_HOST#'"NGINX_HOST#g"'' /etc/nginx/nginx.conf
nginx -g 'daemon off;'

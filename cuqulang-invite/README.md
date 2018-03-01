# 部署
```
# 测试环境
sh deploy.sh

# 线上环境
sh deploy_online.sh

# nginx 配置 
server {
    listen       80 default_server;
    listen       [::]:80 default_server;
    server_name  _;
    root         /usr/share/nginx/html;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location / {
       root /usr/share/nginx;
       index index.html index.htm;
    }

    #### 增加如下配置项  ####
    location /invite {
      root /usr/share/nginx;
      index index.html index.htm;
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}

```
# invite

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# started
gulp -p

# build test
npm run build:test

# build online
npm run build:online

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
=======
# cuqulang-invite
>>>>>>> 387d2c9ab508ca6f69ebcf1f1d577e8dbb786a93

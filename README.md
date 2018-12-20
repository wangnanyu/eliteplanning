

## 描述
Elite Planning 练手项目。因此本项目有两个环境，一个是前端开发环境(端口是8080)，一个是server服务环境(端口是9090)。

主要技术栈：<br/>
- vue2.0
- vue-router
- vuex
- element-ui
- nodejs
- express

## 如何运行
下载项目
```
 git clone https://github.com/wangnanyu/eliteplanning.git
```
```
 npm install
```
 打开另一个一个终端（称这个终端为B终端）进入到server目录安装依赖包
```
 npm install
```
启动server服务（得先启动后台服务，否则前端页面没有数据），在server目录下执行以下命令，成功执行会终端会提示服务端口号为9090
```
 npm run start
```
启动前端开发服务，成功执行后，会自动打开浏览器访问前端开发环境，浏览地址是`http://localhost:8080`
```
 npm run dev
```
服务器第一次部署，请先执行
```
 npm run build
```
服务器日常部署
```
 npm run deploy
```


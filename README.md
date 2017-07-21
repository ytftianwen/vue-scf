# vue-scf（scf即scaffold）

## 基于vue-cli的个性化脚手架，主要改变有
>1、改变单文件组件.vue开发结构，采用html+js+less开发结构
  组织结构
  
    -dir 
      -index.js
      -style.less
      -template.html
    
>2、增加基于vue-resource的http封装请求(commons中的http)

>3、增加自定义vue插件的架构components下

>4、开发大型项目时的路由封装部分待定，暂时采用vue-cli的方式()
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

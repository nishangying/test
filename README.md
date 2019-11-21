# lang

> A Vue.js project

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


  ● 布局：以 g 为命名空间，例如：.g-wrap 、.g-header、.g-content。
  ● 状态：以 s 为命名空间，表示动态的、具有交互性质的状态，例如：.s-current、s-selected。
  ● 工具：以 u 为命名空间，表示不耦合业务逻辑的、可复用的的工具，例如：u-clearfix、u-ellipsis。
  ● 组件：以 m 为命名空间，表示可复用、移植的组件模块，例如：m-slider、m-dropMenu。
  ● 钩子：以 j 为命名空间，表示特定给 JavaScript 调用的类名，例如：j-request、j-open。
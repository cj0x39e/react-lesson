## 丰橙学院 React webpack boilerplate

### 项目介绍

[目录结构](#目录结构)

[命令](#命令)

[配置文件](#配置文件)

[使用的技术](#使用的技术)

### 目录结构

```
build/
src/
|- index.jsx _______________________________ # 入口文件
|- App.jsx _________________________________ # 项目根组件
|  |- Components/
|    |- hello-world/
|       |- index.jsx _______________________ # 示例组件

webpack
|- paths.js ________________________________ # webpack 路径配置
|- webpack.common.js _______________________ # webpack 基础配置
|- webpack.dev.js __________________________ # 开发环境 webpack 配置
|- webpack.prod.js _________________________ # 生产环境 webpack 配置
```

### 命令

1- 启动项目使用 `yarn start` 或者 `npm start`.

2- 打包项目使用 `yarn build`.

3- 运行测试使用 `yarn test`

### 配置文件

- `webpack/paths.js` 相关路径配置，可以根据自己的需要修改
- `/webpack.config.js` webpack 入口配置，会根据当前的环境变量合并对应的 webpack 配置然后运行
- Enzyme config `/setupTest.js` here you will have all setup for enzyme to test your component.
- 代码格式化工具 Prettier 配置 `/.prettierc`.
- 代码编译目标浏览器配置 `/.browserslistrc`.

#### 使用的技术：

- [Webpack 4](https://github.com/webpack/webpack)
- [Babel 7](https://github.com/babel/babel)
- [React](https://github.com/facebook/react) `16.8`
- [Lodash](https://github.com/lodash/lodash)
- [Enzyme](http://airbnb.io/enzyme/)
- [Eslint](https://github.com/eslint/eslint/)
- [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
- [CSS modules](https://github.com/css-modules/css-modules)
- [Browsers list](https://github.com/browserslist/browserslist)
- [React hot loader](https://github.com/gaearon/react-hot-loader)
- [Webpack dev serve](https://github.com/webpack/webpack-dev-server)


let MyReact = {};

MyReact.createElement = function (nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children }
}

MyReact.render = function (vnode) {
    // 如果是字符串直接使用创建为文本节点
    if (vnode.split) return document.createTextNode(vnode);

    // 从 虚拟 DOM 转换为 DOM 节点
    let n = document.createElement(vnode.nodeName);

    // 处理 虚拟 DOM 节点上的属性到真实 DOM 节点
    let a = vnode.attributes || {};
    Object.keys(a).forEach( k => n.setAttribute(k, a[k]) );

    // 循环处理
    (vnode.children || []).forEach( c => n.appendChild(MyReact.render(c)) );

    return n;
}

export default MyReact;


手写 JSX 思路：
1. 初始化项目
    1. mkdir jsx_demo
    2. cd jsx_demo
    3. yarn init -y  
    4. yarn add webpack webpack-cli  webpack-dev-server html-webpack-plugin  -D
    5. 安装包过程中新建 src/index.js index.html 文件
    6. 添加 “scripts”: 
        1. "start": "webpack-dev-server --config ./webpack.config.js --mode development --open
2. 配置Babel
    1. yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react -D 
    2. 新建 .babelrc ，配置 babel-loader
3. 

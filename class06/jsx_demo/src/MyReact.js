
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



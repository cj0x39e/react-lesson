// import { createStore } from 'redux'
const { createStore } = require('redux');

/**
 * 这是一个 reducer，一个函数签名是这样的纯函数 (state, action) => state
 *
 * state 的类型由可以是 原始值、一个数组、一个对象，或者 Immutable.js 的数据。重要的是我们不能改变这个 state 对象，
 * 而是返回一个新的改了的 state.
 *
 * 在函数体内部我们使用了 switch 和 字符串去做匹配。当然我们也可以使用其它的方式。
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// 创建一个保存应用状态的 store
// 返回的对象上有三个方法可以调用 (subscribe, dispatch, getState)
let store = createStore(counter)

// 可以使用 subscribe() 监听 state 变化，在变化的时候去做一些逻辑处理
// 一般我们会使用相关的视图绑定库（比如 react-redux），而不是直接使用
store.subscribe(() => console.log(store.getState()))

// 改变内部状态的唯一方法就是使用 dispatch 触发一个 action
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1


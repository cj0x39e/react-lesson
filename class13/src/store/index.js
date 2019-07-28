// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter
// } from './actions'

import { VisibilityFilters } from './constans'

import { createStore } from 'redux'

import todoApp from './reducers'

export default createStore(todoApp)

// console.log(store.getState());

// const unsubscribe = store.subscribe(() => console.log(store.getState()))


// store.dispatch(addTodo('学习React'));
// store.dispatch(addTodo('学习Vue'));
// store.dispatch(toggleTodo(0));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));

// // 停止监听
// unsubscribe();

// store.dispatch(addTodo('学习Angular'));

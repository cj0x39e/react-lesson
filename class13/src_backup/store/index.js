import { createStore } from 'redux';
// import { addTodo, toggleTodo, setVisibilityFilter } from './actions/index';
// import { VisibilityFilters } from './constants/index';
import todoApp from './reducers/index';

let store = createStore(todoApp);

// console.log(store.getState());

// const unsubscribe = store.subscribe(() => console.log(store.getState()))


// store.dispatch(addTodo('学习React'));
// store.dispatch(addTodo('学习Vue'));
// store.dispatch(toggleTodo(0));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));

// // 停止监听
// unsubscribe();

// store.dispatch(addTodo('学习Angular'));

export default store;

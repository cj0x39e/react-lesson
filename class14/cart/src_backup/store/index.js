import { createStore, applyMiddleware, compose  } from 'redux';
import { createBrowserHistory, createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import ReduxThunk from 'redux-thunk';
import createRootReducer from './reducers';

export const history = createBrowserHistory()

// export default createStore(
//   createRootReducer(history),
//   {},
//   applyMiddleware(
//     ReduxThunk,
//     routerMiddleware(history)
//   )
// )

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    applyMiddleware(
      routerMiddleware(history),
      ReduxThunk
    )
  )

  return store;
}








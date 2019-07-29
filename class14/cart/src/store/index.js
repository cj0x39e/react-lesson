import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

export const history = createBrowserHistory()

// export const store = createStore(carApp, applyMiddleware(
//   thunk
// ));

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      thunk
    ),
  )

  return store
}

import React from 'react';
import './App.css';
import './store/index';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import VisibleTodoList from './components/VisibleTodoList';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider  store={store}>
      <AddTodo/>
      <Footer/>
      <VisibleTodoList/>
    </Provider>
  );
}

export default App;

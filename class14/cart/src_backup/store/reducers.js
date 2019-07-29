import _ from 'lodash';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import {
  TOGGLE_GOODS,
  TOGGLE_ALL_GOODS,
  DELETE_SELECTED_GOODS,
  DELETE_GOODS,
  CHANGE_QUANITY,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  FETCH_STARTED
} from './actionTypes';

import {
  LOADING,
  SUCCESS,
  FAILURE
} from './consts';



const initalState = [

  // {
  //   id: '1',
  //   img: 'http://localhost:3000/huawei.jpg',
  //   name: '华为 HUAWEI nova 5 Pro 前置3200万人像超级夜景4800万AI四摄',
  //   price: 2999.00,
  //   isSale: false,
  //   amount: 1,
  //   stock: 100,
  //   checked: false
  // },
  // {
  //   id: '2',
  //   img: 'http://localhost:3000/huawei.jpg',
  //   name: '华为 HUAWEI nova 5 Pro 前置3200万人像超级夜景4800万AI四摄',
  //   price: 2999.00,
  //   isSale: false,
  //   amount: 1,
  //   stock: 100,
  //   checked: false
  // },
  // {
  //   id: '3',
  //   img: 'http://localhost:3000/huawei.jpg',
  //   name: '华为 HUAWEI nova 5 Pro 前置3200万人像超级夜景4800万AI四摄',
  //   price: 2999.00,
  //   isSale: true,
  //   salePrice: 50,
  //   amount: 10,
  //   stock: 20,
  //   checked: false
  // }
];

const goods = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_GOODS:
      return state.map(goods => {
        if (goods.id === action.id) {
          return {
            ...goods,
            checked: !goods.checked
          }
        } else {
          return goods;
        }
      })
    case TOGGLE_ALL_GOODS:
        return state.map(goods => {
          return {
            ...goods,
            checked: action.checked
          }
        })
    case DELETE_SELECTED_GOODS:
        return (() => {
          const list = [...state];
          _.remove(list, i => i.checked);
          return list;
        })()
    case DELETE_GOODS:
        return (() => {
          const list = [...state];
          _.remove(list, i => i.id === action.id);
          return list;
        })()
    case CHANGE_QUANITY:
        return state.map(goods => {
          if (goods.id === action.id) {
            return {
              ...goods,
              amount: action.amount
            }
          } else {
            return goods;
          }
        })
    case FETCH_SUCCESS:
       return [
         ...action.result
       ]
    default:
      return state;
  }
}

const status = (state = LOADING, action) => {
  switch(action.type) {
    case FETCH_STARTED: {
      return LOADING;
    }
    case FETCH_SUCCESS: {
      return SUCCESS;
    }
    case FETCH_FAILURE: {
      return FAILURE;
    }
    default: {
      return state;
    }
  }
}

export default (history) =>  combineReducers({
  router: connectRouter(history),
  goods,
  status
})



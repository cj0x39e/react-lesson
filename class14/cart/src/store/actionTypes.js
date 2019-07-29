import { getLsit } from '../mock/list';

export const TOGGLE_GOODS = 'TOGGLE_GOODS';
export const TOGGLE_ALL_GOODS = 'TOGGLE_ALL_GOODS';
export const CHANGE_QUANITY = 'CHANGE_QUANITY';
export const DELETE_SELECTED_GOODS = 'DELETE_SELECTED_GOODS';
export const DELETE_GOODS = 'DELETE_GOODS';

export const FETCH_STARTED = 'FETCH_STARTED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const toggleGoods = (id, checked) => ({ type: TOGGLE_GOODS, id, checked });

export const toggleAllGoods = (checked) => ({ type: TOGGLE_ALL_GOODS, checked });

export const deleteSelectedGoods = () => ({ type: DELETE_SELECTED_GOODS });

export const deleteGoods = (id) => ({ type: DELETE_GOODS, id });

export const changeQuanity = (id, amount) => ({ type: CHANGE_QUANITY, id, amount });

export const fetchStarted = () => ({ type: FETCH_STARTED });

export const fetchSuccess = (result) => ({ type: FETCH_SUCCESS, result })

export const fetchFailure = (error) => ({ type: FETCH_FAILURE, error })

export const fetchGoods = () => {
  return (dispatch) => {
    dispatch(fetchStarted())
    return getLsit().then((response) => {
      dispatch(fetchSuccess(response));
    }).catch((error) => {
      dispatch(fetchFailure(error));
    })
  };
}

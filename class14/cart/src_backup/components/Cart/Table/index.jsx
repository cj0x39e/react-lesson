import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  toggleGoods,
  changeQuanity,
  deleteGoods,
  toggleAllGoods,
  deleteSelectedGoods,
  fetchGoods
} from '../../../store/actionTypes';
import {
  SUCCESS,
  FAILURE,
  LOADING
} from '../../../store/consts'
import Item from './Item';

import Header from './Header';
import Footer from './Footer';


function Table (props) {
  const {
    data,
    selectedAll,
    total,
    totalPrice,
    totalSalePrice,
    status,
    initGoods
  } = props;

  useEffect(() => {
    initGoods();
  }, [initGoods])


  const getContent = () => {
    switch (status) {
      case LOADING:
        return <span className="empty">正在加载中!</span>;
      case SUCCESS:
        return data.map(item =>
          <Item
           key={item.id} {...item}
           onSelectChange={props.onItemSelectChange}
           onQuanityChange={props.onItemQuanityChange}
           onDelete={props.onItemDelete}
           />
          )
      case FAILURE:
          return <span className="empty">加载失败!</span>;
      default:
          return <span className="empty">正在加载中!</span>;
    }
  }

  return (
    <div className="cart-table">
      <Header
        selectedAll={selectedAll}
        onAllSelectChange={props.onAllSelectChange}
      />
      <div className="cart-table-list">
      {
        getContent()
      }
      </div>
      <Footer
        selectedAll={selectedAll}
        onAllSelectChange={props.onAllSelectChange}
        onDeleteSelected={props.onDeleteSelected}
        total={total}
        totalPrice={totalPrice}
        totalSalePrice={totalSalePrice}
      />
    </div>
  )
}

Table.defaultProps = {
  data: []
}

Table.propTyes = {
  data: PropTypes.array,
  selectedAll: PropTypes.bool,
  onItemSelectChange: PropTypes.func,
  onItemQuanityChange: PropTypes.func,
  onItemDelete: PropTypes.func,
  onAllSelectChange: PropTypes.func
}

const mapStateToProps = (state) => {
    let goods = state.goods;
    let selectedAll = true;
    let total = 0;
    let totalPrice = 0;
    let totalSalePrice = 0;

    goods.forEach(item => {
      if (!item.checked) {
        selectedAll = false
      }

      total += item.amount

      let salePrice = item.isSale ? item.salePrice : 0;

      totalPrice += (item.price - salePrice) * item.amount;

      totalSalePrice += salePrice * item.amount;
    });

  return {
    data: goods,
    selectedAll: !!(goods.length && selectedAll),
    total,
    totalPrice,
    totalSalePrice,
    status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemSelectChange: (id, checked) =>  dispatch(toggleGoods(id, checked)),
    onItemQuanityChange: (id, amount) =>  dispatch(changeQuanity(id, amount)),
    onItemDelete: (id) => dispatch(deleteGoods(id)),
    onAllSelectChange: (checked) => { dispatch(toggleAllGoods(checked)) },
    onDeleteSelected: () => { dispatch(deleteSelectedGoods()) },
    initGoods: () => {dispatch(fetchGoods())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);


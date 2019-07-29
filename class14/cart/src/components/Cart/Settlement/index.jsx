import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Settlement (props) {
  return (
    <div className="cart-settlement">
      <span className="total">
        总计（不含运费）: <span className="price">￥{props.totalPrice}</span>
      </span>
      <button className="submit">
        {/* 去结算 */}
        {/* <Link to='result'>去结算</Link> */}
        <a onClick={() => { props.push('/result') }}>去结算</a>
      </button>
      {/* <Route path="result" component={Result} /> */}
    </div>
  )
}

Settlement.propTyes = {
  totalPrice: PropTypes.number
};


const mapStateToProps = (state) => {
  let goods = state.goods;
  let totalPrice = 0;

  goods.forEach(item => {

    let salePrice = item.isSale ? item.salePrice : 0;

    totalPrice += (item.price - salePrice) * item.amount;
  });

  return {
    totalPrice
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    push: (path) => { dispatch(push(path)) }
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Settlement);

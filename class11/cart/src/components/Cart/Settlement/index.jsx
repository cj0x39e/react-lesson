import React from 'react';
import PropTypes from 'prop-types';

function Settlement (props) {
  return (
    <div className="cart-settlement">
      <span className="total">
        总计（不含运费）: <span className="price">￥{props.totalPrice}</span>
      </span>
      <button className="submit">去结算</button>
    </div>
  )
}

Settlement.propTyes = {
  totalPrice: PropTypes.number
};

export default Settlement;

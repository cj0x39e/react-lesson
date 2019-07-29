import React from 'react';
import Checkbox from '../../Checkbox/index';
import PropTypes from 'prop-types';

function Footer (props) {

  const {
    selectedAll,
    onAllSelectChange,
    onDeleteSelected,
    total,
    totalPrice,
    totalSalePrice
  } = props;

  return (
    <div className="cart-table-footer">
      <Checkbox checked={selectedAll} onChange={onAllSelectChange}>全选</Checkbox>
      <a className="delete-selected" onClick={onDeleteSelected}>删除已选商品</a>
      <div className="cart-table-total">
        <span className="total">{total}件商品</span>
        <div className="detail">
          <span className="total">总计: ￥{totalPrice}</span>
          <span className="sale">优惠: ￥{totalSalePrice}</span>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
  selectedAll: PropTypes.bool,
  onAllSelectChange: PropTypes.func,
  onDeleteSelected: PropTypes.func,
  total: PropTypes.number,
  totalPrice: PropTypes.number,
  totalSalePrice: PropTypes.number,
}

export default Footer;

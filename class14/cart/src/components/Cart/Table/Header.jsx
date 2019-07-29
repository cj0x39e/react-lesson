import React from 'react';
import Checkbox from '../../Checkbox/index';
import PropTypes from 'prop-types';


function Header (props) {
  const {
    selectedAll,
    onAllSelectChange
  } = props;

  return (
    <div className="cart-table-header">
      <div className="checkbox item">
      <Checkbox checked={selectedAll} onChange={onAllSelectChange}>全选</Checkbox>
      </div>
      <span className="name item">商品</span>
      <span className="price item">价格</span>
      <span className="sale item">优惠</span>
      <span className="stock item">库存</span>
      <span className="quanity item">数量</span>
      <span className="operate item">操作</span>
    </div>
  );
}

Header.propTypes = {
  onAllSelectChange: PropTypes.func,
  selectedAll: PropTypes.bool
}

export default Header;

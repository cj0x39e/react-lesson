import React from 'react';
import Checkbox from '../../Checkbox/index';
import { CartContext } from '../context';


function Header () {
  return (
    <div className="cart-table-header">
      <div className="checkbox item">
        <CartContext.Consumer>
            {({ selectedAll, onAllSelectChange }) =>
              <Checkbox checked={selectedAll} onChange={onAllSelectChange}>全选</Checkbox>}
        </CartContext.Consumer>
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

export default Header;

import React from 'react';
import Checkbox from '../../Checkbox/index';
import { CartContext } from '../context';

function Footer (props) {
  return (
    <div className="cart-table-footer">
      <CartContext.Consumer>
            {(context) => {
              const {
                selectedAll,
                onAllSelectChange,
                onDeleteSelected,
                total,
                totalPrice,
                totalSalePrice
              } = context;
              return (
                <>
                  <Checkbox checked={selectedAll} onChange={onAllSelectChange}>全选</Checkbox>
                  <a className="delete-selected" onClick={onDeleteSelected}>删除已选商品</a>
                  <div className="cart-table-total">
                    <span className="total">{total}件商品</span>
                    <div className="detail">
                      <span className="total">总计: ￥{totalPrice}</span>
                      <span className="sale">优惠: ￥{totalSalePrice}</span>
                    </div>
                  </div>
                </>
              )
            }}
        </CartContext.Consumer>
    </div>
  )
}

export default Footer;

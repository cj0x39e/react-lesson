import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../Checkbox/index';
import Quanity from '../../Quanity/index';
import { CartContext } from '../context';


function Item (props) {
  const {
    id,
    checked,
    img,
    name,
    price,
    isSale,
    salePrice,
    stock,
    amount
  } = props;

  return (
    <div className="cart-table-item">
      <div className="checkbox item">
        <CartContext.Consumer>
          {({ onSelectChange }) =>  <Checkbox checked={checked} onChange={(val) => onSelectChange(val, id)}/>}
        </CartContext.Consumer>
      </div>
      <div className="img item">
        <img src={img} alt={name}/>
      </div>
      <span className="name item">
        {name}
      </span>
      <span className="price item">
       ￥{price}
      </span>
      <span className="sale item">
       {isSale ? salePrice : ''}
      </span>
      <span className="stock item">
       {stock}
      </span>
      <div className="quanity item">
        <CartContext.Consumer>
          {
            ({ onQuanityChange }) =>
              <Quanity
               value={amount}
               onChange={(val) => { onQuanityChange(val, id) }}
               min={1}
               max={stock}
            />
          }
        </CartContext.Consumer>
      </div>
      <CartContext.Consumer>
          {({ onDelete }) =>  <a className="operate item" onClick={() => { onDelete(id) }}>删除</a>}
      </CartContext.Consumer>
    </div>
  )
}


Item.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isSale: PropTypes.bool.isRequired,
  salePrice: PropTypes.number,
  stock: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
}

export default Item;

import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../Checkbox/index';
import Quanity from '../../Quanity/index';


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
    amount,
    onSelectChange,
    onQuanityChange,
    onDelete
  } = props;

  return (
    <div className="cart-table-item">
      <div className="checkbox item">
        <Checkbox checked={checked} onChange={(val) => onSelectChange(id, val)}/>
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
        <Quanity
            value={amount}
            onChange={(val) => { onQuanityChange(id, val) }}
            min={1}
            max={stock}
        />
      </div>
      <a className="operate item" onClick={() => { onDelete(id) }}>删除</a>
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
  amount: PropTypes.number.isRequired,
  onSelectChange: PropTypes.func,
  onQuanityChange: PropTypes.func,
  onDelete: PropTypes.func
}

export default Item;

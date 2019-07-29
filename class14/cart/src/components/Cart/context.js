import React from 'react';


const CartContext = React.createContext({
  selectedAll: false,
  onAllSelectChange: () => {},
  onSelectChange: () => {},
  onQuanityChange: () => {},
  onDelete: () => {},
  onDeleteSelected: () => {},
  total: 0,
  totalPrice: 0,
  totalSalePrice: 0
})


export {
  CartContext
}

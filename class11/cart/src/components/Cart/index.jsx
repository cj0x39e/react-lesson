import React, { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';
import Table from './Table/index';
import Settlement from './Settlement/index';
import { getLsit } from '../../mock/list';
import { CartContext } from './context';
import './index.scss';


const Title = React.memo(function Title () {
  return <h2 className="title">我的购物车</h2>
})

function Cart () {
  const [list, setList] = useState([]);

  useEffect(() => {
    getLsit().then(data => {
      setList(data.map(item => {
        return {
          ...item,
          checked: false
        }
      }));
    });
  }, [])

  const handleSelectAllChange = (value) => {
    const res = list.map(item => {
      return {
        ...item,
        checked: value
      }
    });
    setList(res)
  }

  const handleSelectChange = (value, id) => {
    const res = list.map(item => {
      if (item.id === id) {
        return {
          ...item,
          checked: value
        };
      } else {
        return item;
      }
    });
    setList(res)
  }

  const handleQuanityChange = (value, id) => {
    const res = list.map(item => {
      if (item.id === id) {
        return {
          ...item,
          amount: value
        };
      } else {
        return item;
      }
    });
    setList(res)
  }

  const handleDelete = (id) => {
    _.remove(list, i => i.id === id);
    setList([...list]);
  }

  const handleDeleteSelected = () => {
    _.remove(list, i => i.checked);
    setList([...list]);
  }

  const cartInfo = useMemo(() => {
    let selectedAll = true;
    let total = 0;
    let totalPrice = 0;
    let totalSalePrice = 0;

    list.forEach(item => {
      if (!item.checked) {
        selectedAll = false
      }

      total += item.amount

      let salePrice = item.isSale ? item.salePrice : 0;

      totalPrice += (item.price - salePrice) * item.amount;

      totalSalePrice += salePrice * item.amount;
    });

    return {
      selectedAll: list.length && selectedAll,
      total,
      totalPrice,
      totalSalePrice
    }
  }, [list])

  return (
    <div className="cart">
      <Title />
      <CartContext.Provider
        value={{
          selectedAll: cartInfo.selectedAll,
          onAllSelectChange: handleSelectAllChange,
          onSelectChange: handleSelectChange,
          onQuanityChange: handleQuanityChange,
          onDelete: handleDelete,
          onDeleteSelected: handleDeleteSelected,
          total: cartInfo.total,
          totalPrice: cartInfo.totalPrice,
          totalSalePrice: cartInfo.totalSalePrice
        }}
      >
        <Table
          data={list}
        />
      </CartContext.Provider>
      <Settlement
         totalPrice={cartInfo.totalPrice}
      />
    </div>
  )
}

export default Cart;

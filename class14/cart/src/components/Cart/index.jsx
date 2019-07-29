import React from 'react';
import Table from './Table/index';
import Settlement from './Settlement/index'
import './index.scss';


const Title = React.memo(function Title () {
  return <h2 className="title">我的购物车</h2>
})

function Cart () {

  return (
    <div className="cart">
      <Title/>
      <Table/>
      <Settlement/>
    </div>
  )
}

export default Cart;

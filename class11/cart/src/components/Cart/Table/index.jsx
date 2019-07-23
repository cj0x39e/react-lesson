import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './Item';
import _ from 'lodash';

import Header from './Header';
import Footer from './Footer';


function Table (props) {
  const {
    data
  } = props;

  return (
    <div className="cart-table">
      <Header />
      <div className="cart-table-list">
      {
        data.length > 0 ? data.map(item => <Item key={item.id} {...item}/>) : <span className="empty">暂无商品!</span>
      }
      </div>
      <Footer/>
    </div>
  )
}

Table.defaultProps = {
  data: []
}

Table.propTyes = {
  data: PropTypes.array
}

export default Table;



import React from 'react';
// import { FixedSizeList as List } from 'react-window';
import List  from './List';
import './index.scss';

const Item =(props) => {
  const {
    index,
    style
  } = props;

  return <div className="item" style={style} >{index}</div>;
}

const App = () => {
  // const getList = () => {
  //   const list = [];

  //   for (let i = 0; i < 1000; i++) {
  //     list.push(<Item key={i}>{i}</Item>)
  //   }
  //   return list;
  // }
  return (
    <div className="long-list">
      <List
        height={400}
        itemCount={1000}
        itemSize={20}
        width={300}
      >
        {Item}
      </List>
    </div>
  )
}

export default App;


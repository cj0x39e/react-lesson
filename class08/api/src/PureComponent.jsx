import React, { useState } from 'react';

function ItemA () {
  console.log('render ItemA');
  return <div>Hello ItemA</div>;
}

function ItemB () {
  console.log('render ItemB');
  return <div>Hello ItemB</div>;
}

const ItemB1 = React.memo(ItemB, (prevProps, nextProps) => {
  return false;
})

function App () {
  const [list, setList] = useState([1, 2]);

  return (
    <>
      {
        list.map(i => <ItemA key={i}/>)
      }
      {
        list.map(i => <ItemB1 key={i}/>)
      }
      <button onClick={() => { setList(oldList => { return [...oldList] })}}>设置</button>
    </>
  )
}

export default App;

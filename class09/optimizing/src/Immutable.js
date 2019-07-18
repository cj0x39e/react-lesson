import React from 'react';
import { Map, is, getIn,mergeDeep } from 'immutable';


const original = { x: { y: 123 }}
const rs = mergeDeep(original, { x: { z: 456 }}) // { x: { y: 123, z: 456 }}
console.log(rs) // { x: { y: 123 }}

function App () {
  return <div>Hello world!</div>
}

export default App;

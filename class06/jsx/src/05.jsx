import React, { useState } from 'react';

function Hello (props) {
    const {
        text
    } = props;
    return <div>{text}</div>
}

function App () {
    // 不能使用 if 或 for 循环，因为这不是 JS 表达式
   return <Hello text={'Hello ' + 'world5!'} />
}

export default App;
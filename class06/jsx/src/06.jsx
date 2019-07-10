import React from 'react';

function Hello (props) {
    const {
        text
    } = props;
    return text ? text.toString() : 'default text';
}

function App () {
    // 和 <Hello text={true} /> 等价
   return <Hello text />
}

export default App;
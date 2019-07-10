import React from 'react';

function Hello (props) {
    return props.title + ' ' + props.content;
}

function App () {
    const data = {
        title: 'Hello',
        content: 'world!',
       //  xxx: 'ccc'
    }
    // const { xxx, ...props } = data;

   return <Hello {...data} />
}

export default App;
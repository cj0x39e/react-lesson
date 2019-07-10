import React from 'react';

function Example (props) {
    return props.children;
}

function App () {
    return (
        <Example>
            <div width="100">Hello world8!</div>
        </Example>
    )
}

export default App;
import React from 'react';

function Example (props) {
    return props.children;
}

function App (props) {
    return (
        <Example>
            {false}
            {null}
            {undefined}
            {true}
            {[].length && '123'}
        </Example>
    )
}

export default App;
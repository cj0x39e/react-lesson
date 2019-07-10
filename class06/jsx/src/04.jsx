import React, { useState } from 'react';

function A () {
    return <div>A</div>;
}

function B () {
    return <div>B</div>;
}

const components = {
    A: A,
    B: B
};

function App () {
    const [type, setType] = useState('A');
    const Component = components[type];

    return (
        <div>
            <Component />
            <button onClick={() => {setType('A')}}>显示 A</button>
            <button onClick={() => {setType('B')}}>显示 B</button>
        </div>
    )
}

export default App;
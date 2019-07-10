import React from 'react';

function Col () {
    return <div>Col</div>;
}

function Row (props) {
    return props.children();
}

function App (props) {
    return (
        <Row>
            {() => <Col />}
        </Row>
    )
}

export default App;
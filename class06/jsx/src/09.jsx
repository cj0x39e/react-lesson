import React from 'react';


function Col () {
    return <div>Col</div>;
}

function Row (props) {
    return <div class='row'>{props.children}</div>;
}

function App (props) {

    return (
        <Row>
            <Col />
            <Col />
        </Row>
    )

    // return (
    //     <Row>
    //         {
    //             [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (<Col />))
    //         }
    //     </Row>
    // )
}

export default App;
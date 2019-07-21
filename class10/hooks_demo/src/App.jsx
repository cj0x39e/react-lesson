import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Demo from './components/Demo';
import { ContentContext } from './context';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ContentContext.Provider value={{ content: 'Hello world!' }}>
                <Demo />
            </ContentContext.Provider>
        );
    }
}

export default hot(App);

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
// import Event from './components/Event';
// import Conditional from './components/Conditional';
// import ListAndKey from './components/ListAndKey';
// import Forms from './components/Forms';
import LiftingStateUp from './components/lifting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <LiftingStateUp />;
  }
}

export default hot(App);

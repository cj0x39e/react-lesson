import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import APP from './Context';
// import APP from './PureComponent';
// import APP from './theme/index';
// import APP from './Ref';
// import APP from './suspense/index.jsx';
import APP from './Modal.jsx';

ReactDOM.render(<APP />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { BrowserRouter as Router, withRouter  } from 'react-router-dom';
import React from 'react';


const Test = (props) => {
  debugger;
  return 'test';
}

const WithLocationTest = withRouter(Test);

function App () {
  return (
    <>
      <Router>
        <WithLocationTest/>
      </Router>
    </>
  )
}

export default App;

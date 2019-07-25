import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import React from 'react';


const About = () => {
  return 'About';
}

const User = () => {
  return 'User';
}

const NoMatch = () => {
  return '404';
}

function App () {
  return (
    <>
      <Router>
          <Link to="/about">关于</Link>
          <Link to="/user">用户</Link>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/:user" component={User}/>
          <Redirect from="/:user" to="/about"/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;

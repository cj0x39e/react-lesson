import React from "react";
// BrowserRouter
// HashRouter
import { BrowserRouter as Router, Route, Link, Prompt, NavLink, Switch, Redirect, withRouter } from "react-router-dom";

function Header(props) {
  debugger;

  const activeStyle = {
    fontWeight: 'bold',
    color: 'red'
  };

  const isActive = (match, location) => {
    debugger;
    // 根据需求写逻辑
    return false;
  }

  return (
    <ul>
      <li>
        <NavLink to={{
          pathname: '/',
          search: '?text=helloword',
          hash: '#test',
          state: {
            data: 1024
          }}}
          exact={true}
        >
        Home
      </NavLink>
      </li>
      <li>
        <NavLink
          location={{
            pathname: '1024'
          }}
          activeStyle={activeStyle}
          to="/about/">About</NavLink>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
      <Link to="/topics/2">Topics2</Link>
      </li>
    </ul>
  );
}

const WithHistoryHeader = withRouter(Header);

function App() {

  return (
    <Router
      initialEntries={[ '/about', '/topics']}
      initialIndex={1}
    >
      <div>
        <WithHistoryHeader />

        <Route exact path="/" children={
          (props) => {
            debugger;
            return <Home/>
          }
        }/>
        <Route sensitive={true} path={['/about', '/About1']} component={About} />
        <Switch >
          <Redirect from='/topics/:id' to='/topics' />
          <Route path="/topics" component={Topics} />
        </Switch>
      </div>
    </Router>
  );
}

function Topics2 () {
  return <div>Topics2</div>
}



function Home(props) {
  return <h2>Home</h2>;
}

function About() {
  return (
    <>
      <Prompt
        message="你确定要离开当前页面吗？"
        when={false}
      />
      <h2>About</h2>
    </>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}



export default App;

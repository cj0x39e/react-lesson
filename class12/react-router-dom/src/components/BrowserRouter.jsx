import React from "react";
// import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Prompt, NavLink, Redirect, Switch } from "react-router-dom";

import "./router.css";

function Index() {
  return <h2>Home</h2>;
}

function About(props) {
  return (
    <div>
      <Prompt
        when={true}
	      message={location => { return '你确定要离开?' }}
      />
      <h2>About</h2>
    </div>
  );
}

function Users(props) {
  return <h2>Users</h2>;
}

function AppRouter({ match }) {

  const anchorRef = React.createRef()

  const activeStyle = {
    fontWeight: 'bold'
  };

  // const isActive = (match, location) => {
  //   debugger;
  //   // 根据需求写逻辑
  // }

  return (
    <Router
    >
      <div>
        <button onClick={() => { console.log(anchorRef) }}>元素</button>
        <nav>
          <ul>
            <li>
              <NavLink
               exact to="/" activeStyle={activeStyle}>Home</NavLink>
            </li>
            <li>
              <NavLink
               to="/about/"
               innerRef={anchorRef}>About</NavLink>
            </li>
            <li>
              <Link to="/users/">
                Users
              </Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/topics2">Topics</Link>
            </li>
          </ul>
        </nav>
        {/* 如果在有嵌套路径的时候，父路径不是作为公共部分显示，需要配置 exact */}
        <Switch>

          <Route
          path="/about/"
          push={false}
          render={
            () => <Redirect to="/users/" />
          }
          />
          <Route path="/" component={Index} />
        </Switch>


        <Route
         path="/users/"
         children={(props) => {
           return <Users/>
         }}
        />
        <Route path={["/topics", "/topics2"]} component={Topics} />
      </div>
    </Router>
  );
}

function Topics({ match }) {
  debugger;
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

function Topic(props) {
  debugger;
  return <h3>Requested Param: {props.match.params.id}</h3>;
}

export default AppRouter;

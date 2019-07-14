import React, { useState } from 'react';
// import hoistNonReactStatic from 'hoist-non-react-statics';
import './App.css';

function Button (props) {
  return <button onClick={props.onClick}>{props.text}</button>
}

function BorderBoxStyleRenderProps (props) {
  // const { render } = props;
  const { children } = props;

  return (
    <div style={{border: '5px solid red'}}>
      {/* {render()} */}
      {children()}
    </div>
  )
}


class App extends React.Component {
  render () {

    return (
      <>
        {/* <BorderBoxStyleRenderProps
          render={() => <Button text="确定"/>}
        /> */}
        <BorderBoxStyleRenderProps>
          {
            () => <Button text="确定" />
          }
        </BorderBoxStyleRenderProps>
      </>
    )
  }
}



export default App;


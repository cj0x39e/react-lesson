import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//   }
//   componentDidMount() {
//     this.inputRef.current.focus();
//   }
//   render() {
//     return <input type="text" ref={this.inputRef} />;
//   }
// }

// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className="FancyButton" {...props}>
//     {props.children}
//   </button>
// ));

// class FancyButton extends React.Component {
//   render () {
//     return (
//       <button className="FancyButton" {...this.props}>
//         {this.props.children}
//       </button>
//     )
//   }
// }

// 通过转发之后我们能够拿到 button 的 DOM 节点
// const ref = React.createRef();
{/* <FancyButton ref={ref}>Click me!</FancyButton>; */}

function App () {
  const ref = React.createRef();

  const handleClick = () => {
    console.log(ref);
  }

  return <FancyButton onClick={handleClick} ref={ref}>确定</FancyButton>
}

export default App;

import React from 'react';

/**
 * 表单
 */

// 受控写法
class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value.toUpperCase(),
    });
  };

  render() {
    const { value } = this.state;

    return <input type="text" value={value} onChange={this.handleChange} />;
  }
}

// 非受控写法
// class Forms extends React.Component {
//   constructor(props) {
//     super(props);
//     this.input = React.createRef();
//   }

//   handleClick = () => {
//     console.log(this.input.current.value);
//   };

//   render() {
//     return (
//       <>
//         <input ref={this.input} type="text" />
//         <button type="button" onClick={this.handleClick}>
//           获取输入值
//         </button>
//       </>
//     );
//   }
// }

export default Forms;

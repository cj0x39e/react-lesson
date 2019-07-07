import React from 'react';

/**
 * 条件渲染
 */

class Condition extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFirst: true,
    };
  }

  handleToggle = () => {
    this.setState(state => {
      return {
        showFirst: !state.showFirst,
      };
    });
  };

  render() {
    const { showFirst } = this.state;

    const getContent = () => {
      if (showFirst) {
        return <div>First</div>;
      }
      // 不渲染元素
      return null;
    };

    // const getContent = () => {
    //   // 返回 false React 会忽略并跳过它
    //   return showFirst && <div>First</div>;
    // };

    // const getContent = () => {
    //   // 返回 false React 会忽略并跳过它
    //   return showFirst ? <div>First</div> : null;
    // };

    return (
      <>
        {getContent()}
        <button onClick={this.handleToggle} type="button">
          切换显示的内容
        </button>
      </>
    );
  }
}

export default Condition;

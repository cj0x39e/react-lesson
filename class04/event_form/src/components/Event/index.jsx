import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: Date.now(),
    };

    // this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleTimeUpdate = e => {
    console.log(e);
    debugger;
    this.setState({
      currentTime: Date.now(),
    });
  };

  handleLinkClick(e) {
    e.preventDefault();
  }

  render() {
    const { currentTime } = this.state;

    return (
      <>
        <div>{currentTime}</div>
        <button onClick={this.handleTimeUpdate} type="button">
          更新时间
        </button>
        <a href="https://www.baidu.com" onClick={this.handleLinkClick}>
          链接
        </a>
      </>
    );
  }
}

export default Event;

import React from 'react';


class List extends React.Component {

  listRef;

  constructor(props) {
    super(props);

    this.listRef = React.createRef();
    this.visbleCount = props.height / props.itemSize;

    this.state = {
      starOffset: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount () {
    this.listRef.current.addEventListener('scroll', this.handleScroll);
  }

  componentWilUnmount () {
    this.listRef.current.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll (e) {
    this.setState({
      starOffset: Math.floor(this.listRef.current.scrollTop / this.props.itemSize)
    });
  }

  render () {
    const {
      height,
      itemCount,
      itemSize,
      children
    } = this.props;

    const {
      starOffset
    } = this.state;

    const {
      visbleCount
    } = this;

    const getItemList = () => {
      let list = [];

      for (let i = starOffset; i < visbleCount + starOffset; i++) {
        const Item = children;
        const style = {
          height: `${itemSize}px`,
          position: 'absolute',
          top: `${i * itemSize}px`,
          width: '100px'
        };
        list.push(<Item key={i} index={i} style={style}  />)
      }

      return list;
    }

    const visbleStyle = {
      height: `${height}px`,
      overflowY: 'scroll'
    };

    const listStyle = {
      height: `${itemSize * itemCount}px`,
      position: 'relative'
    };

    return (
      <div style={visbleStyle} ref={this.listRef}>
        <div style={listStyle}>
          {getItemList()}
        </div>
      </div>
    )
  }
}

export default List;

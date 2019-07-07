import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './App.css';
import { initializeGrid, layoutInitialGrid } from './grid';

const randomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const createBlocks = number => {
  const blocks = [];
  for (let i = 0; i < number; i++) {
    blocks.push({
      id: uuid(),
      height: randomInt(100, 200),
    });
  }
  return blocks;
};

class Grid extends Component {
  constructor(props) {
    super(props);

    // 初始化 state
    this.state = {
      blocks: [],
    };

    // 创建引用
    this.grid = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (state.blocks.length > 0) {
      return null;
    }

    return { blocks: createBlocks(props.numberOfBlocks) };
  }

  componentDidMount() {
    // 初始化瀑布流
    this.bricks = initializeGrid(this.grid.current);
    layoutInitialGrid(this.bricks);

    // 每隔 2 秒添加新的块
    this.interval = setInterval(() => {
      this.addBlocks();
    }, 2000);
  }

  addBlocks = () => {
    const newBlocks = createBlocks(5);
    this.setState(prevState => ({
      blocks: prevState.blocks.concat(newBlocks),
    }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    // 只有当下一个 state 的内容的长度大于当前 state 的内容才往下渲染
    return nextState.blocks.length > this.state.blocks.length;
    // return false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.bricks.pack();

    // 如果添加了新的内容，滚动到底部
    if (snapshot.isAtBottomOfGrid) {
      window.scrollTo({
        top: this.grid.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 获取 DOM 元素的当前状态做一些操作
    if (prevState.blocks.length < this.state.blocks.length) {
      const grid = this.grid.current;
      const isAtBottomOfGrid =
        window.innerHeight + window.pageYOffset === grid.scrollHeight;

      return { isAtBottomOfGrid };
    }

    return null;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="Grid" ref={this.grid}>
          {this.state.blocks.map(block => (
            <div
              key={block.id}
              style={{ height: block.height }}
              className="grid-item"
            />
          ))}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <Grid numberOfBlocks={1} />;
  }
}

export default App;
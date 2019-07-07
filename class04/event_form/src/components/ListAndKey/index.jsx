import React from 'react';

/**
 * 列表与 key
 */

class ListAndKey extends React.Component {
  list = [
    { text: 'React', id: 1 },
    { text: 'Vue', id: 2 },
    { text: 'Angular', id: 3 },
  ];

  render() {
    // const getContent = () => {
    //   return this.list.map(item => <div key={item.id}>{item.text}</div>);
    // };

    const getContent = () => {
      const { list } = this;
      const result = [];
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        result.push(<div key={item.id}>{item.text}</div>);
      }
      return result;
    };

    return getContent();
  }
}

export default ListAndKey;

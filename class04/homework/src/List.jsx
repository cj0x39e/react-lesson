import React, { Component } from 'react';

class List extends Component {
    constructor (props) {
        super(props);

        this.state = {
            value: '',
            list: [] // { id: Date.now(), text: '' }
        };
    }

    handleValueChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleAdd = () => {
        this.setState(preState => {
            return {
                list: [
                    {
                        text: preState.value,
                        id: Date.now()
                    },
                    ...preState.list
                ]
            }
        }, () => {
            this.setState({
                value: ''
            });
        })
    }

    handleRemove = (id) => {
        this.setState(preState => {
            const list = preState.list;

            for (let i = list.length - 1; i >= 0; i--) {
                if (list[i].id === id) {
                    list.splice(i, 1);
                    break;
                }
            }

            return {
                list: [
                    ...list
                ]
            }
        });
    }

    render () {
        const {
            value,
            list
        } = this.state;

        const {
            handleValueChange,
            handleAdd,
            handleRemove
        } = this;

        return (
            <div>
                <div>
                    <input
                        placeholder="请输入您的名字"
                        value={value}
                        onChange={handleValueChange}
                     />
                     <button onClick={handleAdd}>新增</button>
                </div>
                <div>
                    {
                        list.map(item => (
                            <div key={item.id}>
                                {item.text}
                                <a onClick={() => { handleRemove(item.id) }} style={{color: 'red'}}>删除</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default List;
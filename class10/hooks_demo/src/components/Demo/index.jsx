import React, { useState, useEffect, useContext } from 'react';
import { ContentContext } from  '../../context';

function useCount(initCount) {
    const [count, setCount] = useState(initCount);

    useEffect(() => {
        let timer = setInterval(() => {
            // console.log('timer:', count);
            setCount(c => c + 1);
        }, 1000);

        return () => {
            // console.log('useEffect clear!');
            clearInterval(timer);
        };
    });

    return [count, setCount];
}



function StateDemo(props) {
    const [count, setCount] = useCount(1);
    const content = useContext(ContentContext);
    // const [count1] = useCount(100);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>{content.content}</div>
            <div>
            你的生命有多了：{count} 秒
            </div>
            <button onClick={handleClick}>
              点击续1秒
            </button>
        </div>
    );
}

export default StateDemo;

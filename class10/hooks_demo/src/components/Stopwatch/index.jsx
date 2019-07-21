import React, { Component } from 'react';
import TimeDisplay from './TimeDisplay';
import Button from './Button';
import styles from './index.scss';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            log: [],
            isOn: false
        };
    }

    timer;

    startTimer() {
        this.stopTimer();

        this.timer = setInterval(() => {
            this.setState(preState => {
                return {
                    time: preState.time + 1
                };
            });
        }, 10);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    handleStartAndStop = () => {
        this.setState(preState => {
            if (preState.isOn) {
                this.stopTimer();
            } else {
                this.startTimer();
            }

            return {
                isOn: !preState.isOn
            };
        });
    }

    handleReset = () => {
        this.setState({
            time: 0
        });
    }

    handleAddLog = () => {
        this.setState(preState => {
            return {
                log: [
                    preState.time,
                    ...preState.log
                ]
            };
        });
    }

    handleClearLog = () => {
        this.setState({
            log: []
        });
    }

    render() {
        const {
            time,
            isOn,
            log
        } = this.state;

        const {
            handleStartAndStop,
            handleReset,
            handleAddLog,
            handleClearLog
        } = this;

        return (
            <div className={styles.wrap}>
                <div className={styles.head}>
                    <TimeDisplay time={time} />
                </div>
                <div className={styles['operation-list']}>
                    <Button
                        text={isOn ? '结束' : '启动'}
                        type={isOn ? 'danger' : 'primary'}
                        onClick={handleStartAndStop}
                    />
                    <Button
                        text="重置"
                        onClick={handleReset}
                    />
                    <Button
                        text="记录时间"
                        onClick={handleAddLog}
                    />
                    <Button
                        text="清楚记录"
                        onClick={handleClearLog}
                    />
                </div>
                <div className={styles.list}>
                    {
                        log.map(t => <div key={t}><TimeDisplay time={t} /></div>)
                    }
                </div>
            </div>
        );
    }
}

export default Stopwatch;

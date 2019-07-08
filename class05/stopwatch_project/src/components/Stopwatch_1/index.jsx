import React from 'react';

import TimeDisplay  from './TimeDisplay';
import Button  from './Button';
import styles from './index.scss';

class Stopwatch extends React.Component {

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
            this.setState(state => {
                return {
                    time: state.time + 1
                };
            });
        }, 10);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    handleStarAndStop = () => {
        this.setState(state => {

            if (state.isOn) {
                this.stopTimer();
            } else {
                this.startTimer();
            }

            return {
                isOn: !state.isOn
            };
        });
    }

    handleReset = () => {
        this.setState({
            time: 0
        });
    }

    handleAddLog = () => {
        this.setState(state => {
            return {
                log: [
                    state.time,
                    ...state.log
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
            log,
            isOn
        } = this.state;

        const {
            handleStarAndStop,
            handleReset,
            handleAddLog,
            handleClearLog
        } = this;

        return (
            <div className={styles.wrap}>
                <div className={styles.head}>
                    <TimeDisplay />
                </div>
                <div className={styles['operation-list']}>
                    <Button
                        text={isOn ? '结束' : '启动'}
                        type={isOn ? 'danger' : 'primary'}
                        onClick={handleStarAndStop}
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
                        text="清除记录"
                        onClick={handleClearLog}
                    />
                </div>
                <div className={styles.list}>
                    {
                        log.map(t => <div key={t} ><TimeDisplay time={t} /></div>)
                    }
                </div>
            </div>
        );
    }
}

export default Stopwatch;
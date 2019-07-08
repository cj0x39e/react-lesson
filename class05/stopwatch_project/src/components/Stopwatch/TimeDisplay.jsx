import propTypes from 'prop-types';
import Utils from '../../utils';


function TimeDisplay(props) {
    const { time } = props;

    return Utils.formatTime(time);
}

TimeDisplay.propTypes = {
    // 时间戳
    time: propTypes.number.isRequired
};

export default TimeDisplay;


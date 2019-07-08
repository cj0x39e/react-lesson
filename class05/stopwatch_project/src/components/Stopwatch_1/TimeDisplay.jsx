import PropTypes from 'prop-types';

import Utils from '../../utils';

function TimeDisplay(props) {
    const { time } = props;

    return Utils.formatTime(time);
}

TimeDisplay.propTypes = {
    time: PropTypes.number.isRequired
};

export default TimeDisplay;
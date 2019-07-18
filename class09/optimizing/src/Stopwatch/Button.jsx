import React from 'react';
import propTypes from 'prop-types';
import styles from './index.scss';

function Button(props) {
    const {
        text,
        type, // primary danger
        onClick
    } = props;

    return (
        <button
            type="button"
            className={styles[`button-${type}`]}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

Button.defaultProps = {
    type: 'primary'
};

Button.propTypes = {
    text: propTypes.string,
    type: propTypes.oneOf(['primary', 'danger']),
    onClick: propTypes.func
};

export default React.memo(Button);

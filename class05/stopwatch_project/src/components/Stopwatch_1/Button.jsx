import React from 'react';
import propTyes from 'prop-types';
import styles from './index.scss';

function Button(props) {
    const {
        text,
        type,
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
    text: propTyes.string.isRequired,
    type: propTyes.oneOf(['primary', 'danger']),
    onClick: propTyes.func
};

export default Button;

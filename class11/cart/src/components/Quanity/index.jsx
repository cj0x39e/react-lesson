import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';


import './index.scss';

function Quanity(props) {

  const {
    value,
    min,
    max,
    onChange,
    className
  } = props;

  const handleReduce = () => {
    const val = value - 1;

    if (val < min) {
      return;
    }

    onChange(val);
  }

  const handleChange = (e) => {
    const val = _.toInteger(e.target.value);

    if (val < min || val > max) {
      onChange(value);
    } else {
      onChange(val);
    }
  }

  const handleAdd = () => {
    const val = value + 1;

    if (val > max) {
      return;
    }

    onChange(val);
  }

  const divClass = classNames('quanity', className);

  return (
    <div className="divClass">
      <button className="reduce" onClick={handleReduce} type="button">-</button>
      <input className="input" value={value} onChange={handleChange}></input>
      <button className="add" onClick={handleAdd} type="button">+</button>
    </div>
  );
}

Quanity.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
}

export default Quanity;



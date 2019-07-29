import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

class Checkbox extends React.Component {

  static defaultProps = {
    defaultChecked: false
  }

  static propTyes = {
    checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    onChange: PropTypes.func,
    defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
  }

  constructor (props) {
    super(props);

    const checked = 'checked' in props ? props.checked : props.defaultChecked;

    this.state = {
      checked
    }
  }

  static getDerivedStateFromProps(props) {
    if ('checked' in props) {
      return {
        checked: props.checked
      }
    }

    return null;
  }

  handleChange = (e) => {
    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked
      })
    }

    if (this.props.onChange) {
      //简单处理
      this.props.onChange(e.target.checked);
    }
  }

  render () {
    const {
      children,
      className
    } = this.props;

    const {
      checked
    } = this.state;

    const {
      handleChange
    } = this;

    const labelClass = classNames('container', className);

    return (
      <label className={labelClass}>
        <input
          type="checkbox"
          checked={!!checked}
          onChange={handleChange}
        />
        <span className="checkmark"></span>
        {children}
      </label>
    )
  }
}


export default Checkbox;

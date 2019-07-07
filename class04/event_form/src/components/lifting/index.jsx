import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 状态提升
 */

// 全部转换为小写
function LowerCase(props) {
  const { value, onChange } = props;
  return <input value={value.toLowerCase()} onChange={onChange} />;
}
LowerCase.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// 全部转换为大写
function UpperCase(props) {
  const { value, onChange } = props;
  return <input value={value.toUpperCase()} onChange={onChange} />;
}
UpperCase.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

class LiftingStateUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    const { handleChange } = this;

    return (
      <>
        <LowerCase value={text} onChange={handleChange} />
        <UpperCase value={text} onChange={handleChange} />
      </>
    );
  }
}

export default LiftingStateUp;

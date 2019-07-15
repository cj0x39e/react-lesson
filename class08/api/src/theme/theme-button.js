import React from 'react';
import { ThemeContext } from './theme-context';

class ThemeButton extends React.Component {
  render () {
    const theme = this.context;

    return (
      <button
        {...this.props}
        style={{background: theme.background}}
      >

      </button>
    )
  }
}

ThemeButton.contextType = ThemeContext;

export default ThemeButton;

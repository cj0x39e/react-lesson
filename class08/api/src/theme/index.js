import React from 'react';
import ThemeButton from './theme-button';
import { ThemeContext, themes } from './theme-context';


function Toolbar(props) {
  return (
    <ThemeButton {...props}>
      改变主颜色
    </ThemeButton>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.dark
    };
  }

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === themes.dark ? themes.light : themes.dark
      }
    })
  }

  render () {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Toolbar onClick={this.toggleTheme} />
      </ThemeContext.Provider>
    )
  }
}

export default App;

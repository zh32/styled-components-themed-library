import React, {Component} from 'react';
import * as availableThemes from "styled-components-library";
import {Button} from "styled-components-library";
import {ThemeProvider} from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: [availableThemes.theme1, availableThemes.theme2]
    }
  }

  changeTheme() {
    this.setState({
      themes: this.state.themes.reverse()
    });
  }

  render() {
    return (
        <ThemeProvider theme={this.state.themes[0]}>
          <Button onClick={() => this.changeTheme()}>Change theme</Button>
        </ThemeProvider>
    );
  }
}

export default App;

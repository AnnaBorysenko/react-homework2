import React, {Component} from 'react';
import { Button } from '@material-ui/core';

class App extends Component {
    state = {
      color: null,
      text: 'asdasd'
    }

    render() {
        const style = { background: this.state.color ?? '' }
        return (
            <div className='box' >
              <Button style={style} onClick={() => this.setState({ color: 'green' })}>Green</Button>
              <Button style={style} onClick={() => this.setState({ color: 'red' })}>Red</Button>
              <Button style={style} onClick={() => this.setState({ color: 'blue' })}>Blue</Button>
            </div>
        );
    }
}

export default App;
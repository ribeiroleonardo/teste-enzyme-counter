import React, { Component } from 'react'

class App extends Component {

  state = {
    counter: 0,
  }

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display" >The counter is currently {this.state.counter}</h1>
        <button
          data-test="increment-button"
          onClick={this.increment}>
          Increment counter
        </button>
      </div>
    )
  }
}


export default App;

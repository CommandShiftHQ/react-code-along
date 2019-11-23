import React, { Component } from 'react';
import Form from './components/form';
import List from './components/list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.name.value;
    const { names: currentState } = this.state;
    const newState = [...currentState, inputValue];

    this.setState({ names: newState });
  };

  render() {
    console.log(this.state.names);

    return (
      <>
        <h1>I am a title</h1>
        <Form handleOnSubmit={this.handleOnSubmit} />
        <br />
        <br />
        <br />
        <br />
        <List />
      </>
    );
  }
}

export default App;

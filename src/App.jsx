import React, { Component } from 'react';
import Form from './components/form';
import List from './components/list';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.name.value;
    console.log('click click', inputValue);
  };

  render() {
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

import React from 'react';
import Form from './components/form';
import List from './components/list';

const App = () => {
  const handleOnSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.name.value;
    console.log('click click', inputValue);
  };

  return (
    <>
      <h1>I am a title</h1>
      <Form handleOnSubmit={handleOnSubmit} />
      <br />
      <br />
      <br />
      <br />
      <List />
    </>
  );
};

export default App;

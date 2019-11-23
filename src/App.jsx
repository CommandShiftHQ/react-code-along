import React from 'react';

const App = () => {
  return (
    <>
      <h1>I am a title</h1>
      <form>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" />
        </label>
        <button type="submit">Click me!</button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <ul>
        <li>Name 1</li>
        <li>Name 2</li>
        <li>Name 3</li>
      </ul>
    </>
  );
};

export default App;

import React from 'react';

const Form = () => {
  return (
    <form>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" />
      </label>
      <button type="submit">Click me!</button>
    </form>
  );
};

export default Form;

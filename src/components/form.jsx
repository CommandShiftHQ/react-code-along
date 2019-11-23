import React from 'react';

const Form = props => {
  const { handleOnSubmit } = props;

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" />
      </label>
      <button type="submit">Click me!</button>
    </form>
  );
};

export default Form;

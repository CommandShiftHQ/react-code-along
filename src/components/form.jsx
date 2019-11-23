import React from 'react';

const Form = () => {
  const handleOnSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.name.value;
    console.log('click click', inputValue);
  };

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

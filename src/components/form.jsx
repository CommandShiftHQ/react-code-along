import React from 'react';
import PropTypes from 'prop-types';

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

Form.propTypes = {
  handleOnSubmit: PropTypes.func,
};

Form.defaultProps = {
  handleOnSubmit: event => {
    event.preventDefault();
    console.log('no handleOnSubmit function given');
  },
};

export default Form;

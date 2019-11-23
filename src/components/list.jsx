import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
  const { namesToDisplay } = props;

  return (
    <ul>
      {namesToDisplay.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

List.propTypes = {
  namesToDisplay: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;

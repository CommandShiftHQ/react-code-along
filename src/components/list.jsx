import React from 'react';

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

export default List;

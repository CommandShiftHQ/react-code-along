import React from 'react';

const List = props => {
  const { namesToDisplay } = props;

  return (
    <ul>
      {namesToDisplay.map(name => (
        <li>{name}</li>
      ))}
    </ul>
  );
};

export default List;

import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const { ingredient } = props;
  return (
    <li>{ingredient}</li>
  );
};

ListItem.propTypes = {
  ingredient: PropTypes.string.isRequired,
};

export default ListItem;

import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const { recipe } = this.props;
  return (
    <li></li>
  )
}

ListItem.propTypes = {
  // ingredients: PropTypes.string,
  recipe: PropTypes.isObject(PropTypes.string).isRequired,
};

export default ListItem;
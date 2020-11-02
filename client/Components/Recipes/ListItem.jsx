import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const { recipe } = props;
  return (
    <li>
      <a href={recipe.href}>{recipe.title}</a>
      <div>Ingredients list:</div>
      <div>{recipe.ingredients}</div>
    </li>
  )
}

ListItem.propTypes = {
  // ingredients: PropTypes.string,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ListItem;
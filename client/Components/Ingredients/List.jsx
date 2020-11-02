import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';

class IngredientsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsList: props.ingredients,
    };
  }

  render() {
    const { ingredients } = this.props;
    const ingrList = ingredients.map((item) => <ListItem ingredient={item} key={Math.random()} />);

    return (
      <ul>{ingrList}</ul>
    );
  }
}

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

IngredientsList.defaultProps = {
  ingredients: ['ingredients will be added here'],
};

export default IngredientsList;
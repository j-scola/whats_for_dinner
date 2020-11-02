import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

class RecipeOptions extends React.Component {
  constructor(props) {
    super(props);
    // const { recipes } = this.props;
    this.state = {
      // recipes: [],
    };
  }

  render() {
    const { recipes } = this.props;
    const list = recipes.map((recipe) => (<ListItem key={Math.random()} recipe={recipe} />));
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

RecipeOptions.propTypes = {
  // ingredients: PropTypes.string,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeOptions;

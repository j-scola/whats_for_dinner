import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from './ListItem';

const SavedList = styled.div`
  background-color: #D3D3D3;
  min-height: 50px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

`;

class RecipeOptions extends React.Component {
  constructor(props) {
    super(props);
    // const { recipes } = this.props;
    this.state = {
      savedRecipes: [],
    };
    this.saveRecipe = this.saveRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
  }

  saveRecipe(recipe) {
    const { savedRecipes } = this.state;
    savedRecipes.push(recipe);
    savedRecipes[savedRecipes.length - 1].count = 1;
    this.setState({ savedRecipes });
  }

  removeRecipe(recipe) {
    console.log(recipe);
  }

  render() {
    const { savedRecipes } = this.state;
    const { recipes } = this.props;
    const savedList = savedRecipes.map(
      (recipe) => (
        <ListItem
          key={Math.random()}
          recipe={recipe}
        />
      ),
    );
    const searchList = recipes.map(
      (recipe) => (
        <ListItem
          key={Math.random()}
          recipe={recipe}
          increment={this.saveRecipe}
          decrement={this.removeRecipe}
        />
      ),
    );
    return (
      <div>
        <SavedList>
          <ul>
            {savedList}
          </ul>
        </SavedList>
        <ul>
          {searchList}
        </ul>
      </div>
    );
  }
}

RecipeOptions.propTypes = {
  // ingredients: PropTypes.string,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeOptions;

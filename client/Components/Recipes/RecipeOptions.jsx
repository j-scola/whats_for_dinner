import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import _ from 'lodash';

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
    this.state = {
      savedRecipes: [],
    };
    this.saveRecipe = this.saveRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.getSavedRecipes = this.getSavedRecipes.bind(this);
    this.incrementVote = this.incrementVote.bind(this);
    this.decrementVote = this.decrementVote.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.getSavedRecipes();
    this.timer();
  }

  getSavedRecipes() {
    axios.get('/api/savedRecipes')
      .then((response) => {
        const recipes = _.orderBy(response.data, 'voteCount', 'desc');
        this.setState({ savedRecipes: recipes });
      })
      .catch(console.log);
  }

  timer() {
    console.log('timer');
    setTimeout(() => {
      this.getSavedRecipes();
      this.timer();
    }, 4000);
  }

  saveRecipe(recipe) {
    const upload = {
      title: recipe.title,
      href: recipe.href,
      ingredients: recipe.ingredients,
      thumbnail: recipe.thumbnail,
      voteCount: 1,
      isSaved: true,
    };
    axios.post('/api/savedRecipes', upload)
      .then(this.getSavedRecipes)
      .catch(console.log);
    const { savedRecipes } = this.state;
    savedRecipes.push(recipe);
    savedRecipes[savedRecipes.length - 1].count = 1;
    this.setState({ savedRecipes });
  }

  incrementVote(recipe) {
    axios.patch('api/savedRecipes',
      { recipe, voteCount: recipe.voteCount + 1 })
      .then(this.getSavedRecipes)
      .catch(console.log);
  }

  decrementVote(recipe) {
    if (recipe.voteCount > 1) {
      axios.patch('api/savedRecipes',
        { recipe, voteCount: recipe.voteCount - 1 })
        .then(this.getSavedRecipes)
        .catch(console.log);
    } else {
      this.removeRecipe(recipe);
    }
  }

  removeRecipe(recipe) {
    axios({
      method: 'delete',
      url: 'api/savedRecipes',
      data: { recipe },
    })
      .then(this.getSavedRecipes)
      .catch(console.log);
  }

  render() {
    const { savedRecipes } = this.state;
    const { recipes } = this.props;
    const savedList = savedRecipes.map(
      (recipe) => (
        <ListItem
          key={Math.random()}
          recipe={recipe}
          increment={this.incrementVote}
          decrement={this.decrementVote}
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
          Saved Recipes:
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

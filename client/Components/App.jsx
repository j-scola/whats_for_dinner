import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import _ from 'lodash';

import IngredientsForm from './Ingredients/Form';
import IngredientsList from './Ingredients/List';
import ClearIngredients from './Ingredients/ClearButton';
import RecipeOptions from './Recipes/RecipeOptions';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      // ingredientMode: true,
    };
    this.getIngredients = this.getIngredients.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.resetList = this.resetList.bind(this);
  }

  componentDidMount() {
    this.getIngredients();
  }

  getIngredients() {
    axios.get('/api/ingredients')
      .then((response) => {
        const ingredients = response.data.map((item) => item.name);
        this.setState({ ingredients });
      })
      .catch(console.log);
  }

  addIngredient(name) {
    const data = { name };
    axios.post('/api/ingredients', data)
      .then(this.getIngredients)
      .catch(console.log);
  }

  // add api call to remove or strikethrough ??

  resetList() {
    axios.delete('/api/ingredients/all')
      .then(this.getIngredients)
      .catch(console.log);
  }

  render() {
    const { ingredients } = this.state;
    return (
      <AppContainer>
        <div className="formPanel">
          <IngredientsForm addIngredient={this.addIngredient} />
          <IngredientsList ingredients={ingredients} />
          <ClearIngredients resetList={this.resetList} />
        </div>
        <div className="listPanel">
          <h2>Recipe Options</h2>
          <RecipeOptions ingredients={ingredients} />
        </div>

      </AppContainer>
    );
  }
}

export default App;

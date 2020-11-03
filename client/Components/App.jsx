import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import _ from 'lodash';

import IngredientsForm from './Ingredients/Form';
import IngredientsList from './Ingredients/List';
import ClearIngredients from './Ingredients/ClearButton';
import RecipeOptions from './Recipes/RecipeOptions';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
`;

const RecipeListPanel = styled.div`
  width: 40%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      recipes: [],
      editingIngredients: false,
      editTarget: '',
      // recipeMode: true,
    };
    this.getIngredients = this.getIngredients.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.resetList = this.resetList.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.timer = this.timer.bind(this);
    this.editIngredient = this.editIngredient.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
  }

  componentDidMount() {
    this.getIngredients();
    this.timer();
  }

  shouldComponentUpdate() {
    const { editingIngredients } = this.state;
    return !editingIngredients;
  }

  getIngredients() {
    axios.get('/api/ingredients')
      .then((response) => {
        const ingredients = response.data.map((item) => item.name);
        this.setState({ ingredients }, () => {
          if (response.data.length) {
            this.getRecipes();
          } else {
            this.setState({ recipes: [] });
          }
        });
      })
      .catch(console.log);
  }

  getRecipes() {
    // turns ingredients into comma,separated,string,without,spaces
    const { ingredients } = this.state;
    const stringMaker = (array) => {
      let result = '';
      _.each(array, (string) => {
        result += `${string},`;
      });
      result = result.slice(0, -1);
      return result;
    };
    const string = stringMaker(ingredients);
    axios.get(`api/recipes?i=${string}`)
      .then((response) => this.setState({ recipes: response.data }))
      .catch(console.log);
  }

  timer() {
    setTimeout(() => {
      const { editingIngredients } = this.state;
      if (!editingIngredients) {
        this.getIngredients();
      }
      this.timer();
    }, 8000);
  }

  handleEditing(bool, ingredient) {
    this.setState({
      editingIngredients: bool,
      editTarget: (bool ? ingredient : ''),
    }, this.getIngredients);
  }

  addIngredient(name) {
    const data = { name };
    axios.post('/api/ingredients', data)
      .then(this.getIngredients)
      .catch(console.log);
  }

  removeIngredient(name) {
    axios({
      method: 'delete',
      url: '/api/ingredients',
      data: { name },
    })
      .then(this.getIngredients)
      .catch(console.log);
  }

  editIngredient(queryName, update) {
    axios({
      method: 'patch',
      url: '/api/ingredients',
      data: { queryName, update },
    })
      .then(this.getIngredients)
      .catch(console.log);
  }

  resetList() {
    axios.delete('/api/ingredients/all')
      .then(this.getIngredients)
      .catch(console.log);
  }

  render() {
    const {
      ingredients, recipes, editingIngredients, editTarget,
    } = this.state;
    return (
      <AppContainer>
        <div className="formPanel">
          <IngredientsForm addIngredient={this.addIngredient} />
          <IngredientsList
            ingredients={ingredients}
            remove={this.removeIngredient}
            edit={this.editIngredient}
            handleEditing={this.handleEditing}
            editing={editingIngredients}
            editTarget={editTarget}
          />
          <ClearIngredients resetList={this.resetList} />
        </div>
        <RecipeListPanel>
          <h2>Recipe Options</h2>
          <RecipeOptions recipes={recipes} />
        </RecipeListPanel>

      </AppContainer>
    );
  }
}

export default App;

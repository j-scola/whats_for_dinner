import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import _ from 'lodash';

import IngredientsForm from './IngredientsForm.jsx'
import IngredientsList from './IngredientList.jsx'

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };
    this.getIngredients = this.getIngredients.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }

  logErr(err) { console.log(err) }

  getIngredients() {
    axios.get('/api/ingredients')
      .then((data) => {
        const ingredients = [];
        _.each(data, (item) => {
          ingredients.push(item.name);
        });
        this.setState({ ingredients });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addIngredient(name) {
    const data = { name };
    axios.post('/api/ingredients', data)
      .then(this.getIngredients);
      .cat
  }

  render() {
    return (
      <AppContainer>
        <div className="formPanel">
          <IngredientsForm ingredients={this.state.ingredients} />
        </div>
        <div className="listPanel">
          <h2>{'<dinner options show here>'}</h2>
        </div>

      </AppContainer>
    );
  }

  componentDidMount() {
    this.getIngredients();
  }
}

export default App;

import React, { Component } from 'react';

class IngredientsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enterIngredient: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ enterIngredient: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { enterIngredient } = this.state;
    this.props.addIngredient(enterIngredient);
  }

  render() {
    const { enterIngredient } = this.state;
    return (
      <div>
        <h2>Ingredients</h2>
        <form>
          <label htmlFor="enterIngredient">
            Ingredient:
            <input id="enterIngredient" type="text" name="name" value={enterIngredient} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default IngredientsForm;

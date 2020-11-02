import React from 'react';
import PropTypes from 'prop-types';

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
    const { addIngredient } = this.props;
    addIngredient(enterIngredient);
    this.setState({ enterIngredient: '' });
  }

  render() {
    const { enterIngredient } = this.state;
    return (
      <div>
        <h2>Ingredients List</h2>
        <form onSubmit={this.handleSubmit}>
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

IngredientsForm.propTypes = {
  // ingredients: PropTypes.string,
  addIngredient: PropTypes.func.isRequired,
};

IngredientsForm.defaultProps = {
  // enterIngredient: ['ingredients will be added here'],
};

export default IngredientsForm;

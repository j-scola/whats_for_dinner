import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';

class IngredientsList extends React.Component {
  constructor(props) {
    super(props);
    const { ingredients, editing } = this.props;
    this.state = {
      ingredientsList: ingredients,
    };
  }

  shouldComponentUpdate() {
    const { editing } = this.props;
    return !editing;
  }

  render() {
    const {
      ingredients, edit, remove, handleEditing, editing, editTarget,
    } = this.props;
    if (ingredients.length === 0) {
      return (
        <div>
          <p>
            ingredients will be added here...
          </p>
          <br />
        </div>
      );
    }
    const ingrList = ingredients.map((item) => (
      <ListItem
        ingredient={item}
        key={Math.random()}
        edit={edit}
        remove={remove}
        handleEditing={handleEditing}
        editing={editing}
        editTarget={editTarget}
      />
    ));
    return (
      <ul>{ingrList}</ul>
    );
  }
}

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  editTarget: PropTypes.string.isRequired,
};

export default IngredientsList;

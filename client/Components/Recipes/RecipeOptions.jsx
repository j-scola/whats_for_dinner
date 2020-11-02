import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import DummyData from '../../dummydata';

class RecipeOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    // const { ingredients } = this.props;
    // axios.get('/api/recipes', {
    //   params: {
    //     ingredients: JSON.stringify(ingredients),
    //   },
    // })
    //   .then()
    //   .catch();

    this.setState({ recipes: DummyData });
  }

  render() {
    const { recipes } = this.state;
    const list = recipes.map((recipe) => (<li key={Math.random()}>{recipe.title}</li>));
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

// RecipeOptions.propTypes = {
//   // ingredients: PropTypes.string,
//   ingredients: PropTypes.isArray(PropTypes.string).isRequired,
// };

export default RecipeOptions;

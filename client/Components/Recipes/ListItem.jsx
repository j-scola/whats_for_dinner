import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Voter from './Voter';

const Wrapper = styled.li`
  display: flex;
  justify-content: left;
  marin-top: 8px;
  margin-bottom: 8px;
`;

const VoterWrap = styled.div`
  margin-right: 5px;
`;

const RecipeWrap = styled.div`
  margin-right: 5px;
`;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  decrement() {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  render() {
    const { recipe, increment, decrement } = this.props;
    const { count } = this.state;
    return (
      <Wrapper>
        <VoterWrap>
          <Voter
            increment={increment || this.increment}
            decrement={decrement || this.decrement}
            recipe={recipe}
            count={count}
          />
        </VoterWrap>
        <RecipeWrap>
          <a href={recipe.href}>{recipe.title}</a>
          <div>Ingredients list:</div>
          <div>{recipe.ingredients}</div>
        </RecipeWrap>
      </Wrapper>
    );
  }
}

ListItem.propTypes = {
  // ingredients: PropTypes.string,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

ListItem.defaultProps = {
};

export default ListItem;

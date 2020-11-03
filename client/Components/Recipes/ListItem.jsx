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
    const { recipe } = this.props;
    this.state = {
      count: recipe.voteCount,
    };
  }

  render() {
    const { recipe, increment, decrement } = this.props;
    const { count } = this.state;
    return (
      <Wrapper>
        <VoterWrap>
          <Voter
            increment={() => increment(recipe)}
            decrement={() => decrement(recipe)}
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
  recipe: PropTypes.shape({
    title: PropTypes.string,
    voteCount: PropTypes.number,
  }).isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default ListItem;

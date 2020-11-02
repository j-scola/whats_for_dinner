import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ClearIngredients = (props) => {
  const { resetList } = props;
  return (
    <button onClick={resetList} type="button">Clear Ingredients</button>
  );
};

ClearIngredients.propTypes = {
  resetList: PropTypes.func.isRequired,
};

export default ClearIngredients;

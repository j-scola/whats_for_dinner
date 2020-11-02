import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  text-align: center;

`;

const Count = styled.div`
  text-align: center
`;

const UpArrow = styled.button`
`;

const DownArrow = styled.button`
`;

const Voter = ({
  count, increment, decrement, recipe,
}) => (
  <Box>
    <UpArrow onClick={() => increment(recipe)} type="button" className="increment"> /\ </UpArrow>
    <Count>{count}</Count>
    <DownArrow onClick={(e) => decrement(e)} type="button" className="decrement"> \/ </DownArrow>
  </Box>
);

Voter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

Voter.defaultProps = {
  count: 0,
};

export default Voter;

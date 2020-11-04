import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  align-items: center;
`;

const Change = styled.button`
  display: inline-block;
  background-color: grey;
  border-radius: 10px;
  color: #eeeeee;
  text-align: center;
  font-size: 12px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
  margin-left: 10px;
  margin: 5px;
`;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    const { ingredient } = props;
    this.state = {
      text: ingredient,
    };
    // this.swapMode = this.swapMode.bind(this);
    this.type = this.type.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const { editing } = this.state;
    if (editing) {
      console.log('editing');
    }
  }

  shouldComponentUpdate() {
    const { editing } = this.state;
    return !editing;
  }

  type(e) {
    this.setState({ text: e.target.value });
  }

  update(e) {
    e.preventDefault();
    const {
      edit, ingredient, editing, handleEditing,
    } = this.props;
    console.log(e.target.value);
    edit({ name: ingredient }, { name: ingredient }, handleEditing(!editing, ingredient));
  }

  render() {
    const {
      ingredient, remove, editing, editTarget, handleEditing,
    } = this.props;
    const { text } = this.state;
    if (editTarget === ingredient && editing) {
      return (
        <form onSubmit={this.update}>
          <input value={text} onChange={this.type} />
          <input type="submit" value="Save" />
          <input type="button" value="Cancel" onClick={() => handleEditing(false)} />
        </form>
      );
    }
    return (
      <Item>
        <div>{ingredient}</div>
        <div>
          <Change type="button" className="updateIngredient" onClick={() => handleEditing(!editing, ingredient)}>edit</Change>
          <Change type="button" className="removeIngredient" onClick={() => remove(ingredient)}>remove</Change>
        </div>
      </Item>
    );
  }
}

ListItem.propTypes = {
  ingredient: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  editTarget: PropTypes.string.isRequired,
};

export default ListItem;

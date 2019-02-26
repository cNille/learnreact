import React, { Component } from 'react';
import Item from './Item';

class List extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      newTodo: '',
    }
  }

  // Handle textchange in text-input-field.
  handleTextChange = (event) => {
    const newValue = { newTodo: event.target.value }
    this.setState(newValue);
  }

  // Handle toggling of checkboxes when pressed.
  toggleCheckBox = (idx) => {
    const { moveToDone } = this.props;
    moveToDone(idx)
  }

  render() {
    // Using deconstructing to getting variables from state-object.
    const { newTodo } = this.state;
    const { items, name, isDoneList, addTodo, toggleCheckBox} = this.props;

    // Create JSX list of the items
    const list = items.map(item => {
      return (
        <Item
          key={`${item.key}`}
          item={item}
          onPress={() => toggleCheckBox(item.key)}
        />
      );
    })

    return (
      <div>
        <h1>{ name }</h1>
        {list}
        { !isDoneList && (
          <div>
            <input
              type="text"
              value={newTodo}
              onChange={this.handleTextChange} autoFocus
            />
            <button onClick={() => addTodo(newTodo)}> Add ToDo </button>
          </div>
        ) }
      </div>
    );
  }
}

export default List;

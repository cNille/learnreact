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
    const { items } = this.state;
    items[idx].done = !items[idx].done;
    this.setState({ items })
  }

  // Add a todo to the items-list and reset the newTodo-string
  addTodo = () => {
    const { newTodo, items} = this.state

    // Validate that newTodo exists
    if(!newTodo){
      return
    }

    // Add new item to the list
    items.push({
      name: newTodo,
      done: false,
    })

    // Reset newTodo-string, and update the items list.
    this.setState({ newTodo: '', items })
  }

  render() {
    // Using deconstructing to getting variables from state-object.
    const { items,  newTodo } = this.state;
    const { name } = this.props;

    // Create JSX list of the items
    const list = items.map((item, idx) => {
      return (
        <Item
          key={`${idx}`}
          item={item}
          onPress={() => this.toggleCheckBox(idx)}
        />
      );
    })

    return (
      <div>
        <h1>{ name }</h1>
        {list}
        <hr />
        <input
          type="text"
          value={newTodo}
          onChange={this.handleTextChange} autoFocus
        />
        <button onClick={this.addTodo}> Add ToDo </button>
      </div>
    );
  }
}

export default List;

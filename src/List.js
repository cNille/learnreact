import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { toggleItem, addTodo } from "./actions";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
    };
  }

  // Handle textchange in text-input-field.
  handleTextChange = (event) => {
    const newValue = { newTodo: event.target.value };
    this.setState(newValue);
  };

  render() {
    // Using deconstructing to getting variables from state-object.
    const { newTodo } = this.state;
    const { items, name, isDoneList, addTodo, toggleItem } = this.props;

    // Create JSX list of the items
    const list = items.map((item) => {
      return (
        <Item
          key={`${item.key}`}
          item={item}
          onPress={() => toggleItem(item.key)}
        />
      );
    });

    return (
      <div>
        <h1>{name}</h1>
        {list}
        {!isDoneList && (
          <div>
            <input
              type="text"
              value={newTodo}
              onChange={this.handleTextChange}
              autoFocus
            />
            <button onClick={() => addTodo(newTodo)}> Add ToDo </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleItem: (idx) => dispatch(toggleItem(idx)),
    addTodo: (name) => {
      dispatch(addTodo(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

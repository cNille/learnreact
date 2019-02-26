import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";
import "./App.css";

class App extends Component {
  render() {
    const { doneItems, todoItems } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <p className="App-logo">🧐</p>
          <List name="My Todo List" items={todoItems} />
          <List name="Done List" isDoneList items={doneItems} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { items } = state;
  const doneItems = items.filter((i) => i.done);
  const todoItems = items.filter((i) => !i.done);

  return {
    items,
    doneItems,
    todoItems,
    doneCount: doneItems.length, // For forcing redux update
    todoCount: todoItems.length, // Redux only checks shallow comparison
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  addTodo = (name) => {
    const { items } = this.state;
    const newItem = {
      name,
      done: false,
      key: items.length,
    };
    items.push(newItem);
    this.setState({ items });
  };

  toggleCheckBox = (idx) => {
    const { items } = this.state;
    const item = items[idx];
    items[idx].done = !items[idx].done;
    this.setState({
      items,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <List name="My Todo List" />
          <List name="Done Todos" />
        </header>
      </div>
    );
  }
}

export default App;

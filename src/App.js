import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: []
    }
  }

  addTodo = (name) => {
    const { items } = this.state;
    const newItem = {
      name,
      done: false,
      key: items.length
    }
    items.push(newItem)
    this.setState({ items });
  }

  toggleCheckBox = (idx) => {
    const { items } = this.state;
    const item = items[idx];
    items[idx].done = !items[idx].done;
    this.setState({
      items
    })
  }
  render() {
    const { items } = this.state;

    const doneItems = items.filter(i => i.done)
    const todoItems = items.filter(i => !i.done)

    return (
      <div className="App">
        <header className="App-header">
          <p className="App-logo">🧐</p>
          <List
            name="My Todo List"
            moveToDone={this.moveToDone}
            addTodo={this.addTodo}
            items={todoItems}
            toggleCheckBox={this.toggleCheckBox}
          />
          <List
            name="Done List"
            moveToTodo={this.moveToTodo}
            isDoneList
            items={doneItems}
            toggleCheckBox={this.toggleCheckBox}
          />
        </header>
      </div>
    );
  }
}

export default App;

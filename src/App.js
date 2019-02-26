import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-logo">🧐</p>
          <List name="My Todo List" />
          <List name="Done Todos" />
        </header>
      </div>
    );
  }
}

export default App;

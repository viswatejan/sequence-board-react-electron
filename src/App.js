import React, { Component } from 'react';
import Board from './components/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <p className="title">SEQUENCE</p>
        </div>
        <div className="boardContainer">
          <Board></Board>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Board from './components/Board';
import './App.css';
import store from './core/sequenceStore';

class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState())
    });
  }

  render() {
    return (
      <div className="boardContainer">
        <Board cardsSequence={this.state.cardsSequence} player={this.state.player}></Board>
      </div>
    );
  }
}

export default App;

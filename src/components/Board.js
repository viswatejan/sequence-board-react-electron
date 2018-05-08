import React from 'react';
import Card from './Card';
import store from '../core/sequenceStore';
import  { changePlayer } from '../core/Actions';

export default class Board extends React.Component {
    
    componentDidMount() {
        document.addEventListener('contextmenu', (event) => event.preventDefault());
    }

    _playerChangedManually = () => {
        store.dispatch(changePlayer());
    }

    render() {
        let cards = this.props.cardsSequence.map((row) => 
        row.map((card) => <Card key={card.id} card={card}></Card>));

        return (
            <div className="board">
                <div className="header">
                    <p className="title">SEQUENCE</p>
                </div>
                {cards}
                <div className="playerStatus">
                    <img className="chip" src={'../assets/images/chips/' + this.props.player + '.png'} alt={this.props.player} onClick={this._playerChangedManually}/>
                </div>
            </div>
        );
    }
}

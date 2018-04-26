import React from 'react';
import Row from './Row';
import CardModel from '../core/CardModel';

const sequence = [
    ['BACK', '6D', '7D', '8D', '9D', '10D', 'QD', 'KD', 'AD', 'BACK'],
    ['5D', '3H', '2H', '2S', '3S', '4S', '5S', '6S', '7S', 'AS'],
    ['4D', '4H', 'KD', 'AD', 'AC', 'KC', 'QC', '10C', '8S', 'KC'],
    ['3D', '5H', 'QD', 'QH', '10H', '9H', '8H', '9C', '9S', 'QC'],
    ['2D', '6H', '10D', 'KH', '3H', '2H', '7H', '8C', '10S', '10C'],
    ['AS', '7H', '9D', 'AH', '4H', '5H', '6H', '7C', 'QS', '9C'],
    ['KS', '8H', '8D', '2C', '3C', '4C', '5C', '6C', 'KS', '8C'],
    ['QS', '9H', '7D', '6D', '5D', '4D', '3D', '2D', 'AS', '7C'],
    ['10S', '10H', 'QH', 'KH', 'AH', '2C', '3C', '4C', '5C', '6C'],
    ['BACK', '9S', '8S', '7S', '6S', '5S', '4S', '3S', '2S', 'BACK']
];

const players = ['BLUE', 'GREEN'];

export default class Board extends React.Component {
    cardsSequence = null;

    currentPlayer = 0;

    constructor(props) {
        super(props);
        this.state = {
            player: 'BLUE'
        };
    }

    getNextPlayer() {
        this.changePlayer();
        return players[this.currentPlayer];
    }

    _playerChanged = (manual) => {
        let newState = {
            player: this.getNextPlayer()
        };
        this.setState(newState);
    };

    _playerChangedManually = () => {
        this._playerChanged(true);
    }

    changePlayer() {
        this.currentPlayer = Math.abs(this.currentPlayer - 1);
    }

    initCardSequence() {
        this.cardsSequence = [];
        let rowArray = [];
        sequence.forEach((row, i) => {
            rowArray = [];
            row.forEach((card, j) => {
                rowArray.push(new CardModel(i + j, card, null));
            });
            this.cardsSequence.push(rowArray);
        })
    }

    render() {
        if (!this.cardsSequence) {
            this.initCardSequence();
        }

        let rows = this.cardsSequence.map((row) => <Row key={row[0].id} cards={row} player={this.state.player} playerChanged={this._playerChanged} ></Row>);

        return (
            <div className="board">
                {rows}
                <div className="playerStatus">
                    <img className="chip" src={'../assets/images/chips/' + this.state.player + '.png'} alt={this.state.player} onClick={this._playerChangedManually}/>
                </div>
            </div>
        );
    }
}

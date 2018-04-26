import React from 'react';
import Card from './Card';

export default class Row extends React.Component {

    _playerChanged = () => {
        this.props.playerChanged();
    };

    render() {
        let cards = this.props.cards.map((card) => <Card key={card.id} card={card} player={this.props.player} playerChanged={this._playerChanged}></Card>);
        return (
            <div className="row">
                {cards}
            </div>
        )
    }
}
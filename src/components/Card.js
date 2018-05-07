import React from 'react';
import store from '../core/sequenceStore';
import  { placeChip, removeChip } from '../core/Actions';

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this._onCardPress = this._onCardPress.bind(this);
        this._onCardLongPress = this._onCardLongPress.bind(this);
    }

    _onCardPress() {
        if(this.props.card && this.props.card.type !== 'BACK' && !this.props.card.player){
            store.dispatch(placeChip(this.props.card));
        }
    }

    _onCardLongPress() {
        if(this.props.card && this.props.card.type !== 'BACK' && this.props.card.player){
            store.dispatch(removeChip(this.props.card));
        }
    }

    render() {
        let _chip = null;
        let _card = null;

        if (this.props.card) {
            if (this.props.card.player) {
                _chip = (<img className="chipOnCard" src={'../assets/images/chips/' + this.props.card.player + '.png'} alt={this.props.card.player}/>);
            }
            _card = (<img className="card" src={'../assets/images/cards/' + this.props.card.type + '.png'} alt={this.props.card.type} onClick={this._onCardPress}/>);
        }
        return (
            <div className="cardHolder">
                {_card}
                {_chip}
            </div>
        );
    }
}
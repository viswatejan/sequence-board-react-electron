import React from 'react';
import store from '../core/sequenceStore';
import  { placeChip, removeChip } from '../core/Actions';

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.onCardPressDown = this.onCardPressDown.bind(this);
        this.onCardRelease = this.onCardRelease.bind(this);
        this._onCardPress = this._onCardPress.bind(this);
        this._onCardLongPress = this._onCardLongPress.bind(this);
      }

      onCardPressDown () {
        this.cardPressTimer = setTimeout(this._onCardLongPress, 1000);
      }
    
      onCardRelease () {
        clearTimeout(this.cardPressTimer);
        if(!this._longPressed){
            this._onCardPress();
        }
        this._longPressed = false;
      }

    _onCardPress() {
        if(this.props.card && this.props.card.type !== 'BACK' && !this.props.card.player){
            store.dispatch(placeChip(this.props.card));
        }
    }

    _onCardLongPress() {
        this._longPressed = true;
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
            _card = (<img className="card" src={'../assets/images/cards/' + this.props.card.type + '.png'} alt={this.props.card.type} />);
        }
        
        return (
            <div className="cardHolder" onTouchStart={this.onCardPressDown} onTouchEnd={this.onCardRelease} onMouseDown={this.onCardPressDown} onMouseUp={this.onCardRelease}>
                {_card}
                {_chip}
            </div>
        );
    }
}
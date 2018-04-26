import React from 'react';

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            card: null
        };
        this._onCardPress = this._onCardPress.bind(this);
        this._onCardLongPress = this._onCardLongPress.bind(this);
    }

    componentDidMount() {
        const { card } = this.props;
        this.setState({ card });
    }

    toggleChip(remove) {
        if (this.state.card.type === 'BACK') {
            return;
        }
        if (this.state.card.player && !remove) {
            return;
        }
        let { card } = this.state;
        card.player = remove ? null : this.props.player;
        this.setState({ card });
        this.props.playerChanged();
    }

    _onCardPress() {
        if(this.state.card && !this.state.card.player){
            this.toggleChip();
        }
    }

    _onCardLongPress() {
        if(this.state.card && this.state.card.player){
            this.toggleChip(true);
        }
    }

    render() {
        let _chip = null;
        let _card = null;

        if (this.state.card) {
            if (this.state.card.player) {
                _chip = (<img className="chipOnCard" src={'../assets/images/chips/' + this.state.card.player + '.png'} alt={this.state.card.player}/>);
            }
            _card = (<img className="card" src={'../assets/images/cards/' + this.state.card.type + '.png'} alt={this.state.card.type} onClick={this._onCardPress}/>);
        }
        return (
            <div className="cardHolder">
                {_card}
                {_chip}
            </div>
        );
    }
}
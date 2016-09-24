import React, { Component } from 'react';

class TwitchPlayer extends Component {

    componentDidMount() {
    	console.log('props', this.props);
    	let { style } = this.props;
        let container = document.getElementById(this.props.info.name)
    

        let options = {
            height: '100%',
            width: '100%',
            channel: this.props.info.stream
        };
        console.log(this.props.style.height)
        let player = new Twitch.Player(this.props.info.name, options);
        player.setVolume(0.5);
        player.addEventListener(Twitch.Player.PAUSE, () => { console.log('Player is paused!'); });
    }

    render() {
        let { style } = this.props;
        return ( 
        	<div style={style}
            	id={ this.props.info.name }
            />
        );
    }
}

export default TwitchPlayer

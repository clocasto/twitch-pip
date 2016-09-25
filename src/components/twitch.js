import React, { Component } from 'react';
import Draggable from 'react-draggable'

class TwitchPlayer extends Component {
    componentDidMount() {

        let { info } = this.props;

        let options = {
            height: '100%',
            width: '100%',
            channel: info.stream
        };

        let player = new Twitch.Player(info.name, options);
        
        player.setVolume(0.5);
        // player.addEventListener(Twitch.Player.PAUSE, () => { console.log('Player is paused!'); });
    }

    render() {

        let { style } = this.props;
        let { info } = this.props;
        let enabler = style.zIndex > 0 ? true : false;
        let reset = function() {
            let shield = document.getElementById('shield');
            shield.style.setProperty('height', '0%');
            shield.style.setProperty('width', '0%');
        }
        let resize = function() {
            let shield = document.getElementById('shield');
            shield.style.setProperty('height', '100%');
            shield.style.setProperty('width', '100%');
            console.log('shield', shield);
        }


        return ( 
            <Draggable bounds="parent" disabled={ !enabler }>
                <div style={ style } id={ info.name } className={enabler ? "pip" : null}>
                {enabler && <div id="shield" onMouseUp={reset}></div>}
                <div onMouseDown={resize} onMouseUp={reset} className={enabler ? "corner" : null}></div>
                </div>
            </Draggable>
        );
    }
}

export default TwitchPlayer

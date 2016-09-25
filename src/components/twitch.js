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
        
        let drag = function(event) {
            let size = event.type === 'mousedown' ? '100%' : '0%';
            let shield = document.getElementById('shield');
            shield.style.setProperty('height', size);
            shield.style.setProperty('width', size);
        }

        let resize = function(){}

        // $(document).mousemove(function(event) {
        // var startingTop = 10,
        // startingLeft = 22,
        // math = Math.round(Math.sqrt(Math.pow(startingTop - event.clientY, 2) +
        //     Math.pow(startingLeft - event.clientX, 2))) + 'px';
        // $('span').text('From your starting point(22x10) you moved:   ' + math);
        // });



        return ( 
            <Draggable bounds="parent" disabled={ !enabler }>

                <div style={ style } id={ info.name } className={enabler ? "pip" : "base"}>
                
                    {enabler && <div id="shield" onMouseUp={drag}></div>}
                
                    <div onMouseDown={drag} onMouseUp={drag} className={enabler ? "drag" : null}>
                    </div>

                    {enabler && <div onMouseMove={resize} className={enabler ? "resizer" : null}></div>}

                </div>

            </Draggable>
        );
    }
}

export default TwitchPlayer

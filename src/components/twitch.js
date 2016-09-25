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
        player.addEventListener(Twitch.Player.PAUSE, () => { console.log('Player is paused!'); });
    }

    render() {

        let { style } = this.props;
        let { info } = this.props;
        let { pip } = this.props;
        let dragPip = this.props.dragPip;
        let resizePip = this.props.resizePip;
        let toggleResize = this.props.toggleResize;
        let swapPositions = this.props.swapPositions;

        let enabler = style.enabled ? true : false;

        return (
            <Draggable cancel=".resizer" bounds="parent" disabled={ pip.disabled || !enabler }>

                <div style={ style } id={ info.name } className={enabler ? "pip" : "base"}>


                    <div onMouseDown={dragPip.bind(null)} onMouseUp={dragPip.bind(null)} className={enabler ? "drag" : null}>
                    </div>
                    
                    {enabler && <div className="shield" style={pip.shield} onMouseUp={dragPip.bind(null)}></div>}

                    {enabler && <div className="resizer" onMouseDown={toggleResize.bind(null)}></div>}

                    {enabler && <div className="swapper" onClick={swapPositions.bind(null)}></div>}

                </div>

            </Draggable>
        );
    }
}

export default TwitchPlayer

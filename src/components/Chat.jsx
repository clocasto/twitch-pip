import React, {Component} from 'react'

class Chat extends Component {

	componentDidMount() {

		let {size} = this.props.chat;
		let container = document.getElementById("chatbox");
		let newWidth = container.clientWidth;
		let newHeight = container.clientHeight;

		if (newWidth === size.width) return;
		this.props.resizeChat(newHeight, newWidth);

	}

  	render(){
  	let {size} = this.props.chat;
  	let app = this.props.app;
  	let activeChat = app.length ? app.find(player => player.size === 'base').source : null;

      return (
      		<div id="chatbox" className="col-md-3 col-lg-3">
	      		{!!this.props.app.length && <iframe frameBorder="0" 
			        scrolling="no" 
			        id="chat_embed" 
			        src={activeChat}
			        height={size.height}
			        width={size.width}>
			    </iframe>}
		    </div>
    	)
  	}
}

export default Chat

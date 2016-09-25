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

      return (
      	<iframe frameBorder="0" 
	        scrolling="no" 
	        id="chat_embed" 
	        src={this.props.chat.source}
	        height={size.height}
	        width={size.width}>
		    </iframe>
    	)
  	}
}

export default Chat

import React from 'react';
import ChatMessage from './ChatMessage';
import './ChatStream.css';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream(props) {
  return (
    <div className="chat-stream">
      {props.messages.map(message => (
        <ChatMessage
          messageType={message.user === props.currentUser ? 'sent' : 'received'}
          message={message} />
      ))}
    </div>
  );
}

export default ChatStream;

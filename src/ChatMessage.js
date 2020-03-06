import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
 return <div className="chat-message">
  <div className="username">{props.message.user.username}</div>
   <img src={props.message.user.avatar} alt="what up dog" className="avatar" />
   <div className="message">{props.message.body}</div>
 </div>;

 /*
   if (props.messageType === 'sent') {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
 */
}

export default ChatMessage;
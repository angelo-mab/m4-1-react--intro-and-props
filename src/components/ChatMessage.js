import React from 'react';

import './ChatMessage.css';
import Avatar from './Avatar';

function SentMessage(props) {
  return (
    <div className="chat-message-wrapper sent">
      <div className='chat-message'>
        {props.message.body}
      </div>
    </div>

  );
}

function ReceivedMessage(props) {
  return (
    <div>
      <Avatar size={36} user={props.message.user} />
      <div className="name-ange-message">
        <div className="author">{props.message.user.username}</div>
        <div className="chat-message">
          {props.message.body}
        </div>
      </div>
    </div>
  );
}


function ChatMessage(props) {
  if (props.messageType === 'sent') {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
}

export default ChatMessage;
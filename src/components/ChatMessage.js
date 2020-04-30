import React from 'react';

import './ChatMessage.css';
import Avatar from './Avatar';

const bubbleTipSentSrc = '/asset/tip-sent.svg';
const bubbleTipReceivedSrc = '/asset/tip-received.svg';

function SentMessage(props) {
  return (
    <div className="chat-message-wrapper sent">
      <div className='chat-message'>
        {props.message.body}
        <img
          alt=""
          role='presentation'
          className="tip"
          src={bubbleTipSentSrc}
        />
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
          <img
            alt=""
            role='presentation'
            className="tip"
            src={bubbleTipReceivedSrc}
          />
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
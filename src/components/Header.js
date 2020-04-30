import React from "react";
import Avatar from './Avatar';
import "./Header.css";

function Header(props) {
  return (
    <header>
      {props.participants
        .filter(participants => participants !== props.currentUser)
        .map(participant => (
          <div className="participant">
            <Avatar size={48} user={participant} />
            <div className="username">{participant.username}</div>
          </div>
        ))}
    </header>
  );
}

export default Header;

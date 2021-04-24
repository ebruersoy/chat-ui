import React from "react";

const Message = ({ message, currentUser }) => {
  const { sender, content, color, createdAt } = message;
  const messageFromMe = currentUser.username === message.sender;
  const className = messageFromMe
    ? "message-list-item currentUser"
    : "message-list-item";
  const createdDateTime = new Date(createdAt).toLocaleString();
  return (
    <li className={className}>
      <span className="avatar" style={{ backgroundColor: color }} />
      <div className="Message-content">
        <div className="username">{messageFromMe ? "you" : sender}</div>
        <div className="text">{content}</div>
        <div className="username">{createdDateTime}</div>
      </div>
    </li>
  );
};

export default Message;

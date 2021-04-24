import React, { useEffect, useRef } from "react";
import Message from "./Message";

const Messages = ({ messages, currentUser }) => {
  let i = 0;
  let messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <ul className="messages-list">
      {messages.map((msg) => {
        return <Message key={i++} currentUser={currentUser} message={msg} />;
      })}
      <div ref={messagesEndRef} />
    </ul>
  );
};

export default Messages;

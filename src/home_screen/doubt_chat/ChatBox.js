// ChatBox.js

import React from 'react';

const ChatBox = ({ messages }) => {
  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;

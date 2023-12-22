// ChatPage.js

import React, { useState } from 'react';
import ChatBox from './ChatBox';
import "./ChatPage.css"

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'user' },
    { text: 'Hi there!', sender: 'bot' },
    // Add more predefined messages as needed
  ]);

  const handleSendMessage = (text) => {
    // Simulate sending a message
    setMessages([...messages, { text, sender: 'user' }]);
    // You can implement actual message sending logic here
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-header">Chat</div>
        <ChatBox messages={messages} />
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

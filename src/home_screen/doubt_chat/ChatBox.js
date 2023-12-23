// ChatBox.js
import './ChatPage.css';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ChatBox = ({ messages }) => {
  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          
          <SyntaxHighlighter language="javascript" style={docco}>
     {message.text}
    </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;

// DoubtCard.js
import React, { useState } from 'react';
import './DoubtCard.css'; // Import the DoubtCard.css file

const DoubtCard = ({ avatar, title, code, questionLink }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="doubt-card">
      <div className="avatar-container">
        <img src={avatar} alt="User Avatar" className="avatar" />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        {showDetails && (
          <div className="details">
            <p><strong>Question Link:</strong> {questionLink}</p>
            <p><strong>Code:</strong> </p>
            <p><code>{code}</code></p>
            
          </div>
        )}
        {/* <button onClick={handleToggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button> */}
      </div>
    </div>
  );
};

export default DoubtCard;

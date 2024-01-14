// AddDoubtModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import "./AddDoubtModal.css"

Modal.setAppElement('#root'); // Set the root element for accessibility

const AddDoubtModal = ({ isOpen, onRequestClose, onAddDoubt }) => {
  const [questionLink, setQuestionLink] = useState('');
  const [question, setQuestion] = useState('');
  const [code, setCode] = useState('');

  const handleAddDoubt = () => {
    // Perform any validation before adding the doubt
    // You can send this data to your backend or handle it as needed
    onAddDoubt({
      questionLink,
      question,
      code,
    });

    // Reset the form and close the modal
    setQuestionLink('');
    setQuestion('');
    setCode('');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Doubt Modal"
    >
      <h2>Add Doubt</h2>
      <label>
        Question Link:
        <input
          type="text"
          value={questionLink}
          onChange={(e) => setQuestionLink(e.target.value)}
        />
      </label>
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <label>
        Code:
        <textarea
          rows="10"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </label>
      <div className="button-container">
        <button onClick={handleAddDoubt}>Cancel</button>
        <button onClick={onRequestClose}>Add Doubt</button>
        
      </div>
    </Modal>
  );
};

export default AddDoubtModal;

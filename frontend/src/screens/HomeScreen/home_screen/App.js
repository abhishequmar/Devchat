import React, { useState } from 'react';
import CustomNavbar from './Navbar';
import DoubtCard from './DoubtCard';
import AddDoubtModal from './AddDoubtModal';
import ChatPage from './doubt_chat/ChatPage';

import './App.css'; // Import the CSS file
import './DoubtCardContainer.css';  
//dummy
const HomeScreen = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddDoubt = (doubtData) => {
    // Handle adding doubt logic here
    console.log('Adding doubt:', doubtData);
  };
  // Sample doubts data
   const doubts = [
    {
      avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URL
      title: 'How to use React Hooks?',
      code: `<div className="details">
                <p><strong>Question Link:</strong> {questionLink}</p>
                <p><strong>Code:</strong> </p>
            <p><code>{code}</code></p>
            
          </div>`,
      questionLink: 'https://example.com/react-hooks-question',
    },
    {
      avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URL
      title: 'Firebase Authentication in React',
      code: '// Firebase authentication code here',
      questionLink: 'https://example.com/firebase-authentication-question',
    },
    {
      avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URL
      title: 'Responsive Design in CSS',
      code: '/* Responsive design code here */',
      questionLink: 'https://example.com/responsive-design-question',
    },
    {
      avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URL
      title: 'Python vs JavaScript for Web Development',
      code: '',
      questionLink: 'https://example.com/python-vs-javascript-question',
    },
    {
      avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URL
      title: 'How to deploy a React app?',
      code: '// Deployment script or instructions',
      questionLink: 'https://example.com/react-deployment-question',
    },
  ];


  return (
    <div color='black'>
      <CustomNavbar/>
      <div style={{ display: 'flex' }}>
  {/* First container */}
  <div>
      <div className="doubtCardContainer">
    <h3 className='titlec' >Latest Doubts</h3>
    {doubts.map((doubt, index) => (
      <DoubtCard key={index} {...doubt} />
    ))}
  </div>

  {/* Second container */}
  <div className="doubtCardContainer">
    <h3 className='titlec'>My Doubts</h3>
    {doubts.map((doubt, index) => (
      <DoubtCard key={index} {...doubt} />
    ))}
  </div>

  </div>
  
    {/* <button className="button" onClick={openModal}>
        Add Doubt
    </button> */}
    <ChatPage />
    <AddDoubtModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onAddDoubt={handleAddDoubt}
      />
</div>
    </div>
  );
};

export default HomeScreen;

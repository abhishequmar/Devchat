// Navbar.js

import React from 'react';
import './Navbar.css'; // Import your stylesheet

const CustomNavbar = () => {
  return (
    <div className="navbar">
      {/* Brand */}
      <div className="brand">DevChat</div>

      {/* Components */}
      <div className="components">
        <a href="#">Component 1</a>
        <a href="#">Component 2</a>
        <a href="#">Component 3</a>
      </div>

      {/* Avatar */}
      <div className="avatar">
        <img
          src="https://placekitten.com/40/40" // Replace with your avatar image URL
          alt="Avatar"
          className="avatar-img"
        />
      </div>
    </div>
  );
};

export default CustomNavbar;

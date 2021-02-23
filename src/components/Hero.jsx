import React from "react";

const Hero = ({ handleLogout }) => {
  return (
    <div className="hero">
      <nav>
        <h1>Welcome To mY Website</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Hero;

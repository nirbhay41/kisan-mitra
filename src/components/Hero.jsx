import React from "react";
import firebase from "firebase";

const Hero = ({ handleLogout }) => {
  return (
    <div className="hero">
      <nav>
        <h1>Welcome To mY Website {firebase.auth().currentUser.displayName}</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Hero;

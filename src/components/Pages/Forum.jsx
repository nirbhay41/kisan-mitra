import React from "react";
import Chat from "../Chat/Chat";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Forum.scss";

function Forum() {
  return (
    <>
      <Navbar backgroundStyle='bg-grey'/>
      <div className="forum">
        <Sidebar />
        <Chat />
      </div>
    </>
  );
}

export default Forum;

import React from 'react';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import "./Forum.scss";

function Forum() {
    return (
        <>
            <div className="forum">
                <Sidebar />
                <Chat />
            </div>
        </>
    )
}

export default Forum;
